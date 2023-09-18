import React from 'react'
import { Divider, Grid, Box, styled } from '@mui/material'
import logo from "../../assets/images/logo.png"
import { dineVerse, footerAbout, forEnterprises, forRestaurants, learnMore } from '../../assets/data/data'
import { Link } from 'react-router-dom'

//styled components

const Container = styled(Box)(({theme})=>({
    display:"flex",
    flexDirection:"column",
    gap:"2rem",
    padding:"2rem 1.5rem",
    background:"rgb(93, 118, 159)",
    "& > small":{
        color:"lightgray",
        textAlign:"center"
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
    background:"rgb(202, 213, 223)"
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
        color:"rgb(202, 213, 223)"
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
                            <h3>ABOUT DINE</h3>
                            {
                                footerAbout.map((item) => (
                                    <Link key={item.id}>{item.name}</Link>
                                ))
                            }
                        </Content>
                        {/* about dine end */}

                        {/* dine verse start  */}
                        <Content>
                            <h3>DINE VERSE</h3>
                            {
                                dineVerse.map((item) => (
                                    <Link key={item.id} >{item.name}</Link>
                                ))
                            }
                        </Content>
                        {/* dine verse end */}

                        {/* restaurants start  */}
                        <Content>
                            <h3>RESTAURANTS</h3>
                            {
                                forRestaurants.map((item) => (
                                    <Link key={item.id} >{item.name}</Link>
                                ))
                            }
                        </Content>
                        {/* restaurants end */}

                        {/* learn more start  */}
                        <Content>
                            <h3>LEARN MORE</h3>
                            {
                                learnMore.map((item) => (
                                    <Link key={item.id} >{item.name}</Link>
                                ))
                            }
                        </Content>
                        {/* learn more end */}

                        {/* enterprises start  */}
                        <Content>
                            <h3>ENTERPRISES</h3>
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
            <Divider />
            
            <small>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2023 © Dine™ Ltd. All rights reserved.</small>
        </Container>
    )
}

export default Footer
