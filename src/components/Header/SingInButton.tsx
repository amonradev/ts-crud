import { Button } from "@chakra-ui/button"
import React from "react"

interface Props {
    textButton: string
}

export const SignInButton = (props: Props) => {

    return(
        <Button>
            {props.textButton}
        </Button>
    )
}