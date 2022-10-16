import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <div>
        <h1>Alert which button was clicked:</h1>
        <hr></hr>
        <center>
        <button onClick={()=>alert("You clicked on Home Button ")}>
          Home
        </button>
        <button onClick={()=>alert("You clicked on Home Exercise 1")}>
        Exercise 1
        </button>
        <button onClick={()=>alert("You clicked on Home Exercise 2")}>
        Exercise 2
        </button>
        <button onClick={()=>alert("You clicked on Home Exercise 3")}>
        Exercise 3
        </button>
        <button onClick={()=>alert("You clicked on Home Exercise 4")}>
        Exercise 4
        </button>
        <button onClick={()=>alert("You clicked on Home Exercise 5")}>
        Exercise 5
        </button>
        <button onClick={()=>alert("You clicked on Home Exercise 6")}>
        Exercise 6
        </button>
        <button onClick={()=>alert("You clicked on Home Exercise 7")}>
        Exercise 7
        </button>
        <button onClick={()=>alert("You clicked on Home Exercise 8")}>
        Exercise 8
        </button>
        <button onClick={()=>alert("You clicked on Home Exercise 9")}>
        Exercise 9
        </button></center>
        <br></br>
        <br></br>
        <center>
      <button onClick={()=>alert("You clicked on Button 1")}>
        Button 1
      </button>
      <button onClick={()=>alert("You clicked on Button 2")}>
        Button 2
      </button>
      <button onClick={()=>alert("You clicked on Button 3")}>
        Button 3
      </button>
      </center>
    </div>
  );
}

export default App;
