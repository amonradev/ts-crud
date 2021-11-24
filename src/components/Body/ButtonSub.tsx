import { Button } from "@chakra-ui/button"
import React from "react"

interface Props {
    TextButton: string
}

export const ButtonSub = (props: Props) => {
    return (
        <>
            <Button>
                {props.TextButton}
            </Button>
        </>
    )
}