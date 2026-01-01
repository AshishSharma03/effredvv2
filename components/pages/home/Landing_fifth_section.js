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
        <Box
          sx={{
            mt: 100,
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "100px",
          }}
        >
          <Box
            sx={{
              height: "2400px",
              position: "relative",
              width: "100%",
              zIndex: 99,
            }}
          >
            <Box
              sx={{
                background: "#ffffffff",
                boxShadow: "0px 0px 121px 53px rgba(0, 0, 0, 0.1)",
                position: "absolute",
                width: "530px",
                height: "400px",
                left: "150px",
                top: "0px",

                p: 2,
              }}
            >
               
                <Box
                  sx={{
                    position: "absolute",
                    right: "90px",
                    top: "90px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    color="black"
                    variant="body1"
                    sx={{
                      letterSpacing: "2px",
                      lineHeight: "40px",
                      fontSize: "40px",
                      fontWeight: "800",
                      // p: "0px 0px 0px 10px",
                      zIndex: 2,
                      color: "#fff",
                    }}
                  >
                    1
                  </Typography>
                  <Box sx={{ position: "absolute", width: "80px", height: "80px", background: "linear-gradient(93deg,rgba(141, 141, 141, 1) 0%, rgba(0, 0, 0, 1) 100%);",borderRadius:"100%" }} />
                  <Box sx={{ position: "absolute", width: "100px", height: "100px",borderRadius:"100%",border:"1px solid #000" }} />
                  <Box sx={{ position: "absolute", width: "120px", height: "120px",borderRadius:"100%",border:"1px solid #000" }} />
                  
                </Box>
                <Stack sx={{pt:"50px",px:"20px"}}>
                 <Typography
                  color="black"
                  variant="body1"
                  sx={{
                    letterSpacing: "2px",
                    lineHeight: "40px",
                    fontSize: "40px",
                    fontWeight: "800",
                    p: "0px 0px 0px 10px",
                  }}
                >
                  Discovery
                  <br />& Planning
                </Typography>
                 <Typography
                  color="black"
                  variant="body1"
                  sx={{
                    mt:"80px",
                    letterSpacing: "2px",
                    lineHeight: "30px",
                    fontSize: "20px",
                    fontWeight: "200",
                    p: "0px 0px 0px 10px",
                  }}
                >
                 We explore your vision, goals, and market to create a strategic roadmap through meetings, assessments, and planning.
                </Typography>
                </Stack>
            </Box>

            <Box
              sx={{
                background: "#ffffffff",
                boxShadow: "0px 0px 121px 53px rgba(0, 0, 0, 0.1)",
                position: "absolute",
                width: "530px",
                height: "400px",
                right: "150px",
                top: "350px",

                p: 2,
              }}
            >
                              <Box
                  sx={{
                    position: "absolute",
                    right: "0px",
                    top: "0px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    color="black"
                    variant="body1"
                    sx={{
                      letterSpacing: "2px",
                      lineHeight: "40px",
                      fontSize: "40px",
                      fontWeight: "800",
                      // p: "0px 0px 0px 10px",
                      zIndex: 2,
                      color: "#fff",
                    }}
                  >
                    2
                  </Typography>
                  <Box sx={{ position: "absolute", width: "80px", height: "80px", background: "linear-gradient(93deg,rgba(141, 141, 141, 1) 0%, rgba(0, 0, 0, 1) 100%);",borderRadius:"100%" }} />
                  <Box sx={{ position: "absolute", width: "100px", height: "100px",borderRadius:"100%",border:"1px solid #000" }} />
                  <Box sx={{ position: "absolute", width: "120px", height: "120px",borderRadius:"100%",border:"1px solid #000" }} />
                  
                </Box>
                <Stack sx={{pt:"50px",px:"20px"}}>
                 <Typography
                  color="black"
                  variant="body1"
                  sx={{
                    letterSpacing: "2px",
                    lineHeight: "40px",
                    fontSize: "40px",
                    fontWeight: "800",
                    p: "0px 0px 0px 10px",
                  }}
                >
                  Design
                  <br />& Prototyping
                </Typography>
                 <Typography
                  color="black"
                  variant="body1"
                  sx={{
                    mt:"80px",
                    letterSpacing: "2px",
                    lineHeight: "30px",
                    fontSize: "20px",
                    fontWeight: "200",
                    p: "0px 0px 0px 10px",
                  }}
                >
                 Wireframes and mockups bring your product to life with intuitive, user-focused design ready for seamless implementation.
                </Typography>
                </Stack>

            </Box>

            <Box
              sx={{
                background: "#ffffffff",
                boxShadow: "0px 0px 121px 53px rgba(0, 0, 0, 0.1)",
                position: "absolute",
                width: "530px",
                height: "400px",
                left: "150px",
                top: "820px",

                p: 2,
              }}
            >

                 <Box
                  sx={{
                    position: "absolute",
                    left: "0px",
                    top: "0px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    color="black"
                    variant="body1"
                    sx={{
                      letterSpacing: "2px",
                      lineHeight: "40px",
                      fontSize: "40px",
                      fontWeight: "800",
                      // p: "0px 0px 0px 10px",
                      zIndex: 2,
                      color: "#fff",
                    }}
                  >
                    3
                  </Typography>
                  <Box sx={{ position: "absolute", width: "80px", height: "80px", background: "linear-gradient(93deg,rgba(141, 141, 141, 1) 0%, rgba(0, 0, 0, 1) 100%);",borderRadius:"100%" }} />
                  <Box sx={{ position: "absolute", width: "100px", height: "100px",borderRadius:"100%",border:"1px solid #000" }} />
                  <Box sx={{ position: "absolute", width: "120px", height: "120px",borderRadius:"100%",border:"1px solid #000" }} />
                  
                </Box>
                <Stack sx={{pt:"50px",px:"20px"}}>
                 <Typography
                  color="black"
                  variant="body1"
                  sx={{
                    letterSpacing: "2px",
                    lineHeight: "40px",
                    fontSize: "40px",
                    fontWeight: "800",
                    p: "0px 0px 0px 10px",
                  }}
                >
                  QA
                  <br />& Development
                </Typography>
                 <Typography
                  color="black"
                  variant="body1"
                  sx={{
                    mt:"80px",
                    letterSpacing: "2px",
                    lineHeight: "30px",
                    fontSize: "20px",
                    fontWeight: "200",
                    p: "0px 0px 0px 10px",
                  }}
                >
                We build clean, scalable code supported by testing plans and bug fixing to ensure stability, performance, and reliability.                  </Typography>
                </Stack>
            </Box>

            <Box
              sx={{
                background: "#ffffffff",
                boxShadow: "0px 0px 121px 53px rgba(0, 0, 0, 0.1)",
                position: "absolute",
                width: "530px",
                height: "400px",
                right: "300px",
                top: "1300px",

                p: 2,
              }}
            >
                              <Box
                  sx={{
                    position: "absolute",
                    left: "45%",
                    top: "-10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    color="black"
                    variant="body1"
                    sx={{
                      letterSpacing: "2px",
                      lineHeight: "40px",
                      fontSize: "40px",
                      fontWeight: "800",
                      // p: "0px 0px 0px 10px",
                      zIndex: 2,
                      color: "#fff",
                    }}
                  >
                    4
                  </Typography>
                  <Box sx={{ position: "absolute", width: "80px", height: "80px", background: "linear-gradient(93deg,rgba(141, 141, 141, 1) 0%, rgba(0, 0, 0, 1) 100%);",borderRadius:"100%" }} />
                  <Box sx={{ position: "absolute", width: "100px", height: "100px",borderRadius:"100%",border:"1px solid #000" }} />
                  <Box sx={{ position: "absolute", width: "120px", height: "120px",borderRadius:"100%",border:"1px solid #000" }} />
                  
                </Box>
                <Stack sx={{pt:"50px",px:"20px"}}>
                 <Typography
                  color="black"
                  variant="body1"
                  sx={{
                    letterSpacing: "2px",
                    lineHeight: "40px",
                    fontSize: "40px",
                    fontWeight: "800",
                    p: "0px 0px 0px 10px",
                  }}
                >
                  Agile
                  <br />Development
                </Typography>
                 <Typography
                  color="black"
                  variant="body1"
                  sx={{
                    mt:"80px",
                    letterSpacing: "2px",
                    lineHeight: "30px",
                    fontSize: "20px",
                    fontWeight: "200",
                    p: "0px 0px 0px 10px",
                  }}
                >
                Agile sprints drive continuous improvement. We support product launch, PR, investor readiness, and long-term growth strategies.
                </Typography>
                </Stack>
            </Box>
          </Box>
        </Box>



        
      </Box>

      {/* More content after section */}
      <Box sx={{ height: "60vh" }} />
    </Box>
  );
}
