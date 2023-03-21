import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     <Post></Post>
    </div>
  );
}

const Post = () => { 
  return (
    <div>
      <h1>this is heading</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quibusdam itaque temporibus autem harum assumenda facere officiis a perspiciatis error! Sit laudantium alias facere illo est amet earum nemo atque, dignissimos, dolor voluptates porro ipsam quia ipsa eum rerum adipisci.</p>
    </div>
  );
}
export default App;
