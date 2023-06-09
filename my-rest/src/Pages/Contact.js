import React from 'react'
import Layout from '../Components/Layouts/Layout'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MailIcon from '@mui/icons-material/Mail';
import DialerSipIcon from '@mui/icons-material/DialerSip';
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'

function Contact() {
  return (
    <Layout>
       <Box sx={{ my: 5, ml: 10, "& h4": { fontWeight: "bold", mb: 2 } }}>
        <Typography variant="h4">Contact My Resturant</Typography>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem odio
          beatae ducimus magni nobis culpa praesentium velit expedita quae,
          corrupti, pariatur inventore laboriosam consectetur modi impedit
          error, repudiandae obcaecati doloribus.
        </p>
      </Box>
 
      <Box 
        sx={{
          m: 3,
          width: "600px",
          ml: 6.5,
          "@media (max-width:600px)": {
            width: "300px",
          },
        }}
      >
        <TableContainer component={Paper}>
          <Table aria-label="contact  table">
            <TableHead>
           <TableRow>
           <TableCell sx={{Align:"center", bgcolor:"black", color:"white" }}>
                Contact Details
                </TableCell>
           </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon  sx={{ color: "red", pt: 1 }}/> By Shailendra prajapati
                </TableCell>
              </TableRow>
            </TableBody>
            <TableBody>
              <TableRow>
                <TableCell>
                  <MailIcon  sx={{ color: "red", pt: 1 }}/> shailendrap1108@gmail.com
                </TableCell>
              </TableRow>
            </TableBody>
            <TableBody>
              <TableRow>
                <TableCell>
                  <DialerSipIcon  sx={{ color: "red", pt: 1 }}/> tollfree 1234567890 @copy
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  )
}

export default Contact