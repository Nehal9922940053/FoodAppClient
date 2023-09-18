import { styled } from '@mui/material'
import { useTypewriter } from 'react-simple-typewriter'

const Text = styled("h1")(({ theme }) => ({
    color: "white",
    fontSize:"8rem",
    [theme.breakpoints.down("lg")]:{
        fontSize:'5rem',
    },
    [theme.breakpoints.down("sm")]:{
        fontSize:'1.8rem',
    },
}))

const TypeWriter = () => {

    const [text] = useTypewriter({
        words: ['Hungry?', "Netflix and Chill?", 'Anime Binge?'],
        loop: {}
    })

    return (
        <Text>&nbsp;{text}</Text>
    )
}

export default TypeWriter
