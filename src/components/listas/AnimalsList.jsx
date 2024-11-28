function AnimalsList(props){

    const category = props.category;
    const itemList = props.items;

    //animals.sort((a, b) => a.specie.localeCompare(b.specie)); //ordem alfabética
    //animals.sort((a, b) => b.specie.localeCompare(a.specie)); //ordem alfabética reversa
    itemList.sort((a, b) => a.weight - b.weight); // ordem numérica
    itemList.sort((a, b) => b.weight - a.weight); // ordem numérica reversa

    const heavyAnimals =  itemList.filter(itemList=> itemList.weight > 100);
    const lightAnimals = itemList.filter(itemList => itemList.weight < 100);

    const listItems = itemList.map(item => <li key=   {item.id}>
                                                        {item.specie}:&nbsp;
                                                        <b>{item.weight}</b> kilos
                                            </li>)

return( <>
        <h3>{category}</h3>
        <ol>{listItems}</ol>
</>);
}

export default AnimalsList