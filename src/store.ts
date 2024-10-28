// store.ts
import { combineReducers, createStore } from "redux";
import { RootState } from "./store";

// Define the types for each part of the state
interface Todo {
  id: number;
  title: string;
}

interface TodoState {
  todos: Todo[];
  nextId: number;
}

interface AccountState {
  balance: number;
  fullName: string;
  mobile: string | null;
}

interface Transaction {
  id: number;
  amount: number;
  type: string;
  date: Date;
}

type TransactionState = Transaction[];

// Initial states
const initialTodoState: TodoState = {
  todos: [],
  nextId: 1,
};

const initialAccountState: AccountState = {
  balance: 0,
  fullName: "",
  mobile: null,
};

const initialTransactionState: TransactionState = [];

// Define action types
type TodoAction =
  | { type: "Add_todo"; payload: { title: string } }
  | { type: "Edit_todo"; payload: { id: number; title: string } }
  | { type: "Delete_todo"; payload: number };

type AccountAction =
  | { type: "deposit"; payload: number }
  | { type: "withdraw"; payload: number }
  | { type: "mobileUpdate"; payload: string }
  | { type: "nameUpdate"; payload: string }
  | { type: "reset" };

type TransactionAction = {
  type: "ADD_TRANSACTION";
  payload: {
    id: number;
    amount: number;
    type: string;
    date: Date;
  };
};

// Reducers
const todoReducer = (state: TodoState = initialTodoState, action: TodoAction): TodoState => {
  switch (action.type) {
    case "Add_todo":
      const newTodo: Todo = { id: state.nextId, title: action.payload.title };
      return {
        ...state,
        todos: [...state.todos, newTodo],
        nextId: state.nextId + 1,
      };
    case "Edit_todo":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? { ...todo, title: action.payload.title } : todo
        ),
      };
    case "Delete_todo":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    default:
      return state;
  }
};

const accountReducer = (state: AccountState = initialAccountState, action: AccountAction): AccountState => {
  switch (action.type) {
    case "deposit":
      return { ...state, balance: state.balance + action.payload };
    case "withdraw":
      return { ...state, balance: state.balance - action.payload };
    case "mobileUpdate":
      return { ...state, mobile: action.payload };
    case "nameUpdate":
      return { ...state, fullName: action.payload };
    case "reset":
      return initialAccountState;
    default:
      return state;
  }
};

const transactionReducer = (state: TransactionState = initialTransactionState, action: TransactionAction): TransactionState => {
  switch (action.type) {
    case "ADD_TRANSACTION":
      return [
        ...state,
        {
          id: action.payload.id,
          amount: action.payload.amount,
          type: action.payload.type,
          date: action.payload.date,
        },
      ];
    default:
      return state;
  }
};

// Combine reducers
const rootReducer = combineReducers({
  account: accountReducer,
  transaction: transactionReducer,
  todo: todoReducer,
});

// Define RootState and configure store
export type RootState = ReturnType<typeof rootReducer>;
const store = createStore(rootReducer);

export default store;