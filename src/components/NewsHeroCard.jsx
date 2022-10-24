import React from 'react'
import { Card, CardContent, Typography, CardMedia, Paper, Button } from '@mui/material'

export const NewsHeroCard = () => {
  return (
    <Card sx={{
      borderRadius: '4px',
      boxShadow: 'none',
      position: 'relative',
      height: '400px'
    }}>
      <Paper sx={{
        '&::before': {
          content: '""',
          position: 'absolute',
          backgroundColor: '#000',
          opacity: .3,
          width: '100%',
          height: '100%',
          left: 0,
          top: 0,
          zIndex: 1
        }
      }}>
        <CardMedia
          component="img"
          height="400"
          image="https://images.squarespace-cdn.com/content/v1/571abd61e3214001fb3b9966/1d4a6001-0ce0-42c5-b655-2d12445fef89/JoJo+35th+Anniversary+Spring+2022+Magazine"
          alt="JoJo"
          sx={{
            borderRadius: '8px',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 0
          }}
        />
      </Paper>
      <CardContent sx={{ color: '#fff', textAlign: 'left',  maxWidth: 300, padding: '30px', position: 'absolute', bottom: 0, zIndex: 2 }}>
        <Typography variant="h3" sx={{ fontSize: 24, mb: '32px', lineHeight: '40px', fontFamily: "'Playfair Display', serif" }} gutterBottom>
          Massa tortor nibh nulla condimentum imperdiet scelerisque...
        </Typography>
        <Typography variant="body2" sx={{ fontSize: 12 }}>
          1 Hour Ago | CNN Indonesia
        </Typography>
      </CardContent>
    </Card>
  )
}