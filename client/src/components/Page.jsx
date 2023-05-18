import Header from "./Header/Header.jsx";
import Body from "./Body/Body.jsx";
import Footer from "./Footer/Footer.jsx";
import { useParams } from "react-router-dom";

function Page() {
  const { locationId } = useParams();
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
}

export default Page;
