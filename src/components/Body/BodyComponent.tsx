import { Flex, Stack, Spacer } from "@chakra-ui/react"
import React from "react"
import { ButtonSub } from "./ButtonSub"
import { ImageMkt } from "./ImageMkt"
import { Promo } from "./Promo"
import { TextInfo } from "./TextInfo"

export const BodyComponent = () => {

    return (
        <>
            <Flex align="left" >
                <Stack ml={60} mt={20} spacing="20px">
                    <TextInfo TextInfo="👋 Hey, you know typescript?" />
                    <Promo />
                    <TextInfo TextInfo="Get acess to all content, for free 🚀" />
                    <ButtonSub TextButton="Discover now" />
                </Stack>
                <Spacer />
                <ImageMkt />
            </Flex>
        </>
    )
}