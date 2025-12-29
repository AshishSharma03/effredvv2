import React from 'react'
import { Box, Typography ,Stack, Grid,Divider} from '@mui/material'
function Landing_third_section() {
  return (
    <Box sx={{minHeight:"100vh",background:"#000",position:"relative", overflowX: "clip"}}>
      
      <model-viewer
      src="../3Dmodel/new.glb"
      camera-controls
      auto-rotate
      disable-zoom
      exposure="1"
      style={{width: '300px', height: '300px',position:"absolute",right:"-140px",top:"150px",transform:"translateY(-50%)",opacity: 0.7 }}
      alt="3D model"
    />
     <model-viewer
      src="../3Dmodel/new.glb"
      camera-controls
      auto-rotate
      disable-zoom
      exposure="1"
      style={{width: '250px', height: '250px',position:"absolute",left:"-180px",top:"500px",transform:"translateY(-50%)",opacity: 0.7 }}
      alt="3D model"
    />
  <Box sx={{position:"absolute",height:"100vh",borderRight:" 1px dashed #4B4B4B",position:"absolute",top:"0xp",left:"80px"}} />
  <Box sx={{position:"absolute",height:"150px",borderRight:"1px dashed #4B4B4B",position:"absolute",top:"0xp",left:"260px"}} />
  <Box sx={{position:"absolute",width:"100%",borderTop:"1px dashed #4B4B4B",position:"absolute",top:"150px"}} />
  <Box sx={{position:"absolute",width:"100%",borderTop:"1px dashed #4B4B4B",position:"absolute",top:"290px"}} />
    <Box sx={{position:"absolute",width:"100%",borderTop:"1px dashed  #4B4B4B",position:"absolute",top:"340px"}} />
     <Typography color="white" variant="body2" sx={{position:"absolute",top:"100px",left:"95px",letterSpacing:"2px",fontSize:"15px",fontWeight:"200"}}>OUR EXPERTIES</Typography>
     <Typography color="white" variant="body1" sx={{position:"absolute",top:"168px",left:"95px",letterSpacing:"1px",fontSize:"50px",fontWeight:"700",lineHeight:"50px"}}>Building Smart,<br/> 
Secure Digital Solutions</Typography>
    </Box>
  )
}

export default Landing_third_section
