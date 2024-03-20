import "../styles/CakeStyles.css";

const Cake = ({cake, sales, onButtonClick}) => {
    
    const handleSale = () => {
        onButtonClick(sales + cake.price);
    }

    

    return ( 
        <>
            <h3>{cake.cakeName}</h3>
            <p>Ingredients: </p>
            <ul>
                <li>{cake.ingredients[0]}</li>
                <li>{cake.ingredients[1]}</li>
                <li>{cake.ingredients[2]}</li>
                <li>{cake.ingredients[3]}</li>
                <li>{cake.ingredients[4]}</li>
                <li>{cake.ingredients[5]}</li>
            </ul>
            <p>Price: {cake.price}</p>
            <p>Rating: {cake.rating}</p>
            <button onClick={handleSale}>Sell Cake</button>
        </>
     );
}
 
export default Cake;