import { Flex, Stack } from "@chakra-ui/react"
import React from "react"
import { ImageMkt } from "./ImageMkt"
import { Promo } from "./Promo"
import { TextInfo } from "./TextInfo"

export const BodyComponent = () => {

    return (
        <>
            <Flex  justifyContent="center">
                <Stack>
                    <TextInfo TextInfo="Hey, you know typescript? 🚀" />
                    <Promo />
                    <TextInfo TextInfo="Get acess to all content" />
                    <TextInfo TextInfo="For free" />
                </Stack>
                <ImageMkt />
            </Flex>
        </>
    )
}