import React from 'react'
import { Wine, Loading } from './'
import { useGlobalContext } from '../context'
import { styled } from '@mui/material/styles'
import { Divider, Typography } from '@mui/material'
const WineList = () => {
  const { loading, cocktails, width } = useGlobalContext()

  if (loading) {
    return <Loading />
  }
  if (cocktails.length < 1) {
    return (
      <Wrapper>
        <Divider component='div' sx={{ p: '1.5rem 0' }}>
          <Typography variant={width > 800 ? 'h3' : 'h5'}>
            We haven't this shit
          </Typography>
        </Divider>
      </Wrapper>
    )
  }
  return (
    <Wrapper width={width}>
      <Divider component='div' sx={{ p: '1.5rem 0' }}>
        <Typography variant={width > 800 ? 'h3' : 'h5'}>Cocktails</Typography>
      </Divider>

      <div className='center'>
        {cocktails.map((item) => {
          return <Wine key={item.id} {...item} />
        })}
      </div>
    </Wrapper>
  )
}

export default WineList

const Wrapper = styled('div')(({ width }) => ({
  height: 'calc(100vh - 211.98px)',
  overflow: 'auto',
  '.center': {
    gridTemplateColumns:
      width > 800 ? 'repeat(auto-fill, minmax(338.8px, 1fr))' : '1fr',
    width: ' var(--smallWidth)',
    maxWidth: 'var(--fullWidth)',
    margin: '0 auto',
    display: 'grid',
    gap: '2rem',
    alignItems: 'start',
  },
}))
