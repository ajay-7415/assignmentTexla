import React, { useState } from 'react'
import { Checkbox } from '@mui/material'
import Typography from '@mui/material/Typography'

import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { useDispatch } from 'react-redux'
import { filterdata } from './features/mainSlice'

const RenderComponent = ({ data }) => {
  const dispatch = useDispatch()
  const { name, company, role, verified, id } = data
  const options = ['edit', 'delete']

  const ITEM_HEIGHT = 48

  const [anchorEl, setAnchorEl] = React.useState()
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
    dispatch(filterdata(id))
  }
  return (
    <div className='componentdrirection'>
      <Checkbox />
      <Typography variant='h7' component='h2'>
        {name}
      </Typography>
      <Typography variant='h7' component='h2'>
        {company}
      </Typography>
      <Typography variant='h7' component='h2'>
        {role}
      </Typography>
      <Typography variant='h7' component='h2'>
        {verified && 'verified'}
      </Typography>
      <div>
        <IconButton
          aria-label='more'
          id='long-button'
          aria-controls={open ? 'long-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup='true'
          onClick={handleClick}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id='long-menu'
          MenuListProps={{
            'aria-labelledby': 'long-button',
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: '20ch',
            },
          }}
        >
          <MenuItem onClick={handleClose}>Delete</MenuItem>
        </Menu>
      </div>
    </div>
  )
}

export default RenderComponent
