import { useState } from 'react'
import './todolist.css'
import TodoHeader from './components/TodoHeader.jsx'
import TodoAdder from './components/TodoAdder.jsx'
import TodoList from './components/TodoList.jsx'

class Todo {
    constructor(text) {
        this.id = Date.now();
        this.text = text;
        this.isCompleted = false;
    }
}

function TodoListApp() {
    const [todos, setTodos] = useState([]);

    const addTodo = (text) => setTodos((todos) => [
        ...todos,
        new Todo(text)
    ]);

    const toggleTodo = (id) => {
        // 수정 포인트: setTodos로 감싸주어야 리액트가 변경사항을 인식합니다.
        // todo.isCompleted로 명확하게 지칭했습니다.
        setTodos(todos.map((todo) =>
            todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
        ));
    }
    const editTodo = (id, newtext) => {
        // todos에서 하나씩 todo 꺼내고, id가 같은 todo 찾아서, text를 newtext로 수정하자
        setTodos((todos) =>
            todos.map((todo) =>
                todo.id === id ? { ...todo, text: newtext } : todo
            )
        )
    }

    const deleteTodo = (id) => {
        setTodos((todos) => todos.filter((todo) => todo.id !== id));
    };
    
    return (
        <div className="todo">
            <TodoHeader />
            <TodoAdder addTodo={addTodo} />
            {/* toggleTodo를 하위 컴포넌트로 전달합니다. */}
            <TodoList todos={todos} toggleTodo={toggleTodo} editTodo={editTodo} deleteTodo={deleteTodo} />
        </div>
    )
}

export default TodoListApp;