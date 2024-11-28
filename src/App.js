import './App.css';
import AnimalsList from './components/listas/AnimalsList';
import FruitsList from './components/listas/FruitsList';
import NamesList from './components/listas/NamesList';
import CandysList from './components/listas/CandiesList';

function App() {

  // people é um array que possui 5 objetos;
  //cada um dos objetos nesse array tem 2 propriedades;
  const people= [{name:'bruno', age: 51}, 
                {name:'marize', age: 49}, 
                {name: 'mario', age: 31}, 
                {name: 'cristina', age: 29}, 
                {name:'julio', age: 27}, 
                {name: 'marilize', age: 15}];

  // fruits é uma variável com um array que possui 5 objetos;
    //cada um dos objetos nesse array tem 2 propriedades;
    const fruits = [{id: 1, name: "apple", calories: 52},
                    {id: 2, name: "orange", calories: 47},
                    {id: 3, name: "banana", calories: 89},
                    {id: 4, name: "pineapple", calories: 50},
                    {id: 5, name: "grape", calories: 69}]

  const animals = [{id: 1, specie: "lion", weight: 180},
                    {id: 2, specie: "horse", weight: 400},
                    {id: 3, specie: "cat", weight: 5},
                    {id: 4, specie: "dog", weight: 10},
                    {id: 5, specie: "cow", weight: 600}]


    const candies = [{id: 1, name:"lolipop", price: 1},
                    {id: 2, name: "donuts", price: 3},
                    {id: 3, name:  "chocolate", price: 4},
                    {id: 4, name:  "cupcakes", price: 5},
                    {id: 5, name: "cinnamon rolls", price: 5}];
  
  return (
    <div className="App">
      <NamesList items={people} category="Names"/>
      <FruitsList items={fruits} category="Fruits"/>
      <AnimalsList items={animals} category="Animals"/>
      <CandysList items={candies} category="Candies"/>

    </div>
  );
}

export default App;
