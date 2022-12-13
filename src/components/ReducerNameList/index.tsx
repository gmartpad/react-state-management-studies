import { Reducer, useReducer } from "react"

interface IState {
  names: string[]
  name: string
}

interface IAction {
  type: string
  payload: string
}

export default function 
ReducerNameList () {
  const [state, dispatch] = useReducer<Reducer<IState, IAction>>((state: IState, action: IAction) => {
    switch(action.type) {
      case "SET_NAME":
        return {...state, name: action.payload}
      case "ADD_NAME":
        return {
          ...state, 
          names: [...state.names, action.payload],
          name: ''
        }
      default:
        return {...state}
    }
  },{
    names: ['Jack', 'Jill', 'John'],
    name: '',
  })

  return (
    <div className="w-4/5 mx-auto">
      <span className="flex flex-col items-center my-6 text-center">
        <p>The Name list, the input and the button below are being handled using the React useReducer hook</p>
      </span>
      <div className="flex justify-center">
        <div className="flex flex-col items-center">
          <p className="font-bold">Name list:</p>
          <ul className="flex flex-col items-center">
            {state.names.map((i: string, k: number) => (
              <li key={k}>{i}</li>
            ))}
          </ul>
        </div>
        <div className="flex justify-end items-center pl-8">
          <input
            placeholder="Name"
            className="flex-1 my-2 shadow appearance-none border rounded w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            value={state.name}
            onChange={(e) => dispatch({ type: "SET_NAME", payload: e.target.value })}
          />
          <button
            className="my-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
            onClick={() => {
              dispatch({ type: 'ADD_NAME', payload: state.name })
            }}
          >
            Add Name
          </button>
        </div>
      </div>
    </div>
  )
}