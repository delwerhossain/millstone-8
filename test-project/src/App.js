import logo from './logo.svg';
import './App.css';
const teachers = { name: 'rakib', title: 'mr', job: 'teacher' }
const styleT = { color: 'red' } 


// application
function App() {
  return (
    <div className="App">
     <Post name ='chcek-props' ></Post>
    </div>
  );
}

// custom components
const Post = (props) => { 
  const arry = ["dos","dom","test","lox"]
  return (
    <div className='post'>
      <h1 style= {styleT} >name : {teachers.name}</h1> 
      <p>props:{props.name}</p>
      <p>arry: {arry.map(sin => <li>{sin}</li>)}</p>
      {/* <p>teachers : {teachers.forEach(item => <li>{item}</li> )}</p> */}
      
    </div>
  );
}


export default App;
