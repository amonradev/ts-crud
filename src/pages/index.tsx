import type { NextPage } from 'next'
import { Flex, Text, Box } from "@chakra-ui/react"
import { ImageMkt } from '../components/Body/ImageMkt'
import { Header } from '../components/Header/Header'
import { TextInfo } from '../components/Body/TextInfo'
import { Promo } from '../components/Body/Promo'
import { BodyComponent } from '../components/Body/BodyComponent'

const Home: NextPage = () => {
  return (
    <>
    <Box bgColor="purple.900" height="70px" bgGradient="linear(to-r, purple.900, purple.600)">
    <Header />
    </Box>
      <BodyComponent />
    </>
  )
}

export default Home
