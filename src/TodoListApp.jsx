import './todolist.css'
import Button from './components/Button.jsx'

function TodoListApp() {
    return (
        <div className="todo">
            <h1>ToDo List</h1>
            <form className='todo_form'>
                <input type="text" placeholder="할일을 입력하세요." className='todo__input'></input>
                <Button type='submit' className='todo__button todo__button--add'>Add</Button>
            </form>
            <ul className='todo__list'>
                <li className="todo__item todo__item todo__item--empty">
                    <p>할 일 없음</p>
                </li>
                <li className='todo__item todo__item--complete'>
                    <input type="checkbox" id="chk-1" className='todo__check'></input> 
                    <label htmlFor="" className='todo__label'>놀기 </label>
                    <Button className='todo__button todo__button--edit'>✏️</Button> 
                    <Button className='todo__button todo__button--delete'>❌</Button>
                </li>
            </ul>
        </div>
    )
}

export default TodoListApp;