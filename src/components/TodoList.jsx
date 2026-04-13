import TodoItem from "./TodoItem";
import TodoItemEmpty from "./TodoItemEmpty";

export default function TodoList () {
    return (
        <ul className='todo__list'>
            <TodoItemEmpty/>
            <TodoItem/>
        </ul>
    )
}