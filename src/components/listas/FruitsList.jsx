function FruitsList(props){

    const category = props.category;
    const itemList = props.items;
    
    // candys é uma variável com um array de cinco strings
    //const candys = ["lolipop", "donuts", "chocolate", "cupcakes", "cinnamon rolls"];

    itemList.sort((a, b) => a.name.localeCompare(b.name)); // ordem alfabetica
    //itemList.sort((a,b) => b.name.localeCompare(a.name)); //ordem alfabetica reversa
    //itemList.sort((a, b) => a.calories - b.calories); // ordem numérica
    //itemList.sort((a, b) => b.calories - a.calories); // ordem numérica reversa

    // as constantes a baixo filtram frutas específicas através das calorias e transformam o resultado do map;
    // essas variáveis foram declaradas mas não estão sendo utilizadas;
    // substituir fruits por lowCalories ou highCalories para alterar o resultado;
    const lowCalories = itemList.filter(item => item.calories < 50);
    const highCalories = itemList.filter(item => item.calories > 50);

    const listItems = itemList.map(item => <li key={item.id}>
                                                    {item.name}:&nbsp; 
                                                    <b>{item.calories}</b> cal
                                          </li>)
     return( <>
        <h3>{category}</h3>
        <ol>{listItems}</ol>
    </>);
}

export default FruitsList