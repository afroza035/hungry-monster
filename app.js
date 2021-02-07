document.getElementById('clicked').addEventListener('click', function () {
    const inputCatch = document.getElementById("showText").value;

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputCatch}`)
        .then(res => res.json())
        .then(data => {

            const allRecipesItem = document.getElementById('allRecipes')
            let html = "";
            const mealID = data.idMeal;
            if (inputCatch == "") {
                alert('Please try again.')
            }
            else {
                data.meals.forEach(meal => {
                    html += `
                    <div onclick = "thisMeal(${meal.idMeal})" id = "mealItemClick" class = "meal-item">
                        <img src = "${meal.strMealThumb}" >
                        <h2>${meal.strMeal}</h2>
                    </div>
                `;


                });
            }
            allRecipesItem.innerHTML = html;


        })
})
const thisMeal = id => {
    const fullIngredient = document.getElementById('fullIngredient');
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(res => res.json())
        .then(data => {

            const html = `
            <div class = "styleIngredient">
                <img src = "${data.meals[0].strMealThumb}">
                <h2>${data.meals[0].strMeal}</h2>
                <h5>Ingredient</h5>
                <ul>
                    <li> ${data.meals[0].strIngredient1} </li>
                    <li> ${data.meals[0].strIngredient2} </li>
                    <li> ${data.meals[0].strIngredient3} </li>
                    <li> ${data.meals[0].strIngredient4} </li>
                </ul>
            </div>
        `
            fullIngredient.innerHTML = html;
        })
}


















