import { JSONFilePreset } from 'lowdb/node'


const defaultData = { recipes: [
  {
   "id": Number,
    "title": String,
    "ingredients": Array,
    "method": Array
  }
]}




class Recipe {
  name;
  category;
  ingredients;
  method;
  portions;
  workTime;


  constructor(name, category, ingredients, method){
    this.name = name;
    this.category = category;
    this.ingredients = ingredients;
    this.method = method;
  }
}
let ingExample = ["8 limes", "1 can sweetened condensed milk (approximately 14 oz or 397g)", "2 cups ice (about 16 oz or 450g)", "4 cups water (about 32 oz or 950ml)"]
let methExample = ["Wash and cut 7 of the limes into quarters. Place them in a blender along with the water, 1 cup (about 8 oz or 225g) of ice, and the sweetened condensed milk. Blend on high for 3-4 minutes until thoroughly mixed.", "Fill a jug with the remaining 1 cup of ice. Squeeze the juice of the last lime directly into the jug. Strain the lemonade from the blender through a sieve over the ice in the jug to remove any pulp and lime rinds."]

let BrazilianLemonade = new Recipe("Brazilian Lemonade", "Drinks", ingExample, methExample)



let pushExample = {
  "id":1,
  "title": BrazilianLemonade.name,
  "ingredients": BrazilianLemonade.ingredients,
  "method": BrazilianLemonade.method
}
export const addRecipe = async () => {
  const db = await JSONFilePreset("./db/db.json", defaultData) 
  await db.update(({ recipes }) => recipes.push(pushExample))  
}



//console.log(BrazilianLemonade.method)