import { Box ,styled} from '@mui/material'
import React, { useEffect } from 'react'
import {Background, Footer, Search, TypeWriter} from '../../components/index'
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
        filter:drop-shadow(4px 4px 3px #FFF);
    }

`;

const Bottom = styled(Box)`


`;






const Home = () => {

    const navigate = useNavigate()
    const [cookies] = useCookies(["access_token"])
    const {role} = useGlobalContext();

    useEffect(() => {
        const user = async () =>{
            await verifyUser()
        }
        user();
    }, [cookies])

    useEffect(() => {
        const restaurant = async () =>{
            const {data} = await verifyRestaurant()
            if(data.success){
                toast.success(data.success);
                navigate("/dashboard")
            }
        }
        restaurant();
    }, [cookies])


  return (
    <div>
        <Container>
            <BgContainer>
                <Background/>

                <TypeWriter/>

                {
                    role =="admin"  ? null : <Search/>
                }

                <Bottom></Bottom>

            </BgContainer>
            <Footer/>
        </Container>
    </div>
  )
}

export default Home