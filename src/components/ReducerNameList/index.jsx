import { useReducer } from "react"

export default function ReducerNameList () {
  const [state, dispatch] = useReducer((state, action) => {
    switch(action.type) {
      case "SET_NAME":
        return {...state, name: action.payload}
      case "ADD_NAME":
        return {
          ...state, 
          names: [...state.names, action.payload],
          name: ''
        }
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
        {state.names.map((i, k) => (
          <li key={k}>{i}</li>
        ))}
      </ul>
    </div>
  )
}