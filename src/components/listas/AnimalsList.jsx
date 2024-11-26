function AnimalsList(){

    const animals = [{id: 1, specie: "lion", weight: 180},
                    {id: 2, specie: "horse", weight: 400},
                    {id: 3, specie: "cat", weight: 5},
                    {id: 4, specie: "dog", weight: 10},
                    {id: 5, specie: "cow", weight: 600}]

    //animals.sort((a, b) => a.specie.localeCompare(b.specie)); //ordem alfabética
    //animals.sort((a, b) => b.specie.localeCompare(a.specie)); //ordem alfabética reversa
    animals.sort((a, b) => a.weight - b.weight); // ordem numérica
    animals.sort((a, b) => b.weight - a.weight); // ordem numérica reversa

    const heavyAnimals =  animals.filter(animal=> animal.weight > 100);
    const lightAnimals = animals.filter(animal => animal.weight < 100);

    const listItems = animals.map(animals => <li key= {animals.id}>
                                                 {animals.specie}:&nbsp;
                                                 <b>{animals.weight}</b> kilos
                                            </li>)

    return(<ol>{listItems}</ol>)
}

export default AnimalsList