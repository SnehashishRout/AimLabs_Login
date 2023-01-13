import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import myImage from './Resources/mainLogo.png';

function App() {

const Home = styled.div`
  display: flex;

  @media (max-width: 414px) {

    display:flex;
    justify-content: start;
  }

  @media (max-width: 995px) {

  display:flex;
  justify-content: start;
  
  }
`;

const LeftDiv = styled.div`
  background-image: url('./Resources/mainLogo.png');
  margin : 8% 5%;
  
  @media (max-width: 414px) {
    
    display: flex;
    justify-content: center;
    margin: 2% 4%;
  }

  @media (max-width: 995px) {
    
    display: flex;
    justify-content: center;
    margin: 2% 4%;
  }
  
`;

const RightDiv = styled.div`
  @media (max-width: 414px) {
    
    display: block;
  }

  @media (max-width: 995px) {
    
    display: block;
  }
`;

const Container = styled.div`
  position: absolute;
  width: 55%;
  height: 80%;
  right: 2rem;
  top: 4rem;

  background: #FFFFFF;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.16);
  border-radius: 12px;
  
  ${'' /* justify-content: center; */}

  @media (max-width: 414px) {
    width:90%;
    right: 1rem;
    left:1rem;
    height: 50%;
    bottom: 1rem;
    top: auto;
  }

  @media (max-width: 995px) {
    width:90%;
    right: 1rem;
    left:1rem;
    height: 50%;
    bottom: 1rem;
    top: auto;
    max-height: 50%;
  }
`;

const Area = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 12% auto 3% 3%;

  @media (max-width: 414px) {
    margin: auto 1%;
  }

  @media (max-width: 995px) {
    margin: auto 1%;
  }
`;

const Image = styled.div`
  background-image: url(${myImage})
  
  
  `;


// const Image = styled.img.attrs({src:{mainLogo}})``;

const Logo = styled.img`
  width: 65%;
  height:auto;  

  @media (max-width: 414px) {
    ${'' /* display:none; */}
    width: 70%;
  }

  @media (max-width: 995px) {
    ${'' /* display:none; */}
    width: auto;
    max-height: 50%;
  }
`;

const Title = styled.h1`
  font-family: 'Poppins';
  font-style: normal; 
  font-weight: 700;
  text-align: center;

  @media (max-width: 414px) {
    font-size: 2.5vh;
  }

  @media (max-width: 995px) {
    font-size: 2.5vh;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Label = styled.label`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  margin-left: 15vh;

  @media (max-width: 414px) {
    margin-left: 2vh;
    font-size: 1.5vh;
  }

  @media (max-width: 995px) {
    margin-left: 2vh;
    font-size: 1.5vh;
  }
`;

const Input = styled.input`
  border: 1px solid rgba(4, 7, 47, 0.4);
  border-radius: 8px;
  height: 4.5vh;
  margin: 1vh 15vh;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;

  @media (max-width: 414px) {
    margin: 0.5vh 2vh;
    font-size: 1.3vh;
    height: 3.5vh;
  }

  @media (max-width: 995px) {
    margin: 0.5vh 2vh;
    font-size: 1.3vh;
    height: 3.5vh;
  }
`;

const CheckBox = styled.input`
  display:inline;
`;

const ChkLabel = styled.label`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  color: #737B86;
  font-size: 1.6vh;

  @media (max-width: 414px) {
    
    font-size: 1.3vh;
    
  }

  @media (max-width: 995px) {
    
    font-size: 1.3vh;
    
  }
`;

const SubCont = styled.div`
  display:"flex";
  justify-content:center;
`;

const SubCont2 = styled.div`
  display:"flex";
  justify-content:center;
  text-align:center;
  font-weight:bold;
  font-wize:"1.6vh";

  @media (max-width: 414px) {
    
    font-size: 1.3vh;
    
  }

  @media (max-width: 995px) {
    
    font-size: 1.3vh;
    
  }
`;

const Cont = styled.div`
  display: flex;
  justify-content: space-between;
  margin: auto 15vh;

  @media (max-width: 414px) {
    margin: auto 2vh;
  }

  @media (max-width: 995px) {
    margin: auto 2vh;
  }
`;

const Link = styled.a`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  color: #F78719; 
  font-size: 1.6vh;

  @media (max-width: 414px) {
    
    font-size: 1.3vh;
    
  }

  @media (max-width: 995px) {
    
    font-size: 1.3vh;
    
  }
  
`;

const Button = styled.button`
  background: #1575A7;
  border-radius: 8px;
  border-width: 0;
  height: 5vh;
  color: white;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 1.6vh;
  margin: 3vh 26vh;

  &:hover{
    opacity: 0.5;
  }

  @media (max-width: 414px) {
    
    font-size: 1.3vh;
    margin: 6vh 3.5vh 2vh 3.5vh;
    height: 4vh;
  }

  @media (max-width: 995px) {
    
    font-size: 1.3vh;
    margin: 6vh 3.5vh 2vh 3.5vh;
    height: 4vh;
  }
`;

const Break = styled.br``;

  return (
		<Home>
			<LeftDiv>
				<Logo src={myImage} />
			</LeftDiv>
			<RightDiv>
				<Container>
					<Area>
						<Title>Login</Title>
						<Form>
              <Label>Login ID </Label>
              
							<Input type="text" placeholder='Enter Login Id'></Input>
              <Break></Break>
              <Label>Password</Label>
              <Input type="password" placeholder='Enter Password'></Input>
              <Cont>
              <SubCont>
              <CheckBox type="checkbox" id="chk1"></CheckBox>
              <ChkLabel for="chk1">Remember Me</ChkLabel>
              </SubCont>
              <Link href="">Change Password</Link>
              </Cont>
              
              <Cont>
              <SubCont>
              <CheckBox type="checkbox" id="chk1"></CheckBox>
              <ChkLabel for="chk1">Agree to <Link href="">Terms and Conditions</Link></ChkLabel>
              </SubCont>
              </Cont>

              <Button>Login</Button>

              <SubCont2 >
                Don't Have an account? <Link href=''>Register Here</Link>
              </SubCont2>
						</Form>
					</Area>
				</Container>
			</RightDiv>
		</Home>
	);
}

export default App;
