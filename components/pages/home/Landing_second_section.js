import { Box, Typography ,Stack, Grid} from '@mui/material'
import React from 'react'

function Landing_second_section() {
  return (
    <Box sx={{minHeight:"50vh",background:"#000"}}>
        <Typography variant='body1' sx={{color:"#fff",textAlign:"center",py:"60px",fontSize:"35px",fontWeight:"100",letterSpacing:"2px"}}>TRUSTED BY INDUSTRY LEADERS </Typography>
   
<Box 
  sx={{
    position: 'relative',
    width: '100%',
    '&::after': {
      content: '""',
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      width: '300px',
      background: 'linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,0.9))',
      pointerEvents: 'none',
      zIndex: 1
    },
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      width: '300px',
      background: 'linear-gradient(to left, rgba(0,0,0,0), rgba(0,0,0,0.9))',
      pointerEvents: 'none',
      zIndex: 1
    }
  }}
>
  <Stack 
    direction={"row"} 
    spacing={10}
    sx={{
      p:"5px",
      background: "linear-gradient(93deg,rgba(0, 0, 0, 1) 0%, rgba(20, 20, 20, 1) 50%, rgba(0, 0, 0, 1) 100%)",
      overflowX: 'auto',
      flexWrap: 'nowrap',
      '& > *': { flexShrink: 0 },
      '&::-webkit-scrollbar': {
        height: '8px',
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: 'rgba(0,0,0,.2)',
        borderRadius: '4px',
      }
    }}
  >
    <Box sx={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",py:"10px",gap:"8px",flexWrap:"wrap"}}>
      <Box component={"img"} src="../industry_leaders_logo/kubarnate.png" sx={{height:"40px"}} />
      <Typography variant="body2" sx={{fontSize:"15px",fontWeight:"700",color:"#707070ff"}}>kubernetes</Typography>
    </Box>

    <Box sx={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",py:"10px",gap:"8px",flexWrap:"wrap"}}>
      <Box component={"img"} src="../industry_leaders_logo/aws.png" sx={{height:"40px"}} />
      <Typography variant="body2" sx={{fontSize:"15px",fontWeight:"700",color:"#707070ff"}}>Amazon Web Services</Typography>
    </Box>

    <Box sx={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",py:"10px",gap:"8px",flexWrap:"wrap"}}>
      <Box component={"img"} src="../industry_leaders_logo/googlecloud.png" sx={{height:"40px"}} />
      <Typography variant="body2" sx={{fontSize:"15px",fontWeight:"700",color:"#707070ff"}}>Google Cloud Platform</Typography>
    </Box>

    <Box sx={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",py:"10px",gap:"8px",flexWrap:"wrap"}}>
      <Box component={"img"} src="../industry_leaders_logo/azure.png" sx={{height:"40px"}} />
      <Typography variant="body2" sx={{fontSize:"15px",fontWeight:"700",color:"#707070ff"}}>Microsoft Azure</Typography>
    </Box>

    <Box sx={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",py:"10px",gap:"8px",flexWrap:"wrap"}}>
      <Box component={"img"} src="../industry_leaders_logo/dbrx.png" sx={{height:"40px"}} />
      <Typography variant="body2" sx={{fontSize:"15px",fontWeight:"700",color:"#707070ff"}}>databricks</Typography>
    </Box>

    <Box sx={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",py:"10px",gap:"8px",flexWrap:"wrap"}}>
      <Box component={"img"} src="../industry_leaders_logo/kubarnate.png" sx={{height:"40px"}} />
      <Typography variant="body2" sx={{fontSize:"15px",fontWeight:"700",color:"#707070ff"}}>kubernetes</Typography>
    </Box>

     <Box sx={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",py:"10px",gap:"8px",flexWrap:"wrap"}}>
      <Box component={"img"} src="../industry_leaders_logo/aws.png" sx={{height:"40px"}} />
      <Typography variant="body2" sx={{fontSize:"15px",fontWeight:"700",color:"#707070ff"}}>Amazon Web Services</Typography>
    </Box>
  </Stack>

</Box>

  <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",p:"100px 50px 0px 50px"}}>
   <Grid container width={"100%"} >
  <Grid size={6} sx={{background:"#fff",height:"340px"}}>
    <Box component={"img"} src="../effredcraft/comninedSolution.png" sx={{width:"100%",height:"340px"}} />
  </Grid>
  <Grid size={6} sx={{background:"#151414",height:"340px"}}>
    <Box sx={{px:"40px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"100%",gap:"20px"}}>
      <Typography sx={{color:"#fff"}}>We craft intelligent, scalable digital experiences — combining custom software, mobile apps, and automation to accelerate your business transformation.</Typography>
    </Box>
  </Grid> 
</Grid>
  </Box>
  
    </Box>
  )
}

export default Landing_second_section