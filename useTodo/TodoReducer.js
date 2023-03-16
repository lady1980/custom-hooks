

export const todoReducer = (initialState = [], action) => {

    switch (action.type) {
        case '[TODO] add todo':
            return [...initialState, action.payload]
        //se utiliza cuando aun no hemos implementado la accion
        //throw new Error('action.type=ABC aun no esta implementada');

        case '[TODO] remove todo':
            return initialState.filter(todo => todo.id !== action.payload);

        case '[TODO] toggle todo':
            return initialState.map(todo => {
                if (todo.id === action.payload)//el payload vendria siendo el id
                {

                    return {
                        ...todo,
                        done: !todo.done
                    }
                }
                return todo;
            });

        default:
            return initialState;
    }
}