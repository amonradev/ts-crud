import { Flex, Spacer, Box, Heading, Button } from "@chakra-ui/react"
import React from "react"
import { SignInButton } from "./SingInButton"
import { Title } from "./Title"

export const Header = () => {

    return (
        <Flex>
            <Box>
                <Title titleText="TS News" />
            </Box>
            <Spacer />
            <Box>
                <SignInButton textButton="Sign In" textButton2="Register" />
            </Box>
        </Flex>
    )
}