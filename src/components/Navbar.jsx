import React from 'react'
import { AppBar, Box, Toolbar, Typography, IconButton, useScrollTrigger } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'

export const Navbar = () => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  })

  return (
      <AppBar position="sticky" sx={{backgroundColor: trigger ? '#fff' : 'transparent', color: '#000', boxShadow: trigger ? '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)' :  'none'}}>
        <Toolbar sx={{justifyContent: 'space-between'}}>
          <Typography variant="h3" sx={{ flexGrow: 0, fontSize: '16px', fontFamily: "'Playfair Display', serif" }}>
            <Typography variant="span" sx={{backgroundColor: '#000', borderRadius: '4px', color: '#fff', mr: '5px', padding:'8px'}}>News</Typography> Portal
          </Typography>
          <div>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 1 }}
            >
              <SearchIcon />
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
  )
}