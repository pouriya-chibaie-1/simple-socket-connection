import './App.css';
import { useCallback, useEffect, useReducer, useState } from 'react'
import socketIO from "socket.io-client"
function App() {
  const nameInitialState = ""
  const reducer = (state = nameInitialState, action) => {
    switch (action.type) {
      case "UPDATE_STATE":
        return action.data

      default:
        return state
    }
  }
  const [count, setCount] = useState(0)
  const [socketBool, setSocketBool] = useState(false)
  const [state, dispatch] = useReducer(reducer, "")


  const socketConnection = useCallback(()=>{
    const socket = socketIO("http://localhost:3010/socket")

    socket.on("balance", (data) => {
      dispatch({ type: "UPDATE_STATE", data })
    })
    return () => socket.on("disconnect", () => {
      console.log("user disconnect client");
    })

  },[socketBool])
  useEffect(()=>{
socketConnection()
  },[])
  console.log("new data", state);

  return (
    <div className="App">
      <h1>{state.balance}</h1>
      <h1>{state.tavankharid}</h1>
      <button onClick={()=>{setCount((prev)=>prev + 1)}}>{count}</button>
    </div>
  );
}

export default App;
