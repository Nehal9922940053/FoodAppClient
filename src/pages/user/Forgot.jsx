import React,{useState} from 'react'
import { useNavigate} from "react-router-dom"
import {Box, Button, TextField, Typography, styled}  from "@mui/material"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { changeUserPassword } from '../../services/api';
import {toast} from "react-toastify";



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
  // filter:brightness(70%);

`;


const Image = styled('img')({
  backgroundSize: 'cover', // You can apply other background properties as needed
  width: '100%',
  height: '100%',
 
});



const Wrapper = styled(Box)`
  max-width:380px;
  background-color:#FFF;
  // opacity: 0.8;
  border-radius: 10px;
  backdrop-filter: blur(15px);
  border: 2px solid rgba(255,255,255,0.1);
  box-shadow: 0 0 40px rgba(8,7,16,0.6);
  padding: 50px 35px;

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

const SubmitButton = styled(Button)`
  
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










const initialValues = {
    email:"",
    password:"",
    confirmPassword:""
}


const Forgot = () => {

    const navigate = useNavigate()
    const [formValues,setFormValues] = useState(initialValues);

    const handleChange = (e) => {
        setFormValues({...formValues,[e.target.name]: e.target.value})
    }

    const changePassword = async (e) => {
        e.preventDefault();
        const {data} = await changeUserPassword(formValues);
        console.log(data);
        if(data){
            if(data.error){
                toast.error(data.error);
            } else if(data.info){
                toast.info(data.info);
        } else {
            toast.success(data.success);
            navigate("/login")
        }
    }else{
        toast.error("Something went wrong");
    }
}

  return (
    <Container>
    <form>
    <Wrapper sx={{}}>
    <UserIcon>
    <UserAccountIcon/>
    </UserIcon>
    <Text variant="h5" gutterBottom>
    Change User Password
  </Text>
     <TextField
     onChange={handleChange}
     value={formValues.email}
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
    onChange={handleChange}
    value={formValues.password}
     margin="normal"
     required
     fullWidth
     name="password"
     label="Password"
     type="password"
     id="password"
    />
    <TextField
    onChange={handleChange}
    value={formValues.confirmPassword}
     margin="normal"
     required
     fullWidth
     name="confirmPassword"
     label="Confirm Password"
     type="Confirm password"
     id="Confirm password"
    />
    <ButtonWrapper>
    <SubmitButton onClick={changePassword}>Submit</SubmitButton>
   </ButtonWrapper>
  </Wrapper>
  </form> 
  <Bg>
  <Image src="https://images.unsplash.com/photo-1613067532651-7075a620c900?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt=''/>{ /**/}
  </Bg>
    </Container>
  )
}

export default Forgot