import React, { useEffect, useState } from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
import { Divider, Chip, Typography, Button } from '@mui/material'
import { styled } from '@mui/material/styles'

import { useGlobalContext } from '../context'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {
  const { width } = useGlobalContext()
  const { id } = useParams()
  const [loading, setLoading] = useState(false)
  const [cocktail, setCocktail] = useState(null)

  useEffect(() => {
    setLoading(true)
    const getCocktail = async () => {
      try {
        const response = await fetch(`${url}${id}`)
        const data = await response.json()

        const { drinks } = data

        if (drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            atrAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = drinks[0]

          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ]
          const newCocktails = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            ingredients,
          }
          setCocktail(newCocktails)
        } else {
          setCocktail(null)
        }
        setLoading(false)
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }
    getCocktail()
  }, [id])

  if (loading) {
    return <Loading full />
  }

  if (!cocktail) {
    return (
      <EmptyWrapper>
        <div>
          <Divider component='div'>
            <Typography variant={'h5'}>No Cocktail To Display</Typography>
          </Divider>
        </div>
      </EmptyWrapper>
    )
  }

  const { name, image, info, category, glass, instructions, ingredients } =
    cocktail
  const details = [
    { id: '1', title: 'name', value: name },
    { id: '2', title: 'category', value: category },
    { id: '3', title: 'info', value: info },
    { id: '4', title: 'glass', value: glass },
    { id: '5', title: 'instructions', value: instructions },
  ]
  return (
    <Wrapper width={width}>
      <Divider component='div'>
        <Typography variant={'h4'}>{name}</Typography>
      </Divider>

      <div className='drink'>
        <img src={image} alt={name} />
        <div className='drink-info'>
          {details.map((item) => {
            return (
              item.value && (
                <p key={item.id}>
                  {item.title} : {item.value}
                </p>
              )
            )
          })}
          <p>ingredients</p>
          <span>
            {ingredients.map((item, index) => {
              return item ? (
                <Chip
                  sx={{ textAlign: 'center', m: '0 .2rem' }}
                  label={item}
                  key={index}
                  color='error'
                  variant='outlined'
                />
              ) : null
            })}
          </span>
        </div>
      </div>
      <div className='back'>
        <Link to='/'>
          <Button variant='contained' color='error'>
            back home
          </Button>
        </Link>
      </div>
    </Wrapper>
  )
}

export default SingleCocktail

const EmptyWrapper = styled('div')(() => ({
  height: '100vh',
  display: 'grid',
  placeItems: 'center',
  '>div': {
    maxWidth: '400px',
    minWidth: '50vw',
  },
}))

const Wrapper = styled('div')(({ width }) => ({
  margin: '0 auto',
  padding: width > 800 && '3rem ',
  width: ' var(--smallWidth)',
  maxWidth: 'var(--fullWidth)',
  '.drink': {
    marginTop: width > 800 ? '2rem' : '1rem',
    display: 'grid',
    gridTemplateColumns: width > 800 ? '1fr 1fr' : '1fr',
    img: {
      borderRadius: '.25rem',
    },
    '.drink-info': {
      padding: width > 800 ? '0 2rem' : ' 2rem 0',
      textTransform: 'capitalize',
    },
  },
  '.back': {
    marginTop: width > 800 && '2rem',
    textAlign: 'center',
  },
}))
