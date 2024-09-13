
import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Cooks from './components/Cooks/Cooks'
import Header from './components/Header/Header'
import Prepares from './components/Prepares/Prepares'
import Recipe from './components/Recipe/Recipe'


function App() {
  let [recipes, setRecipes] = useState([])

  const handleAddReCipe =(cook)=>{
    const newRecipes = [...recipes, cook]
    setRecipes(newRecipes)


  }
  return (
    <>
    <div className='w-[1240px] mx-auto py-6'>
    <Header></Header>
    <Banner></Banner>
    <Recipe></Recipe>
    <main className='flex gap-5 my-6'>
      <Cooks
      handleAddReCipe={handleAddReCipe}
      ></Cooks>
      <Prepares
      recipes={recipes}
      ></Prepares>
    </main>
    </div>
    </>
  )
}

export default App
