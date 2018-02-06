import React, { Component } from "react";
import CarCard from "./components/CarCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Nav from "./components/Nav";
import cars from "./cars.json";
import "./App.css";

class App extends Component {
  // Setting this.state.cars to the cars json array
  state = {
    cars
  };

  removeCar = id => {
    // Filter this.state.cars for cars with an id not equal to the id being removed
    const cars = this.state.cars.filter(car => car.id !== id);
    // Set this.state.cars equal to the new cars array
    this.setState({ cars });
  };

  // Map over this.state.cars and render a CarCard component for each car object
  render() {
    return (

    
      
    
      <Wrapper>   
        <Nav></Nav>  
        <Title>MOPAR or No Car!</Title>
        {this.state.cars.map(car => (
          <CarCard
            removeCar={this.removeCar}
            id={car.id}
            key={car.id}
            year={car.year}
            make={car.make}
            image={car.image}
            color={car.color}
            model={car.model}
            top={car.top}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
