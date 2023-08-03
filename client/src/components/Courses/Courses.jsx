import { Button, Container, HStack, Heading, Image, Input, Stack, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ views, title, imageSrc, id, addToPlaylistHandler, creator, description, lectureCount }) => {
    return (
        <VStack className='course' alignItems={['center', 'flex-start']}>
            <Image src={imageSrc} boxSize={"60"} objectFit={"contain"} />
            <Heading textAlign={["center", "left"]} maxW={"200px"} size={"sm"} fontFamily={"sans-serif"} noOfLines={3} children={title} />
            <Text children={description} noOfLines={2} />
            <HStack>
                <Text fontWeight={"bold"} textTransform={"uppercase"} children={"Creator"} />
                <Text fontFamily={"body"} textTransform={"uppercase"} children={creator} />
            </HStack>

            <Heading textAlign={'center'} size={"xs"} children={`Lectures - ${lectureCount}`} textTransform={"uppercase"} />
            <Heading size={"xs"} children={`View - ${views}`} textTransform={"uppercase"} />

            <Stack direction={["column", "row"]} alignItems={"center"}>
                <Link to={`/course/${id}`}>
                    <Button colorScheme={"yellow"}>Watch Now</Button>
                </Link>
                <Button variant={"ghost"} colorScheme={"yellow"} onClick={() => addToPlaylistHandler(id)} >Add toPlaylist</Button>
            </Stack>

        </VStack>
    )
}

const Courses = () => {

    const [keyword, setKeyword] = useState("");
    const [categoty, setCategory] = useState("");

    const addToPlaylistHandler = () => {
        console.log("Added to Playlist");
    }

    const categories = [
        "Web Development", "Full Stack Development", "Artificial Intelligence", "Data Science", "App Development", "Data Structure and Algorithm", "Game Development"
    ]

    return (
        <Container minH={"95vh"} maxW={"container.lg"} paddingY={"8"}>
            <Heading children="All Courses" m={"8"} />
            <Input value={keyword} onChange={(e) => setKeyword(e.target.value)} placeholder='Search a Course...' type='text' focusBorderColor='yellow.500' />
            <HStack overflowX={"auto"} paddingY={"8"} css={{ "&::-webkit-scrollbar": { display: "none" } }}>
                {
                    categories.map((item, index) => (
                        <Button key={index} onClick={() => setCategory(item)} minW={"60"}>
                            <Text children={item} />
                        </Button>
                    ))
                }
            </HStack>

            <Stack direction={["column", "row"]} flex-wrap={"wrap"} justifyContent={["flex-start", "space-evenly"]} alignItems={["center", "flex-start"]}>
                <CourseCard title={"Sample"} description={"Sample"} views={"23"} imageSrc={"Sample1"} id={"sample"} creator={"Sample"} lectureCount={"2"} addToPlaylistHandler={addToPlaylistHandler} />

            </Stack>

        </Container>
    )
}

export default Courses
