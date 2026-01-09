"use client";

import Landing_first_section from "../../components/pages/home/Landing_first_section";
  import Landing_second_section from "../../components/pages/home/Landing_second_section";
  import Landing_third_section from "../../components/pages/home/Landing_third_section";
  import Landing_forth_section from "../../components/pages/home/Landing_forth_section";
  import Landing_fifth_section from "../../components/pages/home/Landing_fifth_section";
  import Landing_sixth_section from "../../components/pages/home/Landing_sixth_section";
import Footer from "../../components/pages/footer/Footer";
import { Box, CircularProgress } from "@mui/material";
import { Typography } from "@mui/material";
import { useEffect, useState } from "react";


const LoadingScreen = () =>{
  return (<Box sx={{minHeight:"100vh",background:"#000",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:"10px"}}>

    <Box component={"img"} src={"./effredcraft/effer_ai_logo.svg"}  sx={{height:"80px",position:"absolute",zindex:99}}  />
   <CircularProgress sx={{ color: "#ffffff20",position:"absolute" ,Zindex:1}} size={70} thickness={20}  />
    <Typography variant="body2" sx={{color:"#fff",position:"absolute" ,top:"50px"}}>The site is under maintenance.</Typography>
  </Box>)
}

export default function Home() {
   const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // ⏱️ 2 seconds

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }
  return (
    <>
  
      <Landing_first_section />
      <Landing_second_section />
      <Box sx={{display:{xl:"block",md:"none",sm:"none",xs:"none"}}}>
      <Landing_third_section/>
     <Landing_forth_section/>
     <Landing_fifth_section/>
       <Landing_sixth_section/>
       <Footer/>
       </Box>
    <Box sx={{display:{xl:"none",md:"flex",sm:"flex",xs:"flex"},minHeight:"100vh",background:"#000",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
    <Typography variant="body2" sx={{color:"#fff"}}>Our mobile version is currently under development.</Typography>
    </Box>
       
    </>
  );
}
