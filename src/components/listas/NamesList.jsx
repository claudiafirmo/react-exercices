function NamesList(){

     // surnames é uma variável com um array de cinco strings
    //const surnames = ["firmo", "lima", "rodrigues", "bastos", "oliveira"];

    // people é um array que possui 5 objetos;
    //cada um dos objetos nesse array tem 2 propriedades;
    const people= [{name:'bruno', age: 51}, 
                {name:'marize', age: 49}, 
                {name: 'mario', age: 31}, 
                {name: 'cristina', age: 29}, 
                {name:'julio', age: 27}, 
                {name: 'marilize', age: 15}];

    // as constantes a baixo filtram pessoas específicas através das idades e transformam o resultado do map;
    // essas variaveis foram declaradas mas não estão sendo utilizadas;
    // substituir people por familyOldAge ou familyNewAge para alterar o resultado;
    const familyOldAge = people.filter(person => person.age > 30);
    const familyNewAge = people.filter(person => person.age < 30);

    people.sort((a, b) => a.name.localeCompare(b.name)); // ordem alfabetica
    //people.sort((a, b) => b.name.localeCompare(a.name)); // ordem alfabética reversa
    //people.sort((a, b) => a.age - b.age); // ordem numérica
    //people.sort((a, b) => b.age - a.age); // ordem numérica reversa

    const listItems = people.map(person => <li key={person.id}>
                                                    {person.name}:&nbsp;
                                                    <b>{person.age}</b> years
                                            </li>)                
    return(<ul>{listItems}</ul>)
}

export default NamesList