import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Container>
        <h1>Welcome to ShopIt</h1>
      </Container>
      <Footer />
    </>
  );
};

export default App;
