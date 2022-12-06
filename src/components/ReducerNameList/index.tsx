import { Reducer, useReducer } from "react"

interface IState {
  names: string[]
  name: string
}

interface IAction {
  type: string
  payload: string
}

export default function ReducerNameList () {
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
    names: [],
    name: '',
  })

  return (
    <div>
      <input 
        type="text"
        value={state.name}
        onChange={(e) => dispatch({ type: "SET_NAME", payload: e.target.value })}
      />
      <p>Name list</p>
      <button
        onClick={() => {
          dispatch({ type: 'ADD_NAME', payload: state.name })
        }}
      >
        Add New Name
      </button>
      <ul>
        {state.names.map((i: string, k: number) => (
          <li key={k}>{i}</li>
        ))}
      </ul>
    </div>
  )
}