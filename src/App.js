import './App.css';
import{useEffect,useState} from 'react'
import socketIO from "socket.io-client"
function App() {
  const [state,setState] = useState("")
  useEffect(()=>{
 socket=socketIO("http://localhost:3010/socket")
socket.on("balance",(data)=>{
  setState(data)
})  
},[])
console.log("new data",state);
  return (
    <div className="App">
     <h1>{state.balance}</h1>
     <h1>{state.tavankharid}</h1>
    </div>
  );
}

export default App;
