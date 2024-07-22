// const recipeTemplate = `
// ${recipeTitle}

// Ingredientes:
// ${ingredientsList}

// Procedimiento:
// ${method}
// `

fetch("https://jsonplaceholder.typicode.com/todos/1").then(response => response.json())
.then(json => console.log(json))


