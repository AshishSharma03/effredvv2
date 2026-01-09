import React from 'react'
import { Box, Typography ,Stack, Grid,Divider, Avatar} from '@mui/material'



const ServiceCard = ({ icon, title, description }) => {
  return (
    <Box
      sx={{
        background: "#212121",
        width: 400,
        height: 250,
        borderRadius: "37px",
        mx: "20px",
        display: "flex",
        flexDirection: "column",
        p: "20px 20px 30px 20px",
        flexShrink: 0,
      }}
    >
      <Avatar src={icon} sx={{ height: 60, width: 60 }} />

      <Box sx={{ flex: 1 }} />

      <Stack direction="column" sx={{ p: "10px" }}>
        <Typography
          color="white"
          variant="body1"
          sx={{ fontSize: "35px", fontWeight: 700 }}
        >
          {title}
        </Typography>

        <Typography
          color="white"
          variant="body1"
          sx={{ fontSize: "12px", fontWeight: 100 }}
        >
          {description}
        </Typography>
      </Stack>
    </Box>
  );
};

const SERVICES_UP = [
  {
    icon: "../effredcraft/justest.png",
    title: "AI Development",
    description:
      "Our AI development team builds smart, data-driven applications that enhance decision-making, automate tasks, and deliver measurable impact across industries.",
  },
  {
    icon: "../effredcraft/justest.png",
    title: "AI Development",
    description:
      "Our AI development team builds smart, data-driven applications that enhance decision-making, automate tasks, and deliver measurable impact across industries.",
  },
  {
    icon: "../effredcraft/justest.png",
    title: "DevOps Services",
    description:
      "Our AI development team builds smart, data-driven applications that enhance decision-making, automate tasks, and deliver measurable impact across industries.",
  },
   {
    icon: "../effredcraft/justest.png",
    title: "DevOps Services",
    description:
      "Our AI development team builds smart, data-driven applications that enhance decision-making, automate tasks, and deliver measurable impact across industries.",
  },
  
];

const SERVICES_BOTTOM = [
  {
    icon: "../effredcraft/justest.png",
    title: "AI Development",
    description:
      "Our AI development team builds smart, data-driven applications that enhance decision-making, automate tasks, and deliver measurable impact across industries.",
  },
  {
    icon: "../effredcraft/justest.png",
    title: "SaaS Development",
    description:
      "Our AI development team builds smart, data-driven applications that enhance decision-making, automate tasks, and deliver measurable impact across industries.",
  },
  {
    icon: "../effredcraft/justest.png",
    title: "AI Development",
    description:
      "Our AI development team builds smart, data-driven applications that enhance decision-making, automate tasks, and deliver measurable impact across industries.",
  },
  {
    icon: "../effredcraft/justest.png",
    title: "AI Development",
    description:
      "Our AI development team builds smart, data-driven applications that enhance decision-making, automate tasks, and deliver measurable impact across industries.",
  },
];


const GradientScroller = ({
  children,
  top,
  align = "left", // "left" | "right"
}) => {
  const isLeft = align === "left";

  return (
    <Box
      sx={{
        position: "absolute",
        top,
        left: isLeft ? 0 : "auto",
        right: isLeft ? "auto" : 0,
        width: "94.5%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          width: isLeft ? 100 : 0,
          background:
            "linear-gradient(to left, rgba(0,0,0,0), rgba(0,0,0,0.9))",
          pointerEvents: "none",
          zIndex: 1,
        },

        "&::after": {
          content: '""',
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          width: isLeft ? 0 : 100,
          background:
            "linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,0.5))",
          pointerEvents: "none",
          zIndex: 1,
        },
      }}
    >
      <Stack
        direction="row"
        sx={{
          py: "20px",
          px: "5px",
          width: "100%",
          overflowX: "auto",
          flexWrap: "nowrap",
          "&::-webkit-scrollbar": { height: "8px" },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "rgba(0,0,0,.2)",
            borderRadius: "4px",
          },
        }}
      >
        {children}
      </Stack>
    </Box>
  );
};



function Landing_third_section() {
  return (
    <Box sx={{minHeight:"135vh",background:"#000",position:"relative", overflowX: "clip"}}>
      
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
  <Box sx={{position:"absolute",height:"135vh",borderRight:" 1px dashed #4B4B4B",position:"absolute",top:"0xp",left:"80px"}} />
  <Box sx={{position:"absolute",height:"150px",borderRight:"1px dashed #4B4B4B",position:"absolute",top:"0xp",left:"260px"}} />
  <Box sx={{position:"absolute",width:"100%",borderTop:"1px dashed #4B4B4B",position:"absolute",top:"150px"}} />
  <Box sx={{position:"absolute",width:"100%",borderTop:"1px dashed #4B4B4B",position:"absolute",top:"290px"}} />
    <Box sx={{position:"absolute",width:"100%",borderTop:"1px dashed  #4B4B4B",position:"absolute",top:"340px"}} />
    <Box sx={{position:"absolute",width:"100%",borderTop:"1px dashed  #4B4B4B",position:"absolute",top:"650px"}} />
     <Box sx={{position:"absolute",height:"700px",borderRight:" 1px dashed #4B4B4B",position:"absolute",bottom:"0px",right:"80px"}} />
     <Typography color="white" variant="body2" sx={{position:"absolute",top:"100px",left:"95px",letterSpacing:"2px",fontSize:"15px",fontWeight:"200"}}>OUR EXPERTIES</Typography>
     <Typography color="white" variant="body1" sx={{position:"absolute",top:"168px",left:"95px",letterSpacing:"1px",fontSize:"50px",fontWeight:"700",lineHeight:"50px"}}>Building Smart,<br/> 
Secure Digital Solutions</Typography>


    <GradientScroller top="355px" align="right">
    {SERVICES_UP.map((service, index) => (
      <ServiceCard key={index} {...service} />
    ))}
  </GradientScroller>
     
    <GradientScroller top="665px" align="left">
      {SERVICES_BOTTOM.map((service, index) => (
        <ServiceCard key={index} {...service} />
      ))}
    </GradientScroller>
    
    </Box>
  )
}

export default Landing_third_section
