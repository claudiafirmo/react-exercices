import './App.css';
import AnimalsList from './components/listas/AnimalsList';
import FruitsList from './components/listas/FruitsList';
import NamesList from './components/listas/NamesList';

function App() {
  return (
    <div className="App">
      <NamesList/>
      <FruitsList/>
      <AnimalsList/>
    </div>
  );
}

export default App;
