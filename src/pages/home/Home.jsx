import { Box ,styled} from '@mui/material'
import React, { useEffect } from 'react'
import {Background, Footer, Search,Navbar} from '../../components/index'
import { useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import { useGlobalContext } from '../../context/context'
import {verifyRestaurant, verifyUser} from '../../services/api';
import {toast} from 'react-toastify';

//styled Components

const Container = styled(Box)`
    min-height:100vh;
    overflow: hidden;
`;


const BgContainer = styled(Box)`
    position:relative;
    height:100vh;
    width:100vw;
    display:flex;
    gap:1rem;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    "& > img" :{
        width:50%;
        // filter:drop-shadow(4px 4px 3px #FFF);
    }

`;

const Bottom = styled(Box)`


`;

const Tagline = styled('h1')`
font-weight:bolder;
font-size:50px;
font-family: "Lucida Handwriting", cursive;
font-size: 50px;
color:orange;


`;


const Home = () => {

    const navigate = useNavigate()
    const [cookies] = useCookies(["access_token"])
    const { role } = useGlobalContext();


  useEffect(() => {
        const user = async () => {
            await verifyUser()
        }
        user()
    }, [cookies])

    useEffect(() => {
        const restaurant = async () => {
            const response = await verifyRestaurant(); 
            const {data} = response || {};
            if(data && data.success) {
                toast.success(data.success);
                navigate("/dashboard");
            }
        }
        restaurant();
    }, [cookies,navigate])

    

  return (
    <>
        <Container>
            <BgContainer>
            <Navbar/>
                <Background/>
   <Tagline>Gives A Meal that's Galaxy Foodies Appeal</Tagline>
                {
                    role === "admin" ? null : <Search/>
                }

                <Bottom></Bottom>
             
            </BgContainer>
            <Footer/>
        </Container>
    </>
  )
}

export default Home
