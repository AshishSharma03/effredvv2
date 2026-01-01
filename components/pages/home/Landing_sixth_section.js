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
          opacity: 0.7,
        }}
      />

      {/* Content above video */}
      <Box sx={{ position: "relative", zIndex: 1, display: "flex",flexDirection:"column", justifyContent: "center",textAlign:"center",alignItems: "center",minHeight:"100vh" }}>
         <Typography color="white" variant="body1 " sx={{letterSpacing:"2px",fontSize:"24px",fontWeight:"200",mb:"20px"}}>[ AI Automation ]</Typography>
         <Typography color="white" variant="body1 " sx={{letterSpacing:"2px",lineHeight:"50px",fontSize:"50px",fontWeight:"200"}}>AI automation that moves your<br/> business forward</Typography>
      </Box>
    </Box>
  );
}

export default Landing_sixth_section;
