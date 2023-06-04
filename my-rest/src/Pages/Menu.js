import React from 'react'
import Layout from '../Components/Layouts/Layout'
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import { listReataurant } from '../Data/data'

function Menu() {
  return (
    <Layout>
      <Box sx={{ flexWrap:"wrap", justifyContent:"center", display:"flex"}}>
        {
          listReataurant.map((menu)=>{
            return (
              <Card sx={{ maxWidth: "390px", display: "flex", m: 2}}>
              <CardActionArea>
                <CardMedia
                sx={{minHeight:"400px"}}
                component={"img"}
                src={menu.image}
                alt={menu.name}
                />
                <CardContent>
                <Typography component={"div"} gutterBottom variant='h5'>
                  {menu.name}
                  </Typography>
                  <Typography  gutterBottom variant='body2'>
                  {menu.dispcription}
                  </Typography>
                </CardContent>
                


                
              </CardActionArea>
              </Card>
            )
          })
        }
      </Box>

    </Layout>
  )
}

export default Menu