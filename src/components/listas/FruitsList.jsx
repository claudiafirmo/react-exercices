function FruitsList(){
    
    // candys é uma variável com um array de cinco strings
    //const candys = ["lolipop", "donuts", "chocolate", "cupcakes", "cinnamon rolls"];

    // fruits é uma variável com um array que possui 5 objetos;
    //cada um dos objetos nesse array tem 2 propriedades;
    const fruits = [{id: 1, name: "apple", calories: 52},
                    {id: 2, name: "orange", calories: 47},
                    {id: 3, name: "banana", calories: 89},
                    {id: 4, name: "pineapple", calories: 50},
                    {id: 5, name: "grape", calories: 69}]

    fruits.sort((a, b) => a.name.localeCompare(b.name)); // ordem alfabetica
    //fruits.sort((a,b) => b.name.localeCompare(a.name)); //ordem alfabetica reversa
    //fruits.sort((a, b) => a.calories - b.calories); // ordem numérica
    //fruits.sort((a, b) => b.calories - a.calories); // ordem numérica reversa

    // as constantes a baixo filtram frutas específicas através das calorias e transformam o resultado do map;
    // essas variáveis foram declaradas mas não estão sendo utilizadas;
    // substituir fruits por lowCalories ou highCalories para alterar o resultado;
    const lowCalories = fruits.filter(fruit => fruit.calories < 50);
    const highCalories = fruits.filter(fruit => fruit.calories > 50);

    const listItens = fruits.map(fruit => <li key={fruit.id}>
                                                    {fruit.name}:&nbsp; 
                                                    <b>{fruit.calories}</b> cal
                                            </li>)
    return(<ol>{listItens}</ol>)
}

export default FruitsList