import "../styles/CakeStyles.css";

const Cake = ({cake, sales, onButtonClick}) => {
    
    const handleSale = () => {
        onButtonClick(sales + cake.price);
    }

    const listIngredients = () => {
        const listItems = cake.ingredients.map(ingredient => <li>{ingredient}</li>);
        return <ul>{listItems}</ul>;
    }

    return ( 
        <>
            <h3>{cake.cakeName}</h3>
            <p>Ingredients: </p>
            {listIngredients()}
            <p>Price: {cake.price}</p>
            <p>Rating: {cake.rating}</p>
            <button onClick={handleSale}>Sell Cake</button>
        </>
     );
}
 
export default Cake;