import Header from "./Header/Header.jsx";
import Body from "./Body/Body.jsx";
import Footer from "./Footer/Footer.jsx";
import { useParams } from "react-router-dom";

function Page() {
  const { listingId } = useParams();
  return (
    <>
      <Header listingId={listingId} />
      <Body listingId={listingId} />
      <Footer listingId={listingId} />
    </>
  );
}

export default Page;
