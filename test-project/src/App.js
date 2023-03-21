import logo from './logo.svg';
import './App.css';
const teachers = { name: 'rakib', title: 'mr', job: 'teacher' }
const styleT = {color: 'red'} 
function App() {
  return (
    <div className="App">
     <Post name={teachers.name} ></Post>
    </div>
  );
}

const Post = () => { 
  return (
    <div>
      <h1 style= {styleT} >name : {teachers.name}</h1> 
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quibusdam itaque temporibus autem harum assumenda facere officiis a perspiciatis error! Sit laudantium alias facere illo est amet earum nemo atque, dignissimos, dolor voluptates porro ipsam quia ipsa eum rerum adipisci.</p>
    </div>
  );
}
export default App;
