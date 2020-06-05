import React from 'react';
import "./style.css";
import { NavLink } from 'react-router-dom';
import Card from '../../components/card';

const RecipePortal = (props) => {
    
    const {recipe}=props; 
    return (<div className= "summer-food">
    { recipe.map((recipe)=>(
       
     <Card 
     style={{width: "30%", padding: "10px", margin: "5px"}}
     key = {recipe.id}>
     <h2 className="recipe-name">{recipe.recipeName}</h2>
     <div className= "recipe-image"> 
     <img alt="meat pizza" src={require(`./../../images/${recipe.recipeImage}`)}/>
     </div>
    <p>{recipe.cookingTime}</p>
    <p>{`" ${recipe.description} "`}</p>
    <NavLink to ={`/${recipe.data}/${recipe.id}`} className="see-more" >see more</NavLink>
    </Card>
    
    ))}
    
</div> );
}
 
export default RecipePortal;