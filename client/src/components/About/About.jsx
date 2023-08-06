import { Avatar, Box, Button, Container, HStack, Heading, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from "react-router-dom";
import introVideo from "../../assets/videos/Introduction.mp4"
import { RiSecurePaymentFill } from "react-icons/ri"
// import termsAndCondition from "../../assets/docs/termsAndCondition.js"



const About = () => {
    return (
        <Container maxW={"container.lg"} padding={"16"} boxShadow={"lg"}>
            <Heading children={"About Us"} textAlign={["center", "left"]} />
            <Stack direction={["column", "row"]} spacing={["4", "16"]} padding={"8"} >
                <VStack>
                    <Avatar boxSize={["40", "48"]} src='' />
                    <Text children={"Co-Founder"} opacity={0.7} />
                </VStack>

                <VStack justifyContent={"center"} alignItems={["center", "flex-start"]} >
                    <Heading children={"Shubham Yeram"} size={["md", "xl"]} />
                    <Text textAlign={["center", "left"]} children={"Hii I am a Full Stack Developer. Our mission is to provide quality content at reasonable price."} />
                </VStack>
            </Stack>

            <Stack m={"8"} direction={["column", "row"]} alignItems={"center"} >
                <Text fontFamily={"cursive"} m={"8"} textAlign={["center", "left"]}>
                    We are video streaming platform with some premium courses available only for premium users.
                </Text>

                <Link to={"/subscribe"} >
                    <Button variant={"ghost"} colorScheme={"yellow"}>
                        Checkout Our Plan
                    </Button>
                </Link>
            </Stack>

            <Box>
                <video autoPlay muted controls src={introVideo} controlsList='nodownload nofullscreen noremoteplayback' disablePictureInPicture disableRemotePlayback>
                </video>
            </Box>

            <Box>
                <Heading size={"md"} children="Terms & Condition" textAlign={["center", "left"]} my={"4"} />
                <Box h={"sm"} p={"4"} overflowY={"scroll"}>
                    <Text textAlign={['center', 'left']} letterSpacing={"widest"} fontFamily={"heading"}>{"Terms & Conditions"}</Text>
                    <Heading my={"4"} size={"xs"} children={"Refund only applicable for cancellation within 7 days."} />
                </Box>
            </Box>

            <HStack m={"4"} p={"4"}>
                <RiSecurePaymentFill />
                <Heading size={"xs"} fontFamily={"sans-serif"} textTransform={"uppercase"} children={"Payment is secured by Razorpay"} />
            </HStack>

        </Container>
    )
}

export default About
