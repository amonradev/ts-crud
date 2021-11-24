import { Button } from "@chakra-ui/button"
import React from "react"

interface Props {
    textButton: string,
    textButton2: string,
}

export const SignInButton = (props: Props) => {

    return(
        <>
            <Button mr="3" mt="3" borderRadius="6" variant="ghost" colorScheme="blue" _hover={{ bg: "#ebedf0" }}>
                {props.textButton}
            </Button>
            <Button mr="6" mt="3" borderRadius="6" variant="outline" colorScheme="blue">
                {props.textButton2}
            </Button>
        </>
    )
}