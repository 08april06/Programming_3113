import Checkbox from "./Checkbox"
import Button from "./Button"
import { useState } from "react"

export default function TodoItem({ todo, toggleTodo, deleteTodo, editTodo }) {
    const [editText, setEditText] = useState(todo.text);  // 수정한 text
    const [isEditing, setIsEditing] = useState(false);    // 수정 중 인지 아닌지
    const handelEditText = () => {
        if (!isEditing) {
            setEditText(todo.text);
            setIsEditing(true);
        } else {
            const trimmedText = editText.trim();
            if(trimmedText !== "" && trimmedText !== todo.text)
                editTodo(todo.id, editText);
            setIsEditing(false);
        }
    }
    return (
        <li className={`todo__item${todo.isCompleted ? " todo__item--complete" : ""}`}>
            {!isEditing && (
                <Checkbox
                    id={todo.id}
                    checked={todo.isCompleted}
                    onChange={() => toggleTodo(todo.id)}
                >
                    {todo.text}
                </Checkbox>
            )}

            {isEditing && (
                <input
                    type="text"
                    className="todo__input--edit"
                    value={editText}
                    onChange={(event) => setEditText(event.target.value)}
                    // enter 치면 handleEditText() 실행하기
                    onKeyDown={(e) => {
                        if (e.key == 'Enter') {
                            handelEditText
                        }
                    }}
                    autoFocus
                />
            )}

            <Button className='todo__button todo__button--edit'
                onClick={handelEditText}>{!isEditing?"✏️" : "🫙"}</Button>
            <Button 
                className='todo__button todo__button--delete'
                onClick={() => deleteTodo(todo.id)}>❌</Button>
        </li >
    )
}