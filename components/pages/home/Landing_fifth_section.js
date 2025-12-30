import * as React from "react";
import { Box, Stack, Typography } from "@mui/material";

export default function DevelopmentProcessSection() {
  return (
    <Box
      sx={{
        width: "100%",
        color: "white",
        py: 0,
      }}
    >

      <Box sx={{ height: "60vh" }} />

      <Box
        sx={{
          position: "relative",
          px: { xs: 2, md: 6 },
        }}
      >
        {/* Sticky heading */}
        <Box
          sx={{
            position: "sticky",
            top: "50vh",
            zIndex: 1,
            textAlign: "center",
            pointerEvents: "none",
          }}
        >
          <Typography
          color="#000"
           variant="body1"
           sx={{ fontSize: "30px", fontWeight: 800, lineHeight: "1.8px" }}
          >
            Our Development Process
          </Typography>
          <Typography
          color="#000"
            variant="body1"
            sx={{ fontSize: "50px", fontWeight: 800, mt: 1 }}
          >
            A Process Designed for Outcomes
          </Typography>
        </Box>

        {/* Cards/boxes (they scroll as you scroll the page) */}
        <Box sx={{ mt: 100 , position:"relative", display:"flex", flexDirection:"column", alignItems:"center",gap:"100px"}} >
            <Box
              sx={{
                  height: "2400px",
                  position: "relative",
                  width: "100%",
                   zIndex: 99,
              }}
            >
              <Box sx={{background: "#ffffffff",
           boxShadow: "0px 0px 121px 53px rgba(0, 0, 0, 0.1)",
                position: "absolute",
                width: "530px",
                height: "430px",
                left:"150px",
                top:"0px",
                
                p: 2,}}>
                             <Typography color="black" variant="body1" sx={{letterSpacing:"2px",lineHeight:"40px",fontSize:"25px",fontWeight:"700",p:"0px 0px 0px 10px"}}>TOP</Typography> 
                  </Box>
                  
                <Box sx={{background: "#ffffffff",
            boxShadow: "0px 0px 121px 53px rgba(0, 0, 0, 0.1)",
                position: "absolute",
                width: "530px",
                height: "430px",
                right:"150px",
                top:"350px",
              
                p: 2,}}/>

                  <Box sx={{background: "#ffffffff",
                boxShadow: "0px 0px 121px 53px rgba(0, 0, 0, 0.1)",
                position: "absolute",
                width: "530px",
                height: "430px",
                left:"150px",
                top:"820px",
              
                p: 2,}}/>

                  <Box sx={{background: "#ffffffff",
                boxShadow: "0px 0px 121px 53px rgba(0, 0, 0, 0.1)",
                position: "absolute",
                width: "530px",
                height: "430px",
                right:"300px",
                top:"1300px",
             
                p: 2,}}/>
                  
              


            </Box>
              
     
        </Box>
      </Box>

      {/* More content after section */}
      <Box sx={{ height: "60vh" }} />
    </Box>
  );
}
