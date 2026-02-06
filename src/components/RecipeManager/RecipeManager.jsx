import { useState,useEffect } from "react"
function RecipeManager() {

  const [cuisine, setCuisine] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [allergies, setAllergies] = useState();
  const [servings, setServings] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [recipes, setRecipes] = useState([]);
  
  function addRecipe() {
    const newRecipe = {
      id: recipes.length + 1,
      cuisine: cuisine,
      cookingTime: cookingTime,
      allergies: allergies,
      servings: servings,
      difficulty: difficulty 
    };
    setRecipes([...recipes, newRecipe]);
  }
  return (
   <div className="middle">
    <h3>
      <form action="Add">
        <div>
          <label htmlFor="cuisine">Cuisine</label>
          <input type="text" name="cuisine" id="cuisine" value={cuisine} required onChange={(e) => setCuisine(e.target.value)}/>
          <br />
          <label htmlFor="CookingTime">CookingTime</label>
          <input type="time" name="Cookingtime" id="cuisine" value={cookingTime} required onChange={(e) => setCookingTime(e.target.value)}/>
          <br />
          <label htmlFor="cuisine">allergies</label>
          <input type="text" name="Allergies" id="Allergies" value={allergies} required onChange={(e) => setAllergies(e.target.value)}/> <br />
          <label htmlFor="cuisine">servings</label>
           <input type="text" name="servings" id="servings" value={servings} required onChange={(e) => setServings(e.target.value)}/> <br />
           
          <label htmlFor="cuisine">diffult</label>
           <input type="text" name="diffulty" id="diffculty" value={difficulty} required onChange={(e) => setDifficulty(e.target.value)}/> <br />
          <button type="button" onClick={addRecipe}>Add Recipe</button>
          <div>
            <h4>Recipes:</h4>
            <ul>
              {recipes.map((recipe) => (
                <li key={recipe.id}>  
                  Cuisine: {recipe.cuisine},<br /> Cooking Time: {recipe.cookingTime}, <br /> Allergies: {recipe.allergies},<br /> Servings: {recipe.servings},<br />Difficulty: {recipe.difficulty} <br />
                  remove <button type="remove" onClick={() => setRecipes(recipes.filter(remover => remover.id !== recipe.id))}>Remove</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </form>
    </h3>
   </div>
  )
}
 
export default RecipeManager;
