import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from '@mui/material/styles'
import { Divider, Typography } from '@mui/material'
import { useGlobalContext } from '../context'

const Cocktail = ({ image, name, id, info, glass }) => {
  const { width } = useGlobalContext()

  return (
    <>
      <Link to={`/cocktail/${id}`}>
        <Wrapper>
          <img src={image} alt={name} />
          <div className='details'>
            <Divider component='div'>
              <Typography variant={width > 800 ? 'h5' : 'h6'}>
                {name}
              </Typography>
            </Divider>
            <div className='flex'>
              <h4>{glass}</h4>
              <h4>{info}</h4>
            </div>
          </div>
        </Wrapper>
      </Link>
    </>
  )
}

export default Cocktail

const Wrapper = styled('div')(() => ({
  '>img': {
    width: '100%',
    borderTopLeftRadius: '.25rem',
    borderTopRightRadius: '.25rem',
    transition: '.3s all',
    objectFit: 'cover',
    ':hover': {
      borderTopLeftRadius: '1.5rem',
    },
  },
  '.details': {
    padding: '0  1.5rem',
    background: 'var( --primary-50)',
    height: '100%',
    borderBottomLeftRadius: '.25rem',
    borderBottomRightRadius: '.25rem',
    '.flex': {
      padding: '1rem 0',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  },
}))
