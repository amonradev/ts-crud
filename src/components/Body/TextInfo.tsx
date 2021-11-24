import { Text } from "@chakra-ui/layout"
import React from "react"

interface Props {
    TextInfo: string
}
export const TextInfo = (props: Props) => {

    return(
        <>
            <Text fontSize="18px">
                {props.TextInfo}
            </Text>
        </>
    )
}