import React, {useState} from 'react'
import {Box, Button, TextField, Typography,Grid, styled} from '@mui/material'
import SignupBg from '../../assets/images/Bglogin.webp'
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import {Link, useNavigate} from 'react-router-dom';
import { toast } from 'react-toastify';
import { signupRestaurant } from '../../services/api';

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
 backgroundSize: 'cover',
  width: '100%',
  height: '100%',

})



const Wrapper = styled(Box)`
  margin-top:60px;
  max-width:540px;
  background-color:#FFF;
  border-radius: 10px;
  backdrop-filter: blur(15px);
  border: 2px solid rgba(255,255,255,0.1);
  box-shadow: 0 0 40px rgba(8,7,16,0.6);
  padding: 10px 35px;
  height: auto;
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
      name: "",
      address: "",
      openingandclosingTime: "",
      phone: "",
      email: "",
      password: ""
     
      
  }

  const [formValues, setFormValues] = useState(initialValues);
 const [showPassword, setShowPassword] = useState(false)

  const handleChange = (e) => {
      setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSignup = async (e) => {
      e.preventDefault();
      const {data} = await signupRestaurant(formValues);
      if(data){
          if(data.error){
              toast.error(data.error)
          }else if (data.info){
              toast.info(data.info)
          }else{
              toast.success(data.success);
              navigate("/restaurantLogin")
          }
      }else{
          toast.error("Something went wrong")
      }
  }






  return (
    <Container>
    <Bg>
    <Image src={SignupBg} alt=''/> {/**/}
   </Bg>
   <Wrapper sx={{}}>
   <RestaurantIconWrapper>
   <RestaurantIcon/>
   </RestaurantIconWrapper>
   <Text variant="h5" gutterBottom>
   Restaurant SignUp
    </Text>
    <Grid container spacing={2}>
    <Grid item xs={12} sm={6}>

    <TextField
    margin="normal"
    required
    fullWidth
    id="restaurant name"
    label="Restaurant Name"
    name="name"
    size="Normal"
    value={formValues.name}
    onChange={handleChange}
      />
    </Grid>
    <Grid item xs={12} sm={6}>
    <TextField
    margin="normal"
    required
    fullWidth
    id="restaurant address"
    label="Restaurant Address"
    name="address"
    size="Normal"
    value={formValues.address}
    onChange={handleChange}
    />

    </Grid>
    <Grid item xs={12} sm={6}>
    <TextField
    margin="normal"
    required
    fullWidth
    id="opening and closing time"
    label="Opening And Closing Time"
    name="openingandclosingTime"
    size="Normal"
    value={formValues.openingandclosingTime}
    onChange={handleChange}
    />


    </Grid>  
    
    <Grid item xs={12} sm={6}>
    <TextField
   margin="normal"
   required
   fullWidth
   id="phoneNumber"
   label="Phone Number"
   name="phone"
   size="Normal"
   value={formValues.phone}
   onChange={handleChange}

   />  
  </Grid>
   <Grid item xs={12} sm={12}>
    <TextField
    margin="normal"
    required
    fullWidth
    id="email"
    label="Email Address"
    name="email"
    size="Normal"
    value={formValues.email}
    onChange={handleChange}
    
   />
    </Grid>
    <Grid item xs={12} sm={12}>
   <TextField
    margin="normal"
    required
    fullWidth
    name="password"
    label="Password"
    type="password"
    id="password"
    size="Normal"
    value={formValues.password}
    onChange={handleChange}
   />
   </Grid>
   </Grid>
  <ButtonWrapper>
   <SignupButton onClick={handleSignup}>Sign up</SignupButton>
  </ButtonWrapper>

  <SignInWrapper>
   <SigninLink>Have an account?{" "}
   <span>
   <LoginPage  to="/restaurantLogin">Sign in</LoginPage>
   </span>
   </SigninLink>
</SignInWrapper>
 </Wrapper>
 </Container>
  )
}

export default Signup