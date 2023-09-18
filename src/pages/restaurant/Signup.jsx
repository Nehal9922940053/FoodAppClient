import React from 'react'
import {Box, Button, TextField, Link, Typography,Grid, styled} from '@mui/material'
import SignupBg from '../../assets/images/Bglogin.webp'
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


const Signup = () => {
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
    name="Restaurant Name"
    autoComplete="restaurant name"
    size="Normal"
    autoFocus
      />
    </Grid>
    <Grid item xs={12} sm={6}>
    <TextField
    margin="normal"
    required
    fullWidth
    id="restaurant address"
    label="Restaurant Address"
    name="Restaurant address"
    autoComplete="restaurant address"
    size="Normal"
    autoFocus
    />
    </Grid>
    <Grid item xs={12} sm={6}>
    <TextField
    margin="small"
    required
    fullWidth
    id="opening and closing time"
    label="Opening And Closing Time"
    name="Opening And Closing Time"
    autoComplete="opening and closing time"
    size="Normal"
    autoFocus
    />
    </Grid>  
    
    <Grid item xs={12} sm={6}>
    <TextField
   margin="small"
   required
   fullWidth
   id="phoneNumber"
   label="Phone Number"
   name="phone Number"
   autoComplete="Phone Number"
   size="Normal"
   autoFocus
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
    autoComplete="email"
    size="Normal"
    autoFocus
   />
    </Grid>
    <Grid item xs={12} sm={12}>
   <TextField
    margin="medium"
    required
    fullWidth
    name="password"
    label="Password"
    type="password"
    id="password"
    autoComplete="current-password"
    size="Normal"
   />
   </Grid>
   </Grid>
  <ButtonWrapper>
   <SignupButton onClick={""}>Sign up</SignupButton>
  </ButtonWrapper>

  <SignInWrapper>
   <SigninLink>Have an account?{" "}
   <span>
   <Link  to="/signup">Sign in</Link>
   </span>
   </SigninLink>
</SignInWrapper>
 </Wrapper>
 </Container>
  )
}

export default Signup