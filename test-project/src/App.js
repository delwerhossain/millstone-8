// import logo from './logo.svg';
import { useEffect, useState } from "react";
import "./App.css";

// application
function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <Posts></Posts>
    </div>
  );
}



function Posts() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div> 
      <h1> from Posts : </h1>
   {user.map(user => {
     return (
       <div> {console.log(user)}
         <Users title={user.title} body={user.body } id={user.id } ></Users> 
         </div> 
      );
   })}
    </div>  
  );
}

function Users(props) {
  return (
    <div>
      <h1>{props.id }</h1>
      <h2>{props.title }</h2>
      <p> {props.body } </p>
    </div>
  )
}




function Counter() {
  const [count, setCount] = useState(0);
  const increseCounter = () => {
    let newcount = count + 1;
    setCount(newcount);
  };
  const decreseCounter = () => {
    let newcount = count - 1;
    setCount(newcount);
  };
  return (
    <div>
      <h1>count{count}</h1>
      <button onClick={increseCounter}> increseCounter</button>
      <button onClick={decreseCounter}> increseCounter</button>
    </div>
  );
}

// const teachers = { name: "rakib", title: "mr", job: "teacher" };
// const styleT = { color: "red" };
// custom components
// const Post = (props) => {
//   const arry = ["dos", "dom", "test", "lox"];
//   const posts = [
//     {
//       id: 1,
//       title: "Sample Title 1",
//       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
//     },
//     {
//       id: 2,
//       title: "Sample Title 2",
//       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
//     },
//     {
//       id: 3,
//       title: "Sample Title 3",
//       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
//     },
//   ];

//   return posts.map((post) => {
//     return (
//       <div className="post">
//         <h1>{post.id} : {post.title} </h1>
//         <p>{post.description} </p>
//         <h3>name : {teachers.name}</h3>
//         <p>props:{props.name}</p>
//         <p>
//           arry:{arry.map((sin) => (
//             <li>{sin}</li>
//           ))}
//         </p>
//         {/* <p>teachers : {teachers.forEach(item => <li>{item}</li> )}</p> */}
//       </div>
//     );
//   });
// };

export default App;
