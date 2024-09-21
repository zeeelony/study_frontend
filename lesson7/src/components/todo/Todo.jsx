

function Todo ({todo, deleteTodo, updateTodo}) {
    return (
        <li>
            <input type="checkbox"
                   onChange={(e) => updateTodo(todo.id, e.target.checked)}/>
            <span className={todo.status && "checked"}>{todo.title}</span>
            <button onClick={() => deleteTodo(todo.id)}>удалить</button>
        </li>
    );
}

export default Todo;