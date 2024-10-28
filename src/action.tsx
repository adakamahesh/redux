// Define action types as string constants for type safety
export const ADD_TODO = "Add_todo";
export const EDIT_TODO = "Edit_todo";
export const DELETE_TODO = "Delete_todo";
export const DEPOSIT = "deposit";
export const WITHDRAW = "withdraw";
export const NAME_UPDATE = "nameUpdate";
export const MOBILE_UPDATE = "mobileUpdate";
export const RESET = "reset";

// Define interfaces for each action type
interface AddTodoAction {
    type: typeof ADD_TODO;
    payload: { title: string };  // Replace with the actual structure of a todo
}

interface EditTodoAction {
    type: typeof EDIT_TODO;
    payload: { id: number; title: string };  // Customize based on your todo structure
}

interface DeleteTodoAction {
    type: typeof DELETE_TODO;
    payload: number;
}

interface DepositAction {
    type: typeof DEPOSIT;
    payload: number;
}

interface WithdrawAction {
    type: typeof WITHDRAW;
    payload: number;
}

interface NameUpdateAction {
    type: typeof NAME_UPDATE;
    payload: string;
}

interface MobileUpdateAction {
    type: typeof MOBILE_UPDATE;
    payload: string;
}

interface ResetAction {
    type: typeof RESET;
}

// Combine the action types into a single type for the reducer
export type ActionTypes =
    | AddTodoAction
    | EditTodoAction
    | DeleteTodoAction
    | DepositAction
    | WithdrawAction
    | NameUpdateAction
    | MobileUpdateAction
    | ResetAction;

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
