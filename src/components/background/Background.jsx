import React from 'react'
import {Box ,styled} from '@mui/material'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { carouselImages } from '../../assets/data/data';


const Container = styled(Box)`
background-color: #FAAF6A;
-webkit-transform: skewY(-3deg);
-ms-transform: skewY(-3deg);
transform: skewY(-3deg);
-webkit-transform-origin: top left;
-ms-transform-origin: top left;
transform-origin: top left;
height: calc(100vh - 117px);
min-height: 95vh;
width:100vw;
position:absolute;
top:0;
left:0;
z-index:-10;
overflow: hidden;
filter:brightness(85%);
& > div{
    & img{
        height:100vh;
        width:100vw;
        object-fit:cover;
    }
}
`;

 const Image = styled('img')`
height: calc(100vh);
min-height:100vh;
  height: 100%;
  z-index:-1;
  background-size: cover;
  background-position: center center;
  width: 100%;
object-fit:cover;
`;













const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};
const Background = () => {
    return (
        <Container>
            <Carousel
                swipeable={false}
                draggable={false}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay
                arrows={false}
                autoPlaySpeed={5000}
                customTransition="all .5"
                transitionDuration={500}
            >
                {
                    carouselImages.map((image, index) => (
                        <Image src={image.img} alt="images" key={index} />
                    ))
                }

            </Carousel>
        </Container>
    )
}

export default Background