import Button from './Button.jsx'

export default function TodoAdder() {
    return (
        <>
            <form className='todo_form'>
                <input type="text" placeholder="할일을 입력하세요." className='todo__input'></input>
                <Button type='submit' className='todo__button todo__button--add'>Add</Button>
            </form>
        </>
    )
}