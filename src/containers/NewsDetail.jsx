import React from 'react'
import { Card, Typography, CardMedia, Box } from '@mui/material'

export const NewsDetail = () => {
  return (
    <section className="news-detail" style={{ padding: '30px 0' }}>
      <Typography variant="h1" sx={{ fontSize: '38px', mb: 2 }}>Hot Topics</Typography>
      <Card sx={{ borderRadius: '4px' }}>
        <CardMedia
          component="img"
          height="400"
          image="https://www.arealme.com/cover-images/which-jojo-character-are-you.png"
          alt="JoJo"
          sx={{ borderRadius: '8px' }}
        />
      </Card>

      <Box sx={{ margin: '40px 0' }}>
        <Typography variant="h2" sx={{ fontSize: 32, mb: '10px', fontFamily: "'Playfair Display', serif" }} gutterBottom>
          Massa tortor nibh nulla condimentum imperdiet scelerisque...
        </Typography>
        <Typography variant="body1" sx={{ fontSize: 12 }}>
          1 Hour Ago | CNN Indonesia
        </Typography>
      </Box>
      <Box>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer cursus purus non dui rhoncus facilisis. Aenean mauris sapien, imperdiet vel mi ut, condimentum volutpat neque. Curabitur sed libero dignissim mi interdum imperdiet. Nulla nec metus eget est viverra convallis eu eu orci. Nullam sed felis quis turpis tincidunt maximus. Ut nec volutpat augue. Duis cursus sed lectus eu mattis. Praesent ac semper lectus. Vivamus interdum aliquet diam, dapibus dictum libero interdum vel. Phasellus venenatis nisl eros. Praesent non pretium massa. Aliquam in elementum tellus. Duis aliquet, leo id finibus convallis, justo leo egestas risus, ut venenatis ex elit non odio. In eu mi in diam vehicula tristique sed id tortor. Curabitur malesuada nulla vel quam auctor luctus. Donec porttitor maximus posuere.

          Aliquam ac augue sit amet magna tristique iaculis. Mauris vehicula sollicitudin quam sit amet imperdiet. Morbi vel hendrerit enim, in venenatis felis. Sed id ex imperdiet, pellentesque elit vitae, dictum risus. Morbi sit amet elementum mauris. Sed ac odio a velit consectetur blandit. Cras tempus turpis in tellus maximus, eget vulputate lacus faucibus.

          Donec id hendrerit tortor, in egestas quam. Nullam tempor, ante nec euismod tempus, leo ligula tincidunt quam, in luctus metus justo quis orci. Suspendisse at libero aliquam, faucibus tellus a, feugiat felis. Proin euismod sem mauris, imperdiet venenatis mauris pulvinar id. Donec sit amet enim sit amet est tempor interdum vitae sit amet mi. Ut faucibus venenatis lobortis. Vestibulum et ornare erat. Praesent iaculis nunc eu eros tincidunt, sit amet eleifend nibh finibus. Morbi velit nunc, dapibus at metus ut, viverra vulputate nisi. In a viverra tortor, sed maximus ipsum. Maecenas lacinia molestie justo, eget convallis quam tristique ut. Integer sed laoreet elit, eu fermentum leo. Ut tincidunt lectus sed sem placerat, a pulvinar ante blandit. Pellentesque laoreet congue porttitor. Duis molestie vehicula ex, in dignissim ipsum porta eu.

          Nam ultrices nisl et vestibulum vehicula. Mauris dictum metus ac libero blandit tristique. Sed convallis erat et ultricies consectetur. Sed vel tortor id magna mattis mollis eu sit amet ipsum. Mauris dignissim diam nec nibh dapibus, et viverra elit accumsan. Donec vehicula velit non dictum iaculis. Fusce condimentum mi quis leo bibendum scelerisque. Nunc dignissim mollis odio, a fringilla tellus cursus vel. Integer nisi nisl, pharetra vitae fringilla at, aliquet nec erat. Sed porttitor placerat lectus, ut luctus tortor hendrerit sit amet. Duis cursus arcu ut commodo semper. Sed venenatis nec eros malesuada porttitor. Nunc efficitur tellus ac elit viverra, at blandit velit mollis. Donec ipsum dui, accumsan non facilisis eget, commodo quis odio. Curabitur convallis mauris sed eros dapibus, sit amet tempus nunc posuere.

          Pellentesque facilisis sit amet purus eu efficitur. Aenean fermentum placerat turpis non luctus. Vivamus sit amet commodo neque. Maecenas et blandit purus. Suspendisse eget quam id nibh condimentum convallis. Donec aliquet nisl massa, a gravida velit sollicitudin quis. Nam vulputate eros efficitur ante scelerisque sagittis. Etiam vitae ipsum at arcu laoreet faucibus. Donec maximus maximus volutpat. Nulla commodo euismod risus sed efficitur. Mauris ex turpis, eleifend non nisl et, sagittis posuere risus. Morbi ut sapien auctor, fringilla augue vel, mollis nulla.
        </Typography>
      </Box>
    </section>
  )
}