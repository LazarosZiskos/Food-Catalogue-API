const APP_ID = "e2c1665c"
const APP_KEY = "84b7cf96ee4f65e1c0f08490f181851d"	

// data.hits[0].recipe.label --> Recipe title


async function main() {
    const response = await fetch(`https://api.edamam.com/api/recipes/v2/?q=pizza&app_id=${APP_ID}&app_key=${APP_KEY}&type=public`)
    const data = await response.json()

    console.log(data.hits)
}

main()