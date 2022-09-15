import * as React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Paper, Button, Box, Typography } from '@mui/material'

const images = [
  {
    imgPath:
      'https://images.hdqwalls.com/download/bitcoin-cryptocurrency5k-ne-1920x1200.jpg',
  },
  {
    imgPath:
      'https://as1.ftcdn.net/v2/jpg/01/84/79/98/1000_F_184799825_GUnuFHmy6je364HlGAaETuVurarBBZyI.jpg',
  },
  {
    imgPath:
      'https://ak.picdn.net/shutterstock/videos/1068528011/thumb/8.jpg?ip=',
  },
  {
    imgPath:
      'https://as1.ftcdn.net/v2/jpg/01/84/79/98/1000_F_184799894_zIp5HDYfDsiBdBlDnRxo2KgIkgDwYd2N.jpg',
  },
]

function CarouselView() {
  return (
    <Carousel
    duration={10}

    >
      {images.map((itm, i) => (
        <ItemView key={i} item={itm} />
      ))}
    </Carousel>
  )
}

var ItemView = function (props) {
  console.log(props)
  return (
    <Box p={1}>
      <Box
        // height={650}
        color={props.item.fontColor}
        bgcolor={props.item.color}
        display="flex"
        flexDirection={'column'}
        alignItems="center"
      >
        <img
          style={{ borderRadius: 15 }}
          src={props.item.imgPath}
          height={500}
          width="90%"
        />
      </Box>
    </Box>
  )
}

export default CarouselView
