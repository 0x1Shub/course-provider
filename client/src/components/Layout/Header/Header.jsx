import React from 'react';
import { ColorModeSwitcher } from "../../../ColorModeSwitcher";
import { Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, HStack, VStack, useDisclosure } from '@chakra-ui/react';
import { RiDashboardFill, RiLogoutBoxLine, RiMenu5Fill } from "react-icons/ri";
import { Link } from 'react-router-dom';

const Header = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();

    const isAuthenticated = true;
    const user = {
        role: "admin"
    }

    const logoutHandler = () => {
        console.log("Log Out")
    }

    return (
        <>
            <ColorModeSwitcher />

            <Button onClick={onOpen} colorScheme={"yellow"} width={"12"} height={"12"} rounded={"full"} position={"fixed"} top={"6"} left={"6"}>
                <RiMenu5Fill />
            </Button>

            <Drawer placement='left' isOpen={isOpen} onClose={onClose}>
                <DrawerOverlay backdropFilter={"blur(3px)"} />
                <DrawerContent>
                    <DrawerHeader borderBottomWidth={"1px"}>COURSE PROVIDER</DrawerHeader>
                    <DrawerBody>
                        <VStack spacing={"4"} alignItems={"flex-start"}>
                            <Link to={'/'}>
                                <Button variant={"ghost"}>Home</Button>
                            </Link>
                            <Link to={'/courses'}>
                                <Button variant={"ghost"}>Browse All Courses</Button>
                            </Link>
                            <Link to={'/request'}>
                                <Button variant={"ghost"}>Request a Course</Button>
                            </Link>
                            <Link to={'/contact'}>
                                <Button variant={"ghost"}>Contact Us</Button>
                            </Link>
                            <Link to={'/about'}>
                                <Button variant={"ghost"}>About</Button>
                            </Link>

                            <HStack justifyContent={"space-evenly"} position={"absolute"} bottom={"2rem"} width={"80%"}>
                                {isAuthenticated ? (<>
                                    <VStack>
                                        <HStack>
                                            <Link to={"/profile"}>
                                                <Button variant={"ghost"} colorScheme={"yellow"}>Profile</Button>
                                            </Link>
                                            <Button variant={"ghost"} onClick={logoutHandler} >
                                                <RiLogoutBoxLine />
                                                Log Out
                                            </Button>
                                        </HStack>
                                        {user && user.role === "admin" && <Link to={"/admin/dashboard"}>
                                            <Button colorScheme={"purple"} variant={"ghost"}>
                                                <RiDashboardFill style={{ margin: "4px" }} />Dashboard
                                            </Button>
                                        </Link>}
                                    </VStack>

                                </>) : (<>
                                    <Link to={"/login"}>
                                        <Button colorScheme={"yellow"}>Login</Button>
                                    </Link>

                                    <p>OR</p>

                                    <Link to={"/register"}>
                                        <Button colorScheme={"yellow"}>Sign Up</Button>
                                    </Link>
                                </>)}
                            </HStack>
                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default Header
