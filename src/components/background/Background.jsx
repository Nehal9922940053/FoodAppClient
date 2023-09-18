import React from 'react'
import MainBg from '../../assets/images/bg.jpg'
import {Box ,styled} from '@mui/material'

//styled Components

const Container = styled(Box)`
height:100vh;
width:100vw;
position:absolute;
top:0;
left:0;
z-index:-10;
filter:brightness(35%);
& > div{
    & img{
        height:100vh;
        width:100vw;
        object-fit:cover;
    }
}
`;



 const Image = styled(Box)`
    width:500px;
    height:500px;
 `;




const Background = () => {
  return (
    <Container>
    <Image src={MainBg} alt='background'/>
        
    </Container>
  )
}

export default Background