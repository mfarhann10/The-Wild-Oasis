import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Button from './ui/Button';
import Input from './ui/Input';

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  background-color: yellow;
`;

const StledDiv = styled.main`
  background-color: #ddd;
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StledDiv>
        <H1>The Wild Oasis</H1>
        <Button onClick={() => alert('Check in')}>Check In</Button>
        <Button onClick={() => alert('Check out')}>Check out</Button>

        <Input type="number" placeholder="Number of Guests" />
      </StledDiv>
    </>
  );
}

export default App;
