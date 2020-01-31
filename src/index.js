import React from "react";
import ReactDOM from "react-dom";
import subs from "./subscribers.json";
import "./index.css";

let users = subs;

class AppTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {users};
    
        this.compareBy.bind(this);
        this.sortBy.bind(this);
    }

  compareBy(key) {
    return function (a, b) {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    };
  }
 
  sortBy(key) {
    let usersCopy = [...this.state.users];
    usersCopy.sort(this.compareBy(key));
    this.setState({users: usersCopy});
  }

  render() {
  return (
    <div>
        <table id= "users">
        <thead>
            <tr>
            <th>Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Sport</th>
            </tr>
        </thead>
        <tbody>
            {this.state.users.map(e => (
            <tr>
                <td>{e.name}</td>
                <td>{e.lastName}</td>
                <td>{e.age}</td>
                <td>{e.sport}</td>
            </tr>
            ))}
        </tbody>
        </table>
        <div id= "buttonSort">
            <button onClick={() => this.sortBy('name')}>sortByName</button>
            <button onClick={() => this.sortBy('age')}>sortByAge</button>
            <button onClick={() => this.sortBy('sport')}>sortBySport</button>
        </div>
    </div>
  );
}
}

const container = document.getElementById("root");

ReactDOM.render(<AppTable />, container);
