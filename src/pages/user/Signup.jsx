import React, {useState} from 'react'
import {Box, Button, TextField, Typography, styled} from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {Link, useNavigate} from "react-router-dom";
import { signupUser } from '../../services/api';
import {toast} from 'react-toastify';



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

const SignupBg = styled('img')({
  backgroundSize: 'cover', 
  width: '100%',
  height: '100%',
 
});


const Wrapper = styled(Box)`
  margin-top:100px;
  max-width:380px;
  background-color:#FFF;
  border-radius: 10px;
  backdrop-filter: blur(15px);
  border: 2px solid rgba(255,255,255,0.1);
  box-shadow: 0 0 40px rgba(8,7,16,0.6);
  padding: 40px 35px;
  height: auto;
`;

const UserIcon = styled(Box)`
  display:flex;
  justify-content: center;
  align-items: center;
`;


const UserAccountIcon = styled(AccountCircleIcon)`
  font-size: 60px; 
  color:#9E9FA5;
`;




const Text = styled(Typography)`
  font-family: Cursive ;
  text-align: center;
`;


const ButtonWrapper = styled(Box)`
  display:flex;
  justify-content: center;
  align-items: center;
`;

const SignupButton = styled(Button)`
  background-color:#1363DF;
  color:#FFF;
  width:100px;
  margin-top:20px;
  font-weight: bold;
  &:hover {
    border: 3px solid #0066ff;
    color: #0066ff;
  }

`;

const SignInWrapper = styled(Box)`
display:flex;
justify-content: center;
align-items: center;

`;


const SigninLink = styled('p')`
margin-top:10px;
 

`;

const LoginPage = styled(Link)`
color:#007FFF;

`;


const Signup = () => {


  const navigate = useNavigate();

  const initialValues = {
    name:"",
    email:"",
    phone:"",
    password:""
  }

  const [formValues, setFormValues] = useState(initialValues);

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value})
  }

  const handleSignup = async (e) =>{
    e.preventDefault();
    const {data}  = await signupUser(formValues);
    if(data){
      if(data.info){
        toast.info(data.info);
    }else if(data.error){
      toast.error(data.error);
     }else{
      toast.success(data.success);
      navigate("/login");
    } 
  }else{
    toast.error("Something went wrong")
  }
}

  return (
    <Container>
   {/*<Bg>
   <LoginBg src='' alt=''/>
   </Bg>*/}
   <form>
   <Wrapper sx={{}}>
    <UserIcon>
    <UserAccountIcon/>
    </UserIcon>
  
   <Text variant="h5" gutterBottom>
   User SignUp
    </Text>

    <TextField
    value={formValues.name}
    onChange={handleChange}
    margin="normal"
    required
    fullWidth
    id="name"
    label="Name"
    name="name"
    // autoComplete="name"
    type='text'
    />


    <TextField
    value={formValues.email}
    onChange={handleChange}
    margin="normal"
    required
    fullWidth
    id="email"
    label="Email Address"
    name="email"
    // autoComplete="email"
    type='email'
   />

   <TextField
   value={formValues.phone}
   onChange={handleChange}
   margin="normal"
   required
   fullWidth
   id="phone"
   label="Phone Number"
   name="phone"
  //  autoComplete="Phone Number"
   type='number'
   />


   <TextField
   value={formValues.password}
   onChange={handleChange}
    margin="normal"
    required
    fullWidth
    name="password"
    label="Password"
    type="password"
    id="password"
    // autoComplete="current-password"
  
   />
  <ButtonWrapper>
   <SignupButton onClick={handleSignup}>Sign up</SignupButton>
  </ButtonWrapper>
   
  <SignInWrapper>
   <SigninLink>Have an account?{" "}
   <span>
   <LoginPage  to="/login">Sign in</LoginPage>
   </span>
   </SigninLink>
   </SignInWrapper>
 </Wrapper>
 </form>
 <Bg>
 <SignupBg src="https://images.unsplash.com/photo-1613067532651-7075a620c900?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt=''/>{ /**/}
  </Bg>
 </Container>
  )
}

export default Signup;