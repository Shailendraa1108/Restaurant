import React from 'react'
import Layout from '../Components/Layouts/Layout'
import { Box, Typography } from '@mui/material'

function About() {
  return (
    <Layout>
      <Box sx={{textAlign:"center",
      my:10,
      
      "& h4":{
fontSize:"60px",
fontWeigh:"600px"
      },
      "& p":{
textAlign:"justify",
fontSize:"30px"
      },
      "@media (max-width:600px)":{
mt:0,
"&  h4":{
  fontSize:"1.5rem",
  my:3
},
"& p":{
  fontSize:"1rem",
  my:3,
  p:2
}
      }
    }}>
        <Typography variant='h4' sx={{my:4,background:"black",color:"goldenrod",fontFamily:"serif"}}>
        <b>  Welcome To My Restaurant</b>
        </Typography>
      <p>
      “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare tempus aliquet. Pellentesque 
      finibus, est et iaculis suscipit, dolor nulla commodo dui, nec ultricies arcu nisl tristique eros. 
      Morbi eros est, pulvinar eget ornare ac, ultrices eget risus. Ut lobortis pellentesque pretium. 
      Praesent sollicitudin vestibulum iaculis. Mauris a finibus orci. Quisque ipsum nunc, efficitur sit amet blandit ut,
       aliquam quis dui. Phasellus interdum leo eu ipsum malesuada, et interdum diam egestas.
        Maecenas pretium fermentum tortor ac tincidunt.
       Curabitur consectetur dolor libero, at aliquam est ornare eleifend. Aliquam at finibus dolor.”
       “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare tempus aliquet. Pellentesque 
      finibus, est et iaculis suscipit, dolor nulla commodo dui, nec ultricies arcu nisl tristique eros. 
      Morbi eros est, pulvinar eget ornare ac, ultrices eget risus. Ut lobortis pellentesque pretium. 
      Praesent sollicitudin vestibulum iaculis. Mauris a finibus orci. Quisque ipsum nunc, efficitur sit amet blandit ut,
       aliquam quis dui. Phasellus interdum leo eu ipsum malesuada, et interdum diam egestas.
        Maecenas pretium fermentum tortor ac tincidunt.
       Curabitur consectetur dolor libero, at aliquam est ornare eleifend. Aliquam at finibus dolor.
       “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare tempus aliquet. Pellentesque 
      finibus, est et iaculis suscipit, dolor nulla commodo dui, nec ultricies arcu nisl tristique eros. 
      Morbi eros est, pulvinar eget ornare ac, ultrices eget risus. Ut lobortis pellentesque pretium. 
      Praesent sollicitudin vestibulum iaculis. Mauris a finibus orci. Quisque ipsum nunc, efficitur sit amet blandit ut,
       aliquam quis dui. Phasellus interdum leo eu ipsum malesuada, et interdum diam egestas.
        Maecenas pretium fermentum tortor ac tincidunt.
       Curabitur consectetur dolor libero, at aliquam est ornare eleifend. Aliquam at finibus dolor.”
      </p>
      <br/>
      <p>
      “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare tempus aliquet.
       Pellentesque finibus, est et iaculis suscipit, dolor nulla commodo dui, nec ultricies arcu nisl tristique eros.
        Morbi eros est, pulvinar eget ornare ac, ultrices eget risus. Ut lobortis pellentesque pretium.
         Praesent sollicitudin vestibulum iaculis. Mauris a finibus orci. 
         Quisque ipsum nunc, efficitur sit amet blandit ut, aliquam quis dui. Phasellus interdum leo eu ipsum malesuada, et interdum diam egestas. Maecenas pretium fermentum tortor ac tincidunt.
       Curabitur consectetur dolor libero, at aliquam est ornare eleifend. Aliquam at finibus dolor.”
       “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare tempus aliquet. Pellentesque 
      finibus, est et iaculis suscipit, dolor nulla commodo dui, nec ultricies arcu nisl tristique eros. 
      Morbi eros est, pulvinar eget ornare ac, ultrices eget risus. Ut lobortis pellentesque pretium. 
      Praesent sollicitudin vestibulum iaculis. Mauris a finibus orci. Quisque ipsum nunc, efficitur sit amet blandit ut,
       aliquam quis dui. Phasellus interdum leo eu ipsum malesuada, et interdum diam egestas.
        Maecenas pretium fermentum tortor ac tincidunt.
       Curabitur consectetur dolor libero, at aliquam est ornare eleifend. Aliquam at finibus dolor.”
       “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare tempus aliquet. Pellentesque 
      finibus, est et iaculis suscipit, dolor nulla commodo dui, nec ultricies arcu nisl tristique eros. 
      Morbi eros est, pulvinar eget ornare ac, ultrices eget risus. Ut lobortis pellentesque pretium. 
      Praesent sollicitudin vestibulum iaculis. Mauris a finibus orci. Quisque ipsum nunc, efficitur sit amet blandit ut,
       aliquam quis dui. Phasellus interdum leo eu ipsum malesuada, et interdum diam egestas.
        Maecenas pretium fermentum tortor ac tincidunt.
       Curabitur consectetur dolor libero, at aliquam est ornare eleifend. Aliquam at finibus dolor.”
      </p>
      </Box>
    </Layout>
  )
}

export default About