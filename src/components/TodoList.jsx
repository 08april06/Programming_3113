import TodoItem from "./TodoItem";
import TodoItemEmpty from "./TodoItemEmpty";

export default function TodoList ({ todos, toggleTodo, deleteTodo, editTodo}) {
    return (
        <ul className='todo__list'>
            {todos.length === 0 && <TodoItemEmpty/>}
            {todos.length > 0 && todos.map((todo) =>
                <TodoItem 
                    key={todo.id}
                    todo={todo} 
                    toggleTodo={toggleTodo}  
                    deleteTodo={deleteTodo}
                    editTodo={editTodo} />
            )}
        </ul>
    )
}