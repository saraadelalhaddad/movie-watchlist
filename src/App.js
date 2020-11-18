import "./App.css";

import Watchlist from "./components/Watchlist";
import Watched from "./components/Watched";

import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Watchlist />
          </Col>
          <Col>
            <Watched />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
