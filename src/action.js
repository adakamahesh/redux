export function addTodo(todo){
    return {type:"Add_todo",payload:todo}
}

export function editTodo(todo){
    return {type:"Edit_todo",payload:todo}
}

export function deleteTodo(id){
    return {type:"Delete_todo",payload:id}
}

export function deposit(amount){
    return {type:"deposit",payload:amount}
}

export function withdraw(amount){
    return {type:"withdraw",payload:amount}
}

export function nameUpdate(fullName){
    return {type:"nameUpdate", payload: fullName}
}

export function mobileUpdate(mobile){
    return {type:"mobileUpdate", payload: mobile}
}

export function reset(){
    return {type:"reset"}
}