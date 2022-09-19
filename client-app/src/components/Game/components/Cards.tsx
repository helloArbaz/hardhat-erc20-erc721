import { Button, Modal, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useEffect, useState } from 'react'
import Card from './Card'
import { images } from '../const'
function Cards() {
  const [open, setOpen] = useState(true)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const [items, setItems] = useState(images.sort(() => Math.random() - 0.5))

  const [prev, setPrev] = useState(-1)
  let [loading, setLoading] = useState(true)
  let [pointer, setPointer] = useState(0)

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    // bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  }

  function check(current?:any) {
    if (items[current].id == items[prev].id) {
      items[current].stat = 'correct'
      items[prev].stat = 'correct'
      setItems([...items])
      setPrev(-1)
      setPointer(pointer + 1)
    } else {
      items[current].stat = 'wrong'
      items[prev].stat = 'wrong'
      setItems([...items])
      setTimeout(() => {
        items[current].stat = ''
        items[prev].stat = ''
        setItems([...items])
        setPrev(-1)
        setLoading(false)
      }, 1000)
    }
  }

  function handleClick(id:any) {
    if (prev === -1) {
      items[id].stat = 'active'
      setItems([...items])
      setPrev(id)
    } else {
      check(id)
    }
  }

  return (
    <Box>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          display={'flex'}
          justifyItems="center"
          flexDirection={'column'}
          bgcolor={'white'}
          sx={style}
        >
          <Box p={1} textAlign={'center'}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Lets Play The Game..
            </Typography>
          </Box>
          <Button variant="outlined" color="primary" onClick={handleClose}>
            Start
          </Button>
        </Box>
      </Modal>

      <Box display={"flex"} alignItems="center" justifyContent={"center"}>
        <div className="container1">
          {items.map((item, index) => (
            <Card
              key={index}
              item={item}
              id={index}
              handleClick={handleClick}
            />
          ))}
        </div>
      </Box>
    </Box>
  )
}

export default Cards
