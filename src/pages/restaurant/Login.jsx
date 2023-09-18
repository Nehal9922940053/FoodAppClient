import React from 'react'
import {Box, Button, TextField, Link, Typography, styled} from '@mui/material';
import LoginBg from '../../assets/images/Bglogin.webp'
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';


const Container = styled(Box)`
min-height:100vh;
width:100vw;
display:flex;
position:relative;
justify-content: center;
align-items: center;
overflow: hidden;
  
`;


const Bg = styled(Box)`
position:absolute;
top:0;
left:0;
width:100%;
height:100%;
z-index:-1;  
`;


const Image = styled('img')({
  backgroundSize: 'cover', // You can apply other background properties as needed
  width: '100%',
  height: '100%',
})





const Wrapper = styled(Box)`
  max-width:380px;
  background-color:#FFF;
  border-radius: 10px;
  backdrop-filter: blur(15px);
  border: 2px solid rgba(255,255,255,0.1);
  box-shadow: 0 0 40px rgba(8,7,16,0.6);
  padding: 50px 35px;

`;


const RestaurantIconWrapper = styled(Box)`
display:flex;
justify-content: center;
align-items: center;

`;


const RestaurantIcon = styled(RestaurantMenuIcon)`
  font-size: 60px; 
  color:#FFBB5C;
`;

const Text = styled(Typography)`
  font-family: Cursive ;
  text-align: center;
`;


const ForgotPassword = styled(Link)`
  Position:fixed;
  left:35px;
  bottom: 165px;
`;

const ButtonWrapper = styled(Box)`
  display:flex;
  justify-content: center;
  align-items: center;
`;


const LoginButton = styled(Button)`
  background-color:#1363DF;
  color:#FFF;
  width:100px;
  margin-top:60px;
  font-weight: bold;
  &:hover {
    border: 3px solid #0066ff;
    color: #0066ff;
  }

`;

const SignupWrapper = styled(Box)`
display:flex;
justify-content: center;
align-items: center;

`;


const SignupLink = styled('p')`
    margin-top:20px;

`;


const Login = () => {
  return (
    <Container>
    <Bg>
  <Image src={LoginBg} alt=''/> {/**/}
   </Bg>
   <Wrapper sx={{}}>
   <RestaurantIconWrapper>
   <RestaurantIcon/>
   </RestaurantIconWrapper>
   <Text variant="h5" gutterBottom>
   Restaurant Login
 </Text>
    <TextField
    margin="normal"
    required
    fullWidth
    id="email"
    label="Email Address"
    name="email"
    autoComplete="email"
    autoFocus
   />
   <TextField
    margin="normal"
    required
    fullWidth
    name="password"
    label="Password"
    type="password"
    id="password"
    autoComplete="current-password"
   />
   <ForgotPassword  to="/restaurantForgot">Forgot Password?</ForgotPassword>
   
   <ButtonWrapper>
   <LoginButton onClick={""}>Login</LoginButton>
  </ButtonWrapper>

    <SignupWrapper>
   <SignupLink>Don't have an account?{" "}
   <span>
   <Link  to="/signup">Sign up</Link>
   </span>
   </SignupLink>
  </SignupWrapper>
 </Wrapper>
 </Container>
  )
}

export default Login