import Header from "../../module/Header/Header";
import Footer from "../../module/Footer/Footer";
import ScrollTop from "../../module/scrollButton/Scroll";
import Content from "../../template/Content/Content";

export default function Index() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
      <ScrollTop></ScrollTop>
    </div>
  );
}
