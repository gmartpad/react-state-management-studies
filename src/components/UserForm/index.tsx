import { Reducer, useReducer } from "react"

interface IState {
  first: string
  last: string
}

type IAction = Partial<IState>

export default function UserForm () {
  const [state, dispatch] = useReducer<Reducer<IState, IAction>>(
    (state, action) => ({
      ...state,
      ...action,
    }), {
      first: "",
      last: ""
    }
  )
  return (
    <div className="flex flex-col justify-center w-4/5 mx-auto">
      <span className="flex flex-col items-center my-6 text-center">
        <p>The First Name and Last Name inputs are being handled using the React useReducer hook</p>
      </span>
      <div>
        <div className="flex flex-col items-center">
          <input 
            placeholder="First Name"
            className="flex-1 my-2 shadow appearance-none border rounded w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text" 
            value={state.first}
            onChange={(e) => dispatch({ first: e.target.value })}
          />
          <p>First Name: {state.first}</p>
        </div>
        <div className="flex flex-col items-center">
          <input
            placeholder="Last Name"
            className="flex-1 my-2 shadow appearance-none border rounded w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            value={state.last}
            onChange={(e) => dispatch({ last: e.target.value })}
          />
          <p>Last Name: {state.last}</p>
        </div>
      </div>
    </div>
  )
}