import React from 'react';
import Card from '../../components/card';
import "./style.css"
import RecipeIngredient from '../../components/recipe-ingredient';
import RecipeSteps from '../../components/recipe-steps';
const Recipe = (props) => {
  const Id = props.match.params.id;
   const url =props.match.url;
   let data = "";
   if(url==`/summer-food/${Id}`)
      data = "summer-food";
   else if(url==`/summer-drink/${Id}`)
      data = "summer-drink";
 console.log(data);
  
    

    return ( <div className = "recipe">
         <Card style ={{width:"30%", backgroundColor : "rgb(253, 114, 33)", padding:"20px 0" }}>
           <RecipeIngredient
           id ={Id}
           data={data}/>
         </Card>
         <Card style={{width : "69%", padding:"20px 0"}}>
            <RecipeSteps
            id ={Id}
            data={data}/>
         </Card>
    </div> );
}
 
export default Recipe;