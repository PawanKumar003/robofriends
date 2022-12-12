import React from "react";
import Card from "./component/card/card";
import SearchInput from "./component/search/searchInput";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      robots: [],
      searchValue: "",
      filteredRobots: [],
      loading: true,
    };
  }

  componentDidMount() {
    // fetch(`https://jsonplaceholder.typicode.com/users`)
    //   .then((res) => res.json())
    //   .then((robots) => {
    //     this.setState({ robots: robots });
    //     this.setState({ filteredRobots: robots });
    //   });
    const getData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const robots = await res.json();

      this.setState({ robots: robots });
      this.setState({ filteredRobots: robots });

      this.setState({ loading: false });
    };
    getData();
  }

  filterRobots = (e) => {
    const newRobts = this.state.robots.filter((robot) =>
      robot.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    this.setState({ filteredRobots: newRobts });
  };

  render() {
    if (this.state.loading === true) {
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
            onChange={this.filterRobots}
            type="search"
          />
        </div>

        <div className="dFlex">
          {this.state.filteredRobots.map((el) => (
            <Card key={el.id} id={el.id} name={el.name} email={el.email} />
          ))}
        </div>
      </div>
    );
  }
}
export default App;
