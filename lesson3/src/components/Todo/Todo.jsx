import styles from  './Todo.css'

function Todo({todo}){
    return(<li ClassName={styles.todoItem}>{todo}</li>)
}

export default Todo