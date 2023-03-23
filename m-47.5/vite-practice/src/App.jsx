import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <div className="grid grid-cols-2 gap-4 justify-center mx-5">
      <Post></Post>
    </div>
  );
}

function Post(props) {
  let [count, setCount] = useState([]);
  useEffect(() => {
    async function getUserAsync() {
      let response = await fetch("https://jsonplaceholder.typicode.com/todos");
      let data = await response.json();
      return setCount(data);
    }
    getUserAsync();
  }, []);
  return (
    <div>
      {console.log(count)}
      <h1>lenght : {count.length}</h1>
       {count.map((one)=>{
        return (
          <div>
            <h1>{one.title}</h1>
          </div>
        )
      })}
    </div>
  );
}

{
  /* <District name=" eirty" spaciality="khana"></District>
      <District name="rymon" spaciality="khana"></District>
      <District name="kabila" spaciality="khana"></District>
      <District name="kuddos" spaciality="khana"></District>
      <District name="dumba" spaciality="khana"></District> */
}

// function District(props) {
//   const [count, setCount] = useState(1)
//      const counter = ()=>{
//       const newcount = count *2
//       setCount(newcount)
//      }

//   return (
//     <div className="bg-slate-700  rounded-lg">
//       <div className="flex justify-around mt-4">
//         <img className="" src={viteLogo} alt="" />
//         <img className="" src={reactLogo} alt="" />
//       </div>
//       <h1 className="text-white text-7xl text-blue-300">name :{props.name}</h1>
//       <p>spacialitya : {props.spaciality}</p>
//       <h1 className="text-5xl">{count}</h1>
//       <button
//         className="bg-white border-lg text-stone-900  m-2"
//         onClick={counter}
//       >
//         power Bost
//       </button>
//     </div>
//   );
// }
export default App;
