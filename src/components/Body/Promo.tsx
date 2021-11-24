import React from "react"
import { Text, Stack } from "@chakra-ui/react"

export const Promo = () => {

    return (
        <Stack spacing="-10px">
        <Text fontSize="35px">Learn more about</Text>
        <Text fontSize="50px" bgGradient="linear(to-l, blue.100, blue.400)" bgClip="text">
            TypeScript
        </Text>
        </Stack>
    )
}