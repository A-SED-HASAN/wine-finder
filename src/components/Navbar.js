import React from 'react'
import Wine from '../assets/images/wine.png'
import { styled } from '@mui/material/styles'
const Navbar = () => {
  return (
    <Wrapper>
      <img src={Wine} alt='cocktail' />
      <h1>Wine Finder</h1>
    </Wrapper>
  )
}

export default Navbar

const Wrapper = styled('div')(() => ({
  padding: '1rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  img: {
    width: '50px',
  },
  h1: { paddingTop: '.8rem' },
}))
