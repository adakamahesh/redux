import { createStore, combineReducers } from "redux";

// Define State Types
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

// Initial States
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

// Action Types
type TodoAction =
  | { type: "ADD_TODO"; payload: { title: string } }
  | { type: "EDIT_TODO"; payload: { id: number; title: string } }
  | { type: "DELETE_TODO"; payload: number };

type AccountAction =
  | { type: "DEPOSIT"; payload: number }
  | { type: "WITHDRAW"; payload: number }
  | { type: "UPDATE_MOBILE"; payload: string }
  | { type: "UPDATE_NAME"; payload: string }
  | { type: "RESET" };

type TransactionAction = {
  type: "ADD_TRANSACTION";
  payload: {
    id: number;
    amount: number;
    type: string;
    date: Date;
  };
};
// Aggregate RootAction for all reducers
type RootAction = TodoAction | AccountAction | TransactionAction;

// Reducers
const todoReducer = (state: TodoState = initialTodoState, action: TodoAction): TodoState => {
  switch (action.type) {
    case "ADD_TODO":
      const newTodo: Todo = { id: state.nextId, title: action.payload.title };
      return {
        ...state,
        todos: [...state.todos, newTodo],
        nextId: state.nextId + 1,
      };
    case "EDIT_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? { ...todo, title: action.payload.title } : todo
        ),
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    default:
      return state;
  }
};
  
const accountReducer = (state: AccountState = initialAccountState, action: any): AccountState => {
  switch (action.type) {
    case "DEPOSIT":
      return { ...state, balance: state.balance + action.payload };
    case "WITHDRAW":
      return { ...state, balance: state.balance - action.payload };
    case "MOBILE_UPDATE":
      return { ...state, mobile: action.payload };
    case "NAME_UPDATE":
      return { ...state, fullName: action.payload };
    case "RESET":
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

// Combine Reducers
const rootReducer = combineReducers({
  account: accountReducer,
  transaction: transactionReducer,
  todo: todoReducer,
});

// Define RootState and AppDispatch Types
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

// Create Store
const store = createStore(rootReducer);

export default store;