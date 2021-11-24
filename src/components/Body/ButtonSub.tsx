import { Button } from "@chakra-ui/button"
import React from "react"

interface Props {
    TextButton: string
}

export const ButtonSub = (props: Props) => {
    return (
        <>
            <Button variant="solid" bgColor="blue.400" colorScheme="blue">
                {props.TextButton}
            </Button>
        </>
    )
}