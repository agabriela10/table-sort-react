import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const data = [
  {
    name: "Pickle",
    lastName: "Rick",
    age: "65",
    sport: "Kill rats"
  },
  {
    name: "Artur",
    lastName: "King",
    age: "23",
    sport: "Run"
  },
  {
    name: "Bob",
    lastName: "Maley",
    age: "99",
    sport: "Soccer"
  },
  {
    name: "Pink",
    lastName: "Panter",
    age: "45",
    sport: "Basket"
  }
];

function AppTable() {

    return (
        <div className="App">
                <div class="container">
                    <div class="row">
                        <div class="col-12 text-md-left align-self-center">
                            <table class="table text-center">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Last Name</th>
                                        <th>Age</th>
                                        <th>Sport</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Pickle</td>
                                        <td>Rick</td>
                                        <td>65</td>
                                        <td>Kill rats</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
        
                <div class="container">
                    <div class="row">
                        <div class="col-4">
                            <button>sortByName</button>
                        </div>
                        <div class="col-4">
                            <button>sortByAge</button>
                        </div>
                        <div class="col-4">
                            <button>sortBySport</button>
                        </div>
                    </div>
                </div>
        </div>
    );
}

const container = document.getElementById('root');

ReactDOM.render(<AppTable />, container);