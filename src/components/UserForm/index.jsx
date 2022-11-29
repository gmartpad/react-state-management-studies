import { useReducer } from "react"

export default function UserForm () {
  const [state, dispatch] = useReducer(
    (state, action) => ({
      ...state,
      ...action,
    }), {
      first: "",
      last: ""
    }
  )
  return (
    <div>
      <input 
        type="text" 
        value={state.first}
        onChange={(e) => dispatch({ first: e.target.value })}
      />
      <p>{state.first}</p>
      <input
        type="text"
        value={state.last}
        onChange={(e) => dispatch({ last: e.target.value })}
      />
      <p>{state.last}</p>
    </div>
  )
}