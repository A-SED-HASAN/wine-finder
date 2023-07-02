import React from 'react'
import { CircularProgress } from '@mui/material'
import { styled } from '@mui/material/styles'

const Loading = ({ full }) => {
  return (
    <Wrapper full={full}>
      <CircularProgress color='error' size={100} thickness={0.5} />
    </Wrapper>
  )
}

export default Loading
const Wrapper = styled('div')(({ full }) => ({
  display: 'grid',
  placeItems: 'center',
  height: full ? '100vh' : 'calc(100vh - 211.98px)',
}))
