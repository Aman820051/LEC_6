import { useRef } from 'react'
import './App.css';
import Child from './Child'
function App() 
{

  let inputRef = useRef(null)

  function getValue()
  {
    inputRef.current.value = '1000'
  }

  return (
    <div className="App">
      <h1>App Component</h1>
      <Child ref={inputRef}/>
      <button onClick={getValue}>Click</button>
    </div>
  );
}

export default App;
