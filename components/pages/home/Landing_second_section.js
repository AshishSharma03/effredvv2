import { Box, Typography, Stack, Grid, Container } from '@mui/material'
import React from 'react'


const TECH_STACK = [
  { src: "../industry_leaders_logo/kubarnate.png", label: "Kubernetes" },
  { src: "../industry_leaders_logo/aws.png", label: "Amazon Web Services" },
  { src: "../industry_leaders_logo/googlecloud.png", label: "Google Cloud Platform" },
  { src: "../industry_leaders_logo/azure.png", label: "Microsoft Azure" },
  { src: "../industry_leaders_logo/dbrx.png", label: "Databricks" },
  { src: "../industry_leaders_logo/kubarnate.png", label: "Kubernetes" },
  { src: "../industry_leaders_logo/aws.png", label: "Amazon Web Services" },
];

const TechItem = ({ src, label }) => (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      py: { xl: "10px", md: "8px", sm: "6px", xs: "4px" },
      gap: { xl: "8px", md: "8px", sm: "8px", xs: "8px" },
      flexShrink: 0,
    }}
  >
    <Box
      component="img"
      src={src}
      alt={label}
      sx={{ height: { xl: "40px", md: "40px", sm: "25px", xs: "25px" } }}
    />
    <Typography
      variant="body2"
      sx={{
        fontSize: { xl: "15px", md: "15px", sm: "15px", xs: "10px" },
        fontWeight: 700,
        color: "#707070ff",
        whiteSpace: "nowrap",
      }}
    >
      {label}
    </Typography>
  </Box>
);


const TechStackScroller = ({ data }) => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        "&::after": {
          content: '""',
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          width: { xl: 300, md: 200, sm: 150, xs: 100 },
          background:
            "linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,0.9))",
          pointerEvents: "none",
          zIndex: 1,
        },
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          width: { xl: 300, md: 200, sm: 150, xs: 100 },
          background:
            "linear-gradient(to left, rgba(0,0,0,0), rgba(0,0,0,0.9))",
          pointerEvents: "none",
          zIndex: 1,
        },
      }}
    >
      <Stack
        direction="row"
        spacing={{ xl: 10, md: 8, sm: 6, xs: 4 }}
        sx={{
          p: "5px",
          background:
            "linear-gradient(93deg, rgba(0,0,0,1) 0%, rgba(20,20,20,1) 50%, rgba(0,0,0,1) 100%)",
          overflowX: "auto",
          flexWrap: "nowrap",
          "&::-webkit-scrollbar": { height: "8px" },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "rgba(0,0,0,.2)",
            borderRadius: "4px",
          },
        }}
      >
        {data.map((item, index) => (
          <TechItem key={index} {...item} />
        ))}
      </Stack>
    </Box>
  );
};



function Landing_second_section() {
  return (
    <Box sx={{ minHeight: "50vh", background: "#000" }}>

      <Typography variant='body1' sx={{ color: "#fff", textAlign: "center", py: "60px", fontSize: { xl: "35px", md: "35px", sm: "25px", xs: "25px" }, fontWeight: "100", letterSpacing: "2px" }}>TRUSTED BY INDUSTRY LEADERS </Typography>
      <TechStackScroller data={TECH_STACK} />
      <Container maxWidth="xl">
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", p: { xl: "100px 50px 0px 50px", md: "80px 30px 0px 30px", sm: "60px 20px 0px 20px", xs: "40px 10px 0px 10px" } }}>
          <Grid container width={"100%"} >
            <Grid size={{ xl: 6, md: 6, sm: 12, xs: 12 }} sx={{ background: "#fff", height: { xl: "340px", md: "340px", sm: "340px", xs: "240px" } }}>
              <Box component={"img"} src="../effredcraft/comninedSolution.png" sx={{ width: "100%", height: { xl: "340px", md: "340px", sm: "340px", xs: "240px" } }} />
            </Grid>
            <Grid size={{ xl: 6, md: 6, sm: 12, xs: 12 }} sx={{ background: "#151414", height: { xl: "340px", md: "340px", sm: "340px", xs: "240px" } }}>
              <Box sx={{ px: "40px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100%", gap: "20px" }}>
                <Typography sx={{ color: "#fff" }}>We craft intelligent, scalable digital experiences — combining custom software, mobile apps, and automation to accelerate your business transformation.</Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}

export default Landing_second_section