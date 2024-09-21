import {useState, useEffect} from "react";
import Todo from "../../components/todo/Todo";

const URL ="http://localhost:8000/todos"

function TodosPage() {
    const [inputValue, setInputValue] = useState("");
    const [todos, setTodos] = useState([]);

    async function getTodos() {
        const response = await fetch(URL)
        const todos = await response.json();
        setTodos(todos)
    }

    async function createTodo() {
        const data = {
            title: inputValue,
            status: false
        }
        const response = await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })

        if(response.status === 201){
            getTodos()
        }
    }

    async function deleteTodo (id) {
        const response = await fetch(`${URL}/${id}`, {
            method: "DELETE"
        })

        if(response.status === 200) {
            getTodos();
        }
    }

    async function updateTodo (id, status) {
        const oneTodo = {
            status
        }

        const response = await fetch(`${URL}/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(oneTodo)
        })

        if(response.status === 200) {
            getTodos()
        }

    }

    useEffect(() => {
        getTodos()
    }, []);




    return (
        <div>
            <h2>Todo list</h2>
            <input
                type="text"
                   placeholder="введите задачу"
                   onInput={(e) => setInputValue(e.target.value)}/>
            <button onClick={createTodo}>создать задачу</button>
            <ul>
                {todos.map(element => <Todo
                    todo={element}
                    deleteTodo={deleteTodo}
                    updateTodo={updateTodo}
                />)}
            </ul>
        </div>
    );
}

export default TodosPage;