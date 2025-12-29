import React from 'react'
import { Container, Box, Typography, Button, Stack,Grid } from '@mui/material';

function Landing_first_section() {
  return (
    <>
    <Box sx={{py:"15px",px:"50px",background:"#000", display:"flex", justifyContent:"end", alignItems:"center", gap:"30px"}}> 
        <Typography color="white" variant="body2" sx={{letterSpacing:"2px",fontSize:"15px",fontWeight:"200"}}>OUR PARTNER</Typography>
        <Typography color="white" variant="body2" sx={{letterSpacing:"2px",fontSize:"15px",fontWeight:"200"}}>SUPPORT</Typography>
        <Typography color="white" variant="body2" sx={{letterSpacing:"2px",fontSize:"15px",fontWeight:"200"}}>BLOG</Typography>
      </Box>
      <Container maxWidth="xl">
        <Box sx={{minHeight:"90vh",background:"#",position:"relative",justifyContent:"center",alignItems:"center",display:"flex"}}>

        <Box sx={{position:"absolute",top:"0px",width:"100%",p:"20px 80px 20px 20px",border:"1px solid #fff", display:"flex",flexDirection:"row",alignItems:"center",gap:"50px"}}>
        <Stack direction={"row"} alignItems={"center"} >
        <Box component={"img"} src={"./logo.svg"} sx={{height:"70px",width:"70px",}} />
        <Typography variant="body1" sx={{fontWeight:"800",fontSize:"25px"}}>Effred</Typography>
        </Stack>
        <Box component={"span"} sx={{flex:"1"}}/>
        <Typography variant="body2" sx={{fontSize:"18px"}}>PRODUCT & SERVICES</Typography>
        <Typography variant="body2" sx={{fontSize:"18px"}}>GET IN TOUCH</Typography>
        <Typography variant="body2" sx={{fontSize:"18px"}}>ABOUT</Typography>
        <Typography variant="body2" sx={{fontSize:"18px"}}>CAREER</Typography>
        </Box> 

      <Box sx={{position:"absolute",width:"100%",bottom:"50px",background:"#fff",}}>
      <Box sx={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",alignItems:"center"}}>
        <Box  sx={{p:"20px",textAlign:"left",maxWidth:"550px"}}>
            <Typography  variant='body1' sx={{fontSize:"90px",fontWeight:"700",lineHeight:"100px"}}>Shape the Business <br/> with Effred</Typography>
          </Box>
        <Box  sx={{p:"20px",textAlign:"left",maxWidth:"450px"}}>
          <Typography variant='body1' sx={{fontSize:"20px"}}>We craft intelligent, scalable digital experiences — combining custom software, mobile apps, and automation to accelerate your business transformation.</Typography>
          <Button variant="contained" sx={{background:"#000",padding:"20px 70px",marginTop:"20px"}}>Read more</Button>
        </Box>
        </Box>
    </Box>

      
        </Box>

      </Container>
    </>
  )
}

export default Landing_first_section