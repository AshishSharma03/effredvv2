import React from 'react'
import { Box, Typography ,Stack, Grid,Container} from '@mui/material'
function Landing_forth_section() {
  return (
    <Box sx={{minHeight:"100vh",background:"#ffffffff"}}>
        <Container maxWidth="xl">
        <Stack sx={{p:"100px 50px"}}spacing={1} gap={"0px"}>
          <Typography color="black" variant="body2" sx={{letterSpacing:"2px",lineHeight:"60px",fontSize:"64px",fontWeight:"500"}}>OUR FOCUS</Typography>    
          <Typography color="black" variant="body1" sx={{letterSpacing:"2px",lineHeight:"60px",fontSize:"64px",fontWeight:"100"}}>Scaling Mission-Critical Systems</Typography>            
          <Typography color="black" variant="body1" sx={{letterSpacing:"2px",lineHeight:"35px",fontSize:"25px",fontWeight:"100",p:"30px 250px 0px 0px"}}>We partner with growth-stage founders and enterprises to design tech that’s scalable, investor-ready, and built for long-term business value.</Typography>            
        
        <Stack direction={"row"} spacing={10} sx={{pt:"50px"}}>
          <Stack direction={"column"} spacing={2.4} sx={{pt:"50px"}}>
         <Typography color="black" variant="body1" sx={{letterSpacing:"2px",lineHeight:"40px",fontSize:"25px",fontWeight:"700",p:"0px 0px 0px 10px"}}>FORTUNE</Typography> 
         <Typography color="black" variant="body1" sx={{letterSpacing:"2px",lineHeight:"50px",fontSize:"80px",fontWeight:"800"}}>500 +</Typography> 
         <Typography color="black" variant="body1" sx={{letterSpacing:"2px",lineHeight:"19px",fontSize:"12px",fontWeight:"300",p:"0px 0px 0px 10px"}}>including Tata, Reliance,<br/>
Infosys, Wipro, HCL...</Typography> 

          </Stack>
          <Stack direction={"column"} spacing={2.4} sx={{pt:"50px"}}>
         <Typography color="black" variant="body1" sx={{letterSpacing:"2px",lineHeight:"40px",fontSize:"25px",fontWeight:"700",p:"0px 0px 0px 10px"}}>STARTUPS</Typography> 
         <Typography color="black" variant="body1" sx={{letterSpacing:"2px",lineHeight:"50px",fontSize:"80px",fontWeight:"800"}}>132 +</Typography> 
         <Typography color="black" variant="body1" sx={{letterSpacing:"2px",lineHeight:"19px",fontSize:"12px",fontWeight:"300",p:"0px 0px 0px 10px"}}>Supported to build product
<br/>
secure YC backing,</Typography> 

          </Stack>
                    <Stack direction={"column"} spacing={2.4} sx={{pt:"50px"}}>
         <Typography color="black" variant="body1" sx={{letterSpacing:"2px",lineHeight:"40px",fontSize:"25px",fontWeight:"700",p:"0px 0px 0px 10px"}}>TOP</Typography> 
         <Typography color="black" variant="body1" sx={{letterSpacing:"2px",lineHeight:"50px",fontSize:"80px",fontWeight:"800"}}>50 </Typography> 
         <Typography color="black" variant="body1" sx={{letterSpacing:"2px",lineHeight:"19px",fontSize:"12px",fontWeight:"300",p:"0px 0px 0px 10px"}}>Ranked among LinkedIn’s

<br/>
Top 100  Startups.</Typography> 

          </Stack>
          </Stack>
        </Stack>

        </Container>
    </Box>
  )
}

export default Landing_forth_section