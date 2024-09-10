import Todo from '../../components/Todo/Todo'
import styles from './TodosPage.css'

function TodosPage(){
    const todos = ["todo 1", "todo 2", "todo 3"];
    return(
        <>
         <div className={styles.todosPage}>
      <h1>Todos Page</h1>
      <ul>
        {todos.map((todo, index) => (
          <Todo key={index} todo={todo} />
        ))}
      </ul>
    </div>
        </>
    )
}

export default TodosPage;