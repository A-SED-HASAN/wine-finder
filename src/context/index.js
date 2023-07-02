import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [width, setWidth] = useState(window.innerWidth)
  const [height, setHeight] = useState(window.innerHeight)
  const resize = () => {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
  }
  useEffect(() => {
    window.addEventListener('resize', resize)
    return () => {
      window.removeEventListener('resize', resize)
    }
  }, [width, height])

  //width
  const [loading, setLoading] = useState(true)
  const [query, setQuery] = useState('a')
  const [cocktails, setCocktails] = useState([])

  const fetchDrinks = useCallback(async () => {
    setLoading(true)
    try {
      const response = await fetch(`${url}${query}`)
      const data = await response.json()
      const { drinks } = data
      if (drinks) {
        const newCockTails = drinks.map((item) => {
          const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
            item

          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          }
        })
        setCocktails(newCockTails)
      } else {
        setCocktails([])
      }

      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }, [query])
  useEffect(() => {
    fetchDrinks()
  }, [query, fetchDrinks])
  return (
    <AppContext.Provider
      value={{
        loading,
        cocktails,
        setQuery,
        width,
      }}>
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
