  import Landing_first_section from "../../components/pages/home/Landing_first_section";
  import Landing_second_section from "../../components/pages/home/Landing_second_section";
  import Landing_third_section from "../../components/pages/home/Landing_third_section";
  import Landing_forth_section from "../../components/pages/home/Landing_forth_section";
  import Landing_fifth_section from "../../components/pages/home/Landing_fifth_section";
  import Landing_sixth_section from "../../components/pages/home/Landing_sixth_section";
import Footer from "../../components/pages/footer/Footer";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <>
      <Landing_first_section />
      <Landing_second_section />
      <Landing_third_section/>
      <Landing_forth_section/>
      <Landing_fifth_section/>
      <Landing_sixth_section/>
      <Footer/>
    </>
  );
}
