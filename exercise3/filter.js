function filterCategory(filterSelection, filterBy){
    let recipeCards = Array.from(document.getElementsByClassName("RecipeCardWrapper"));
    /* console.log(recipeCards); */
    for(let listItem of recipeCards){
        /* console.log(listItem.dataset.author) */
        console.log(listItem.dataset.dairyfree)
        if(listItem.dataset[filterBy] === filterSelection){
            listItem.style.display = "flex";
        } else {
            listItem.style.display = "none";
        }
    }
}

