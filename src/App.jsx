import React, { useEffect, useState } from "react";
import Card from "./component/card/card";
import SearchInput from "./component/search/searchInput";

function App() {
  const [robots, setRobots] = useState([]);
  const [filteredRobots, setFilteredRobots] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // fetch(`https://jsonplaceholder.typicode.com/users`)
    //   .then((res) => res.json())
    //   .then((robots) => {
    //     this.setState({ robots: robots });
    //     this.setState({ filteredRobots: robots });
    //   });
    const getData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const robots = await res.json();
      setRobots(robots);
      setFilteredRobots(robots);
      setIsLoading(false);
    };
    getData();
  }, []);

  const filterRobots = (e) => {
    const newRobts = robots.filter((robot) =>
      robot.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredRobots(newRobts);
  };

  if (isLoading === true) {
    return (
      <div className="loader-container">
        <h1>Loading... </h1>
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="tc">
      <div>
        <h1 className="f1">RoboFriends</h1>
      </div>
      <div className="p2">
        <SearchInput
          placeholder="Search robots"
          onChange={filterRobots}
          type="search"
        />
      </div>

      <div className="dFlex">
        {filteredRobots.map((el) => (
          <Card key={el.id} id={el.id} name={el.name} email={el.email} />
        ))}
      </div>
    </div>
  );
}

export default App;
