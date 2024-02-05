async function spinnerRender() {
    const spinnerWrapper = document.querySelector('.spinner__wrapper')
  
    spinnerWrapper.classList += " recipes__loading"
    if (!recipe) {
      recipe = await main()
    }
    spinnerWrapper.classList.remove('recipes__loading')
  }

  
  setTimeout(() => {
    spinnerRender()
  },5000)
  

  


