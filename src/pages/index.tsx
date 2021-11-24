import type { NextPage } from 'next'
import { Flex, Text, Box, Container } from "@chakra-ui/react"
import { ImageMkt } from '../components/Body/ImageMkt'
import { Header } from '../components/Header/Header'
import { TextInfo } from '../components/Body/TextInfo'
import { Promo } from '../components/Body/Promo'
import { BodyComponent } from '../components/Body/BodyComponent'

const Home: NextPage = () => {
  return (
    <Container maxW="100%">
    <Box bgColor="gray.900" maxW="100%" height="70px" borderBottom="4px" borderColor="gray.800">
    <Header />
    </Box>
      <BodyComponent />
    </Container>
  )
}

export default Home
