import Checkbox from "./Checkbox"
import Button from "./Button"

export default function TodoItem({ todo }) {
    return (
        // todo.isComplted가 참이면 " todo__item--complete"
        <li className={`todo__item${todo.isCompleted?" todo__item--complete" : ""}`}>
            <Checkbox id={todo.id}>{todo.text}</Checkbox>
            <Button className='todo__button todo__button--edit'>✏️</Button>
            <Button className='todo__button todo__button--delete'>❌</Button>
        </li>
    )
}