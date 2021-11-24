import { Flex, Stack, Spacer, useMediaQuery } from "@chakra-ui/react"
import React from "react"
import { ButtonSub } from "./ButtonSub"
import { ImageMkt } from "./ImageMkt"
import { Promo } from "./Promo"
import { TextInfo } from "./TextInfo"

export const BodyComponent = () => {
    const  [isLargenThan768] = useMediaQuery("(min-width: 768px)")
    let ml:string = ""
    let mt:string = ""
    let mts:string = ""

    if(isLargenThan768){
        ml= "180px"
        mt= ""
        mts= "-25px"
    } else {
        ml="35px"
        mt="120px"
    }
    return (
        <>
            <Flex align="center" ml={ml} mt={mt}>
                <Stack mt={mts}>
                    <TextInfo TextInfo="👋 Hey, you know typescript?" />
                    <Promo />
                    <TextInfo TextInfo="Get acess to all content, for free 🚀" />
                    <ButtonSub TextButton="Discover now" />
                </Stack>
                <Spacer />
                {isLargenThan768 ? <ImageMkt /> : <></>}
            </Flex>
        </>
    )
}