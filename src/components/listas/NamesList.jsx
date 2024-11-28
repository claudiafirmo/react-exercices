function NamesList(props){

    const category = props.category;
    const itemList = props.items;

     // surnames é uma variável com um array de cinco strings
    //const surnames = ["firmo", "lima", "rodrigues", "bastos", "oliveira"];

    // as constantes a baixo filtram pessoas específicas através das idades e transformam o resultado do map;
    // essas variaveis foram declaradas mas não estão sendo utilizadas;
    // substituir people por familyOldAge ou familyNewAge para alterar o resultado;
    const familyOldAge = itemList.filter(person => person.age > 30);
    const familyNewAge = itemList.filter(person => person.age < 30);

    itemList.sort((a, b) => a.name.localeCompare(b.name)); // ordem alfabetica
    //people.sort((a, b) => b.name.localeCompare(a.name)); // ordem alfabética reversa
    //people.sort((a, b) => a.age - b.age); // ordem numérica
    //people.sort((a, b) => b.age - a.age); // ordem numérica reversa

    const listItems = itemList.map(item => <li key={item.id}>
                                                    {item.name}:&nbsp;
                                                    <b>{item.age}</b> years
                                            </li>)                
    return(<>
        <h3>{category}</h3>
        <ol>{listItems}</ol>
            </>)
}

export default NamesList