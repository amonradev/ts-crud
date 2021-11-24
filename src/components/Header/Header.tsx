import { Flex, Spacer } from "@chakra-ui/react"
import React from "react"
import { SignInButton } from "./SingInButton"
import { Title } from "./Title"

export const Header = () => {

    return(
        <Flex>
            <Title titleText="TS News" />
            <Spacer />
            <SignInButton textButton="Sign In" textButton2="Register" />
        </Flex>
    )
}