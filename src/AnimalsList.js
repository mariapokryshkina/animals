import React, { Component } from "react";
import { animals } from "./animals";
import AnimalsCart from "./AnimalsCart";

import { Switch, Route } from "react-router-dom";
import AnimalsSingle from "./AnimalsSingle";

class AnimalsList extends Component {
  state = {
    searchInput: "",
  };

  searchInputHandler = (event) => {
    this.setState({
      searchInput:event.target.value,
    })
    console.log(this.state.searchInput)
  };
   
  render() {

    /*const animalFilter = animals.filter((item) => (
       <AnimalsCart key={item.name} name={item.name} />
     ));*/
     
     const animalFilter = animals.filter((item) => {
            return item.name.includes(this.state.searchInput.toLowerCase());
        });
   
     const animalslisting = animalFilter.map((item)=> (
       <AnimalsCart key={item.name} name={item.name} src={'https://source.unsplash.com/1600x900/?' + item.name} />
     ));
    
    return (
      <div className="animalsList">
        <Switch>
          <Route exact path={this.props.match.path}>
            <input type="text" onChange={this.searchInputHandler} />
            {animalslisting}
          </Route>
          <Route path={`${this.props.match.path}/:animal`}>
            <AnimalsSingle />
          </Route>
        </Switch>
      </div>
    );
    
  }
}

export default AnimalsList;