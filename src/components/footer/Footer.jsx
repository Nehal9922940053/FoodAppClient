import React from 'react'
import {Divider, Grid, Box, styled } from '@mui/material'
import logo from "../../assets/images/logo.png"
import { GalaxyFoodie, footerAbout, forEnterprises, forRestaurants, learnMore } from '../../assets/data/data'
import { Link } from 'react-router-dom'

//styled components
const Divide = styled(Divider)(({theme})=>({
    background:"#fff",
}))


const FooterHeading = styled(Box)(({theme})=>({
    color:"#fff",
    fontWeight:"bolder",
}))

const Container = styled(Box)(({theme})=>({
    display:"flex",
    flexDirection:"column",
    gap:"2rem",
    padding:"2rem 1.5rem",
    // background:"rgb(93, 118, 159)",
    backgroundImage: "linear-gradient( 111.4deg,  rgba(7,7,9,1) 6.5%, rgba(27,24,113,1) 93.2% )",
    "& > small":{
        color:"#fff",
        textAlign:"center",
    }
}))


const Img = styled(Box)(({theme})=>({
    height:"100px",
    width:"100px",
    borderRadius:"50%",
    "& > img":{
        width:"100px",
    },
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    // background:"rgb(202, 213, 223)"
    background:"#fff",
}))

const ContentContainer = styled(Box)(({theme})=>({
    display:"flex",
    gap:"3rem",
    flexWrap:"wrap"
}))


const Content = styled(Box)(({theme})=>({
    display:"flex",
    gap:"1rem",
    flexDirection:"column",
    flex:1,
    padding:"0.5rem",
    "& > a":{
        // color:"rgb(202, 213, 223)"
        color:"#fff"
    }
}))





const Footer = () => {
    return (
        <Container>
            {/* logo start  */}
            <Img>
                <img src={logo} alt="logo" />
            </Img>
            {/* logo end*/}

            <Grid container>
                <Grid item xs={12}>
                    <ContentContainer>

                        {/* about dine start  */}
                        <Content>
                            <FooterHeading>ABOUT GalaxyFoodie</FooterHeading>
                            {
                                footerAbout.map((item) => (
                                    <Link key={item.id}>{item.name}</Link>
                                ))
                            }
                        </Content>
                        {/* about dine end */}

                        {/* dine verse start  */}
                        <Content>
                            <FooterHeading>GalaxyFoodie</FooterHeading>
                            {
                                GalaxyFoodie.map((item) => (
                                    <Link key={item.id} >{item.name}</Link>
                                ))
                            }
                        </Content>
                        {/* dine verse end */}

                        {/* restaurants start  */}
                        <Content>
                            <FooterHeading>RESTAURANTS</FooterHeading>
                            {
                                forRestaurants.map((item) => (
                                    <Link key={item.id} >{item.name}</Link>
                                ))
                            }
                        </Content>
                        {/* restaurants end */}

                        {/* learn more start  */}
                        <Content>
                            <FooterHeading>LEARN MORE</FooterHeading>
                            {
                                learnMore.map((item) => (
                                    <Link key={item.id} >{item.name}</Link>
                                ))
                            }
                        </Content>
                        {/* learn more end */}

                        {/* enterprises start  */}
                        <Content>
                            <FooterHeading>ENTERPRISES</FooterHeading>
                            {
                                forEnterprises.map((item) => (
                                    <Link key={item.id}>{item.name}</Link>
                                ))
                            }
                        </Content>
                        {/* enterprises end */}
                    </ContentContainer>
                </Grid>
            </Grid>
            <Divide/>
            
            <small>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 1997-2023 © GalaxyFoodie™ Ltd. All rights reserved.</small>
        </Container>
    )
}

export default Footer
