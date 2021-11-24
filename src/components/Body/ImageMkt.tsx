import { Image } from "@chakra-ui/image"
import { Flex, Spacer } from "@chakra-ui/react"
import { Box } from "@chakra-ui/layout"
import React from "react"

export const ImageMkt = () => {

    return (
        <>
            <Box>
                <Flex justify="flex-end" mr="78" mt="-8">
                    <Image src="https://www.agriya.com/themes/agriya/assets/images/common/reactjs-system.png" boxSize="xl" height="500px" width="600px" border="0" />
                </Flex>
            </Box>
        </>
    )
}