function CandysList(props){

    const category = props.category;
    const itemList = props.items;

    itemList.sort((a, b) => a.name.localeCompare(b.name))// ordem alfabetica
    //itemList.sort((a, b) => b.name.localeCompare(a.name))// ordem alfabetica reversa 
    //itemList.sort((a, b) => a.price - b.price); // ordem numérica
    //itemList.sort((a, b) => b.price - a.price); // ordem numérica reversa

    // as constantes a baixo filtram doces específicos através dos preços e transformam o resultado do map;
    // essas variáveis foram declaradas mas não estão sendo utilizadas;
    // substituir itemList por lowPrices ou highPrices para alterar o resultado;
    const lowPrice = itemList.filter(item => item.price <= 3);
    const highPrice = itemList.filter(item => item.price > 3);

    const listItems = itemList.map(item => <li key={item.id}>
                                            {item.name}:&nbsp; 
                                            <b>{item.price}</b> dollars
                                            </li>);

    return( <>
                <h3>{category}</h3>
                <ol>{listItems}</ol>
            </>);
    
    
}    

export default CandysList
