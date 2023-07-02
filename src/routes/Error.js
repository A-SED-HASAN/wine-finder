import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from '@mui/material/styles'
import { Button, Divider } from '@mui/material'
const Error = () => {
  return (
    <Wrapper>
      <div>
        <Divider>Error</Divider>
        <h1>Oops! its a dead end !</h1>
        <Link to='/'>
          <Button variant='contained'> back home</Button>
        </Link>
      </div>
    </Wrapper>
  )
}

export default Error

const Wrapper = styled('div')(() => ({
  height: '100vh',
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}))
