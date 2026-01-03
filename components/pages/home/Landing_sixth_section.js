"use client";

import { Box ,Typography,Button} from "@mui/material";
import React, { useEffect, useRef } from "react";


function Landing_sixth_section() {
  return (
    <Box sx={{ position: "relative", minHeight: "100vh", background: "#000", overflow: "hidden",boxShadow:"0px 0px 50px 10px rgba(0,0,0,0.5)" }}>
      <Box
        component="video"
        src="./video/wave.mkv"
        autoPlay
        loop
        muted
        playsInline
        sx={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: 0.5,
        }}
      />

      {/* Content above video */}
      <Box sx={{ position: "relative", zIndex: 1,minHeight:"100vh" }}>
        <Box sx={{display: "flex",flexDirection:"column", justifyContent: "center",textAlign:"center",alignItems: "center",height:"100vh"}}>

         <Typography color="white" variant="body1 " sx={{position:"absolute",top:"40px",letterSpacing:"2px",fontSize:"20px",fontWeight:"200"}}>[ AI Automation ]</Typography>
         <Typography color="white" variant="body1 " sx={{position:"absolute",top:"80px",letterSpacing:"2px",lineHeight:"40px",fontSize:"35px",fontWeight:"500"}}>AI automation that moves your<br/> business forward</Typography>
      <Box component={"img"}src="./effredcraft/efferBody.svg" sx={{position:"absolute",mt:"100px",height:"1000px",width:"1000px"}} />
         <Button variant="outlined" sx={{position:"absolute",bottom:"40px",backgroundColor:"none",color:"#fff",borderColor:"#fff",padding:"10px 30px",fontSize:"20px",textTransform:"none","&:hover":{backgroundColor:"#FF6A3D"}}}>Get Started</Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Landing_sixth_section;
