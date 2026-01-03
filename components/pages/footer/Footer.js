import { Box,Grid ,Typography,Stack} from '@mui/material'
import React from 'react'

function Footer() {   
  return (
    <Box sx={{minHeight:"100vh",background:"#0C0C0C",position:"relative",display:"flex",justifyContent:"center",alignItems:"end",pb:"80px",boxShadow:"0px 0px 50px 70px rgba(12, 12, 12, 1  )"}}>
     {/* <Box  sx={{position:"absolute",width:"100%",height:"100px",opacity:"1",top:"0px",background:"linear-gradient(180deg,rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%);",zIndex:99}} /> */}
     <Box component={"img"}src="./effredcraft/crysts.svg" sx={{position:"absolute",width:"100%",opacity:"0.2",top:"0px"}} />
        <Grid container sx={{}}>
          <Grid item size={4}  sx={{minHeight:"50vh",background:"",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"start"}}>
            <Box component={"img"} src="./effredcraft/footerImage.svg" sx={{height:"400px",width:"400px"}} />
            <Typography color="white" variant="body1" sx={{letterSpacing:"2px",fontSize:"15px",fontWeight:"100",pl:"40px"}}>(415) 780-9400</Typography>
            <Typography color="white" variant="body1" sx={{letterSpacing:"2px",fontSize:"40px",fontWeight:"700",pl:"40px",color:"#C2D8CF"}}>Info@effred.com</Typography>
          </Grid>
           <Grid  item size={3} sx={{minHeight:"50vh",background:"",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"start",gap:"10px",pt:"50px"}}>
          <Typography
              variant="body1"
              sx={{
                letterSpacing: "1px",
                lineHeight: "50px",
                fontSize: "45px",
                fontWeight: 700,
                backgroundImage: "linear-gradient(225deg, #B7CAC1 30%, #1E2120 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "inline-block",
              }}
            >
              Get Our Latest <br /> Insight
            </Typography>
            <Typography color="white" variant="body1" sx={{letterSpacing:"0.5px",fontSize:"13px",fontWeight:"100",color:"#4c5351ff"}}>Stay ahead with the news and views that matter<br/>to your business.</Typography>
            <Stack direction={"row"} sx={{borderBottom:"2px solid #525252ff",padding:"10px 0px 0px 0px",width:"100%",mt:"20px"}} >
            <Box component={"input"} placeholder="Enter your email" sx={{width:"100%",padding:"15px",fontSize:"15px",border:"none",background:"none"}} />
            <Box sx={{width:"40px",height:"35px",background:"#626C69",borderRadius:"5px "}} />
            </Stack>
            <Box sx={{flex:"1"}} />
            <Typography color="white" variant="body1" sx={{letterSpacing:"0.5px",fontSize:"13px",fontWeight:"100",color:"#4c5351ff"}}> <a style={{fontWeight:"700"}}>Effred Technology</a> - Automate. Accelerate. Achieve. Enterprise automation, cloud integration, software development, and consulting services.</Typography>
          </Grid>
           <Grid  item size={5} sx={{minHeight:"50vh",background:"",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",pt:"50px"}}>
              <Stack direction={"row"} spacing={10}>
              <Stack>
                <Typography color="white" variant="body1" sx={{letterSpacing:"2px",fontSize:"15px",fontWeight:"100",pl:"40px"}}>About</Typography>
                <Typography color="white" variant="body1" sx={{letterSpacing:"2px",fontSize:"15px",fontWeight:"100",pl:"40px"}}>Project</Typography>
                <Typography color="white" variant="body1" sx={{letterSpacing:"2px",fontSize:"15px",fontWeight:"100",pl:"40px"}}>Blog</Typography>
                <Typography color="white" variant="body1" sx={{letterSpacing:"2px",fontSize:"15px",fontWeight:"100",pl:"40px"}}>Contact Us</Typography>
                <Typography color="white" variant="body1" sx={{letterSpacing:"2px",fontSize:"15px",fontWeight:"100",pl:"40px"}}>Privacy Policy</Typography>
                <Typography color="white" variant="body1" sx={{letterSpacing:"2px",fontSize:"15px",fontWeight:"100",pl:"40px"}}>Terms of Service</Typography>
              </Stack>
              <Stack>
                <Typography color="white" variant="body1" sx={{letterSpacing:"2px",fontSize:"15px",fontWeight:"100",pl:"40px"}}>Twitter</Typography>
                <Typography color="white" variant="body1" sx={{letterSpacing:"2px",fontSize:"15px",fontWeight:"100",pl:"40px"}}>Linkedin</Typography>
                <Typography color="white" variant="body1" sx={{letterSpacing:"2px",fontSize:"15px",fontWeight:"100",pl:"40px"}}>Instagram</Typography>
                <Typography color="white" variant="body1" sx={{letterSpacing:"2px",fontSize:"15px",fontWeight:"100",pl:"40px"}}>Instagram</Typography>
                <Typography color="white" variant="body1" sx={{letterSpacing:"2px",fontSize:"15px",fontWeight:"100",pl:"40px"}}>X (Tiwtter)</Typography>
                <Typography color="white" variant="body1" sx={{letterSpacing:"2px",fontSize:"15px",fontWeight:"100",pl:"40px"}}>Youtube</Typography>
              </Stack>
              </Stack>
                          <Box sx={{flex:"1"}} />
            <Typography color="white" variant="body1" sx={{letterSpacing:"0.5px",fontSize:"13px",fontWeight:"100",color:"#4c5351ff"}}> 2025 ALL Rights Reserved.<a style={{fontWeight:"700"}}> Effred Technology</a>  </Typography>
          </Grid>
        </Grid>

    </Box>
  )
}

export default Footer