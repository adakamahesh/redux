import { useState } from "react";

function Todo({id,title}){
    const [editing,setEditing]=useState(false);
    const [newTitle,setNewTitle]=useState()
    return (
        <div>
            {
                editing?(
                    <div className="form-group">
                        <input className="'form-control" type="text"/>
                        <button className="btn btn-secondary">save</button>
                    </div>
                ):(
                    <li className="list-group-item">
                        <p>{title}</p>
                        <div className="action">
                            <button className="btn btn-warning">Edit</button>
                            <button className="btn btn-danger">Del</button>
                        </div>
                    </li>
                )
            }
        </div>
    )
}

export default Todo;