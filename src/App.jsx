import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";

const StyledApp = styled.div`
  background-color: aliceblue;
`;

const H1 = styled`
  font-size: 20px;
  font-weight: 600;
  background-color: yellow;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Heading type="h1">Hello World</Heading>
        <Button>Check in</Button>
        <Heading as="h2">Form</Heading>
        <Input type="text" placeholder="Number of guests" />
      </StyledApp>
    </>
  );
}

export default App;
