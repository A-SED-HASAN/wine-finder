import React from 'react'
import { useGlobalContext } from '../context'
import {
  Paper,
  InputBase,
  Divider,
} from '@mui/material'
import {
  LocalBarOutlinedIcon,
  WineBarOutlinedIcon,
  LiquorOutlinedIcon,
} from '../assets/icons'
import { styled } from '@mui/material/styles'
const SearchForm = () => {
  const { setQuery, query } = useGlobalContext()
  return (
    <Wrapper>
      <Paper
        component='form'
        sx={{
          p: '2px 4px',
          display: 'flex',
          alignItems: 'center',
          width: '400px',
        }}>
        <InputBase
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          sx={{ ml: 1, flex: 1 }}
          placeholder='Search Your Wine'
        />
        <IconWrapper>
          <LocalBarOutlinedIcon color='error' />
        </IconWrapper>
        <Divider sx={{ height: 35, m: 0.5 }} orientation='vertical' />
        <IconWrapper>
          <WineBarOutlinedIcon color='error' />
        </IconWrapper>
        <Divider sx={{ height: 35, m: 0.5 }} orientation='vertical' />
        <IconWrapper>
          <LiquorOutlinedIcon color='error' />
        </IconWrapper>
      </Paper>
    </Wrapper>
  )
}

export default SearchForm

const IconWrapper = styled('span')(() => ({
  padding: '10px',
}))

const Wrapper = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  padding: '3rem 1rem 0',
}))
