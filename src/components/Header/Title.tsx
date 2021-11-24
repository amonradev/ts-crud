import { Text } from "@chakra-ui/layout"
import React from "react"

interface Props {
    titleText: string
}

export const Title = (props: Props) => {
    return(
        <Text>
            {props.titleText}
        </Text>
    )
}