import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Button from './components/Button'

/////////////////////
//This is where we will write all the functions to return JSX to be rendered client side
////////////////////

//This fxn is a component that returns JSX to be rendered.  JavaScript will do this dynamically under the hood


function App() {
  
  return (
    //Everything in the return statement is JSX
    //Because JSX is being returned, this function is referred to as a **component**
    <div className="App">
      {/* //here is where I will add components to be rendered in my App */}
      {/*the component fxn's name is always wrapped in default tags*/}
      <Hello/>      
      <h1>Hello Facebook</h1> 
      <h3>I'm learning how to use react</h3>
      <Button/>
      <Button/>
      <Button/>
    </div>
  );
};

export default App;
