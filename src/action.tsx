// Define action types as string constants for type safety
export const ADD_TODO = "ADD_TODO";
export const EDIT_TODO = "EDIT_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const DEPOSIT = "DEPOSIT";
export const WITHDRAW = "WITHDRAW";
export const NAME_UPDATE = "NAME_UPDATE";
export const MOBILE_UPDATE = "MOBILE_UPDATE";
export const RESET = "RESET";
export const ADD_TRANSACTION = "ADD_TRANSACTION"; // Add this line for the transaction action type

// Define interfaces for each action type
interface AddTodoAction {
    type: typeof ADD_TODO;
    payload: { title: string };  // The structure of a todo
}

interface EditTodoAction {
    type: typeof EDIT_TODO;
    payload: { id: number; title: string };  // Customize based on your todo structure
}

interface DeleteTodoAction {
    type: typeof DELETE_TODO;
    payload: number; // The ID of the todo to delete
}

interface DepositAction {
    type: typeof DEPOSIT;
    payload: number; // The amount to deposit
}

interface WithdrawAction {
    type: typeof WITHDRAW;
    payload: number; // The amount to withdraw
}

interface NameUpdateAction {
    type: typeof NAME_UPDATE;
    payload: string; // The updated name
}

interface MobileUpdateAction {
    type: typeof MOBILE_UPDATE;
    payload: string; // The updated mobile number
}

interface ResetAction {
    type: typeof RESET;
}

interface AddTransactionAction { // Define the interface for the add transaction action
    type: typeof ADD_TRANSACTION;
    payload: {
        id: number;
        amount: number;
        date: Date;
        type: "Credit" | "Debit";
    };
}

// Define unions for each action category
export type TodoAction = AddTodoAction | EditTodoAction | DeleteTodoAction;
export type TransactionAction = AddTransactionAction;
export type AccountAction = DepositAction | WithdrawAction | NameUpdateAction | MobileUpdateAction | ResetAction;

// Define the RootAction union type
export type RootAction = AccountAction | TodoAction | TransactionAction;

// Action creators with type annotations
export function addTodo(todo: { title: string }): AddTodoAction {
    return { type: ADD_TODO, payload: todo };
}

export function editTodo(todo: { id: number; title: string }): EditTodoAction {
    return { type: EDIT_TODO, payload: todo };
}

export function deleteTodo(id: number): DeleteTodoAction {
    return { type: DELETE_TODO, payload: id };
}

export function deposit(amount: number): DepositAction {
    return { type: DEPOSIT, payload: amount };
}

export function withdraw(amount: number): WithdrawAction {
    return { type: WITHDRAW, payload: amount };
}

export function nameUpdate(fullName: string): NameUpdateAction {
    return { type: NAME_UPDATE, payload: fullName };
}

export function mobileUpdate(mobile: string): MobileUpdateAction {
    return { type: MOBILE_UPDATE, payload: mobile };
}

export function reset(): ResetAction {
    return { type: RESET };
}

export function addTransaction(transaction: {
    id: number;
    amount: number;
    date: Date;
    type: "Credit" | "Debit";
}): AddTransactionAction {
    return { type: ADD_TRANSACTION, payload: transaction };
}