import { Flex } from "@chakra-ui/react"
import React from "react"
import { SignInButton } from "./SingInButton"
import { Title } from "./Title"

export const Header = () => {

    return(
        <Flex>
            <Title titleText="TS News" />
            <SignInButton textButton="Sign In" />
        </Flex>
    )
}