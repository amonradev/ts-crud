import { Button } from "@chakra-ui/react"
import React from "react"

interface Props {
    textButton: string,
    textButton2: string,
}

export const SignInButton = (props: Props) => {

    return(
        <>
            <Button mr="1" mt="3" borderRadius="6" variant="ghost" colorScheme="blue">
                {props.textButton}
            </Button>
            <Button mr="1" mt="3" borderRadius="6" variant="outline" colorScheme="blue">
                {props.textButton2}
            </Button>
        </>
    )
}