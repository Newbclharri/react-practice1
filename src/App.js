import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Button from './components/Button';
import Image from './components/Image';

/////////////////////
//This is where we will write all the functions to return JSX to be rendered client side
////////////////////

//This fxn is a component that returns JSX to be rendered.  JavaScript will do this dynamically under the hood


function App() {
const src1 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC0Th9IULWsy1wqey23-RMozzhQIcWdTh0_A&usqp=CAU";
const src2 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT33pDECC1L4v9tAqkZbaiKUuda00eI_Rbkw&usqp=CAU";
const src3 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoFXaDiEFhJgzHp5_Mg107JD0AC5u74hEXuQ&usqp=CAU";
  return (
    //Everything in the return statement is JSX
    //Because JSX is being returned, this function is referred to as a **component**
    <div className="App">
      {/* //here is where I will add components to be rendered in my App */}
      {/*the component fxn's name is always wrapped in default tags*/}
      <Hello/>      
      <h1>Hello Facebook</h1> 
      <h3>I'm learning how to use react</h3>
      {/*each component has its own props object*/}
      {/*Ask how to <Button>Hello World</Button> style */}
      <Button text="props.txt v1"/>
      <Button text="props.txt v2"/>      
      <Button text="props.txt v3"/>
      <br></br>
      <br></br>
      <Image src={src1} alt="Mario at the beach"/>
      <Image src={src2} alt="Mario Odyssey"/>
      <Image src={src3} alt="On Mario's Odyssey"/>
    </div>
  );
};

export default App;
