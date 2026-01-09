import React from "react";
import { Container, Box, Typography, Button, Stack, Grid } from "@mui/material";

const HeaderLink = [
  { label: "OUR PARTNER", href: "#" },
  { label: "SUPPORT", href: "#" },
  { label: "BLOG", href: "#" },
];

const HeaderlinkStyle = {
  letterSpacing: "2px",
  fontSize: { xl: "15px", md: "12px", sm: "10px", xs: "10px" },
  textDecoration: "none",
  fontWeight: 200,
  cursor: "pointer",
};

const HeaderLinks = ({ links }) => {
  return (
    <Box
      sx={{
        py: "15px",
        px: { xl: "50px", md: "30px", sm: "20px", xs: "20px" },
        background: "#000",
        display: { xl: "flex", md: "flex", sm: "flex", xs: "flex" },
        justifyContent: "flex-end",
        alignItems: "center",
        gap: { xl: "30px", md: "25px", sm: "10px", xs: "10px" },
      }}
    >
      {links.map((item) => (
        <Typography
          key={item.label}
          color="white"
          component="a"
          href={item.href}
          variant="body2"
          sx={HeaderlinkStyle}
        >
          {item.label}
        </Typography>
      ))}
    </Box>
  );
};

const navLinks = [
  { label: "PRODUCT & SERVICES", href: "#" },
  { label: "GET IN TOUCH", href: "#" },
  { label: "ABOUT", href: "#" },
  { label: "CAREER", href: "#" },
];

const navItemStyle = {
  fontSize: { xl: "18px", md: "14px", sm: "12px", xs: "10px" },
  cursor: "pointer",
  whiteSpace: "nowrap",
};

const Navbar = ({
  logoSrc = "./logo.svg",
  brandName = "Effred",
  links = [],
}) => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        width: "100%",
        p: "20px 80px 20px 20px",
        // border: "1px solid #fff",
        display: { xl: "flex", md: "flex", sm: "flex", xs: "flex" },
        alignItems: "center",
        gap: { xl: "50px", md: "30px", sm: "20px", xs: "10px" },
      }}
    >
      {/* Logo + Brand */}
      <Stack direction="row" alignItems="center" spacing={{x:1,md:1 ,sm:0.5,xs:0.5}}>
        <Box component="img" src={logoSrc} sx={{ height:{xl: 70, md: 60, sm: 50, xs: 40}, width: {xl: 70, md: 60, sm: 50, xs: 40} }} />
        <Typography variant="body1" sx={{ fontWeight: 800, fontSize: "25px" }}>
          {brandName}
        </Typography>
      </Stack>

      {/* Spacer */}
      <Box sx={{ flex: 1 }} />

      {/* Nav Items */}
      {links.map((item) => (
        <Typography
          key={item.label}
          variant="body2"
          component={item.href ? "a" : "span"}
          href={item.href}
          sx={{
            ...navItemStyle,
            display: { xl: "block", md: "block", sm: "none", xs: "none" },
            textDecoration: "none",
            color: "inherit",
            "&:hover": { opacity: 0.7 },
          }}
        >
          {item.label}
        </Typography>
      ))}
    </Box>
  );
};

function Landing_first_section() {
  return (
    <>
      <HeaderLinks links={HeaderLink} />
      <Container maxWidth="xl">
        <Box
          sx={{
            minHeight: "90vh",
            background: "#",
            position: "relative",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <Navbar links={navLinks} />

          <Box
            sx={{
              position: "absolute",
              width: "100%",
              bottom: { xl: "50px", md: "50px", sm: "10px", xs: "10px" },
              background: "",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: {
                  xl: "row",
                  md: "row",
                  sm: "column",
                  xs: "column",
                },
                alignItems: "center",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  p: "20px",
                  textAlign: {
                    xl: "left",
                    md: "left",
                    sm: "center",
                    xs: "center",
                  },
                  maxWidth: {
                    xl: "550px",
                    md: "550px",
                    sm: "100%",
                    xs: "100%",
                  },
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    textAlign: {
                      xl: "left",
                      md: "left",
                      sm: "center",
                      xs: "center",
                    },
                    fontSize: {
                      xl: "90px",
                      md: "70px",
                      sm: "70px",
                      xs: "50px",
                    },
                    fontWeight: "700",
                    lineHeight: {
                      xl: "100px",
                      md: "70px",
                      sm: "70px",
                      xs: "50px",
                    },
                  }}
                >
                  Shape the <br /> Business <br /> with Effred
                </Typography>
              </Box>
              <Box
                sx={{
                  p: "20px",
                  textAlign: {
                    xl: "left",
                    md: "left",
                    sm: "center",
                    xs: "center",
                  },
                  maxWidth: "450px",
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: {
                      xl: "20px",
                      md: "18px",
                      sm: "14px",
                      xs: "14px",
                    },
                  }}
                >
                  We craft intelligent, scalable digital experiences — combining
                  custom software, mobile apps, and automation to accelerate
                  your business transformation.
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    background: "#000",
                    padding: "20px 70px",
                    marginTop: "20px",
                  }}
                >
                  Read more
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default Landing_first_section;
