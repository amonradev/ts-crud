import { Text } from "@chakra-ui/layout"
import React from "react"

interface Props {
    titleText: string
}

export const Title = (props: Props) => {
    return(
        <Text bgGradient="linear(to-l, blue.100, blue.400)" bgClip="text" fontSize="40px" marginLeft="10px">
            {props.titleText}
        </Text>
    )
}