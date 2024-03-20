import { useState } from "react";
import Cake from "../components/Cake";
import "../styles/RecipesContainerStyles.css"

const RecipesContainer = () => {
    const [totalSales, setTotalSales] = useState(0);
    const [cakes] = useState([
        // Victora Sponge
        {
            cakeName: "Victoria Sponge",
               ingredients: [
                   "eggs",
                  "butter",
                  "sugar",
                      "self-raising flour",
                  "baking powder",
                  "milk"
              ],
              price: 5,
               rating: 5
        },
    
        // Tea Loaf
        {
             cakeName: "Tea Loaf",
               ingredients: [
                   "eggs",
                  "oil",
                  "dried fruit",
                      "sugar",
                  "self-raising flour",
                  "strong tea",
              ],
              price: 2,
              rating: 3
        },
    
        // Carrot Cake
        {
             cakeName: "Carrot Cake",
               ingredients: [
                    "carrots",
                      "walnuts",
                  "oil",
                      "cream cheese",
                      "flour",
                  "sugar",
               ],
               price: 8,
               rating: 5
        }
    ] );

    const calculateAverageRating = (cakesArray) => {
        let totalRating = 0;        
        for (let cake of cakesArray){
            totalRating += cake.rating;
        }
        return totalRating/cakesArray.length;    
    }
        

    return ( 
        <>
            <h2>Cake Recipes:</h2>
            <Cake cake={cakes[0]} sales={totalSales} onButtonClick={setTotalSales}/>
            <Cake cake={cakes[1]} sales={totalSales} onButtonClick={setTotalSales}/>
            <Cake cake={cakes[2]} sales={totalSales} onButtonClick={setTotalSales}/>
            <p>Average Cake rating: {calculateAverageRating(cakes)}</p>
            <p>Total Cake Sales: {totalSales}</p>
        </>
     );
}
 
export default RecipesContainer;