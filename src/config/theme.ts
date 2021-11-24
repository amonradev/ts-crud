import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
    fonts: {
        heading: 'Roboto',
        body: 'Roboto'
    },
    styles: {
        global: {
            body: {
                // bgGradient: "linear(to-r, purple.900, purple.600)",
                // bg: 'purple.900',
                bg: 'gray.900',
                color: 'gray.50'
            },
            option: {
                color: 'gray.700'
            }
        }
    }
})