import { useEffect, useReducer } from 'react';
import { todoReducer } from './TodoReducer';




const init = () => {

    return JSON.parse(localStorage.getItem('todos')) || [];
}


export const useTodo = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])



    //funcion que hay que hacer para emitir el todo revisar lo que sale en el console
    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] add todo',
            payload: todo
        }
        //para mandar mi acción utilizo el dispatch
        dispatch(action);
    }

    const handleDeleteTodo = (id) => {

        dispatch({
            type: '[TODO] remove todo',
            payload: id
        });
    }

    const handleToggleTodo = (id) => {

        dispatch({
            type: '[TODO] toggle todo',
            payload: id
        });

       
    }


    return {
        todos,
        todosCount: todos.length,
        pendingTodosCount:todos.filter(todo => !todo.done).length,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
       
    }


}
