
import React, { useReducer } from 'react'

const Counter = () => {

    type counterStateType = {
        count: number;
    }

    const initialState = {
        count: 0
    }

    const INCREMENT = "INCREMENT"
    const RESET = "RESET"
    const DECREMENT = "DECREMENT"
    const INCREMENTBYAMOUNTACTION = "INCREMENTBYAMOUNTACTION"
    type IncrementActionType = { type: "INCREMENT" }
    type ResetActionType = { type: "RESET" }
    type DecrementActionType = { type: "DECREMENT" }
    type IncrementByAmountType = { type: "INCREMENTBYAMOUNTACTION", payload: number }

    const reducer = (state: counterStateType, action: IncrementActionType | ResetActionType | DecrementActionType | IncrementByAmountType) => {
        switch (action.type) {
            case INCREMENT:
                return { count: state.count + 1 }
            case RESET:
                return { count: 0 }
            case INCREMENTBYAMOUNTACTION:
                return { count: state.count + action.payload }

            case DECREMENT:
                return { count: state.count - 1 }
            default:
                throw new Error()
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <hr style={{ color: "red" }} className='mt-7' />
            <div>
                <h1>Count : {state.count} </h1>
                <button onClick={() => { dispatch({ type: INCREMENT }) }} className='px-5 bg-green-700 py-2 text-white uppercase rounded-xl '>Increment</button>

                <button onClick={() => { dispatch({ type: INCREMENTBYAMOUNTACTION , payload: 5 }) }} className='px-5 bg-green-700 py-2 text-white uppercase rounded-xl '>IncrementByAmount</button>

                <button onClick={() => dispatch({ type: RESET })} className='px-5 bg-yellow-500 py-2 text-white uppercase rounded-xl mx-3'>Reset</button>

                <button onClick={() => { dispatch({ type: DECREMENT }) }} className='px-5 bg-red-700 py-2 text-white uppercase rounded-xl'>Decrement</button>
            </div>

        </div >
    )
}

export default Counter