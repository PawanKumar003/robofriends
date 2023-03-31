import React, { useEffect, useState } from "react";
// import Card from "./component/card/card";
// import SearchInput from "./component/search/searchInput";
// import Todo from "./component/todolist/Todo";
import Todolist from "./component/reduxtoolkit/Todolist";

function App() {
  // const [robots, setRobots] = useState([]);
  // const [filteredRobots, setFilteredRobots] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   // fetch(`https://jsonplaceholder.typicode.com/users`)
  //   //   .then((res) => res.json())
  //   //   .then((robots) => {
  //   //     this.setState({ robots: robots });
  //   //     this.setState({ filteredRobots: robots });
  //   //   });
  //   const getData = async () => {
  //     const res = await fetch("https://jsonplaceholder.typicode.com/users");
  //     const robots = await res.json();
  //     setRobots(robots);
  //     setFilteredRobots(robots);
  //     setIsLoading(false);
  //   };
  //   getData();
  // }, []);

  // const filterRobots = (e) => {
  //   const newRobts = robots.filter((robot) =>
  //     robot.name.toLowerCase().includes(e.target.value.toLowerCase())
  //   );
  //   setFilteredRobots(newRobts);
  // };

  // if (isLoading === true) {
  //   return (
  //     <div className="">
  //       <h1>Loading... </h1>
  //       <div className=""></div>
  //     </div>
  //   );
  // }

  return (
    // <div className="">
    //   {/* <div>
    //     <h1 className="">RoboFriends</h1>
    //   </div> */}
    //   {/* <div className="">
    //     <SearchInput
    //       placeholder="Search robots"
    //       onChange={filterRobots}
    //       type="search"
    //     />
    //   </div> */}

    //   {/* <div className=""> */}
    //     {/* {filteredRobots.map((el) => (
    //       <Card key={el.id} id={el.id} name={el.name} email={el.email} />
    //     ))} */}
    //   {/* </div> */}
    //   <div className="text-white font-bold container bg-red-900 mx-auto h-40 hover:h-40 hover:bg-blue-700 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5 ">
    //     <div className="bg-green-500 tex-3xl text-center col-start-1 col-end-4">A</div>
    //     <div className="bg-green-500 tex-3xl text-center col-span-3">B</div>
    //     <div className="bg-green-500 tex-3xl text-center">C</div>
    //     <div className="bg-green-500 tex-3xl text-center">D</div>
    //     <div className="bg-green-500 tex-3xl text-center">A</div>
    //     <div className="bg-green-500 tex-3xl text-center" >B</div>
    //     <div className="bg-green-500 tex-3xl text-center">C</div>
    //     <div className="bg-green-500 tex-3xl text-center">D</div>

    //     {/* <h1 className="sm:text-left lg:text-center xl:text-center xs:text-center text-3xl text-bubble-gum xs:text-[red] ">Hello world</h1> */}
    //   </div>



    //   <div className="text-white font-bold container mx-auto h-40 grid grid-rows-4 grid-flow-col gap-5 mt-5">
    //     <div className="group bg-green-500 tex-3xl text-center hover:bg-blue-500 hover:text-red-500">
    //     <p className="text-black group-hover:text-white duration-1000">hhhhhh</p>
    //     <p className="">hsdfhhhhh</p>
    //     </div>
    //     <div className="bg-green-500 tex-3xl text-center ">2</div>
    //     <div className="bg-green-500 tex-3xl text-center">3</div>
    //     <div className="bg-green-500 tex-3xl text-center">4</div>
    //     <div className="bg-green-500 tex-3xl text-center">5</div>
    //     <div className="bg-green-500 tex-3xl text-center" >6</div>
    //     <div className="bg-green-500 tex-3xl text-center">7</div>
    //     <div className="bg-green-500 tex-3xl text-center">8</div>
    //     <div className="bg-green-500 tex-3xl text-center ">9</div>
    //     <div className="bg-green-500 tex-3xl text-center ">10</div>
    //     <div className="bg-green-500 tex-3xl text-center">11</div>
    //     <div className="bg-green-500 tex-3xl text-center">12</div>
    //     <div className="bg-green-500 tex-3xl text-center">13</div>
    //     <div className="bg-green-500 tex-3xl text-center" >14</div>
    //     <div className="bg-green-500 tex-3xl text-center">15</div>
    //     <div className="bg-green-500 tex-3xl text-center">16</div>

    //     {/* <h1 className="sm:text-left lg:text-center xl:text-center xs:text-center text-3xl text-bubble-gum xs:text-[red] ">Hello world</h1> */}
    //   </div>
    // </div>
    <div className="w-full">
      {/* <Todo />  */}
      <Todolist />
    </div>
  );
}

export default App;
