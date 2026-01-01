"use client";

import { Box ,Typography} from "@mui/material";
import React, { useEffect, useRef } from "react";


function Landing_sixth_section() {



  return (
    <Box sx={{ position: "relative", minHeight: "100vh", background: "#000", overflow: "hidden" }}>
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

          <Box component={"img"}src="./effredcraft/effer_ai_logo.svg" sx={{position:"absolute",mt:"100px",height:"150px",width:"150px"}} />
          <Box component={"img"}src="./effredcraft/efferd_line.svg" sx={{position:"absolute",mt:"100px",height:"600px",width:"600px"}} />
          <Box component={"img"}src="./effredcraft/database.svg" sx={{position:"absolute",left:"200px",mt:"85px",height:"250px",width:"250px"}} />
          <Box component={"img"}src="./effredcraft/graph.svg" sx={{position:"absolute",right:"200px",mt:"85px",height:"250px",width:"250px"}} />
          <Box component={"img"}src="./effredcraft/secure.svg" sx={{position:"absolute",right:"350px",top:"165px",height:"100px",width:"100px"}} />
          <Box component={"img"}src="./effredcraft/secure.svg" sx={{position:"absolute",left:"350px",top:"165px",height:"100px",width:"100px"}} />
          <Box component={"img"}src="./effredcraft/secure.svg" sx={{position:"absolute",right:"350px",bottom:"75px",height:"100",width:"100px"}} />
          <Box component={"img"}src="./effredcraft/secure.svg" sx={{position:"absolute",left:"350px",bottom:"75px",height:"100px",width:"100px"}} />
        </Box>
      </Box>
    </Box>
  );
}

export default Landing_sixth_section;
