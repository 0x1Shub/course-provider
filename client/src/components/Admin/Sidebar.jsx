import { Button, VStack } from '@chakra-ui/react'
import React from 'react'
import { RiAddCircleFill, RiDashboardFill, RiEyeFill, RiUser3Fill } from 'react-icons/ri'
import { Link, useLocation } from 'react-router-dom'

const Sidebar = () => {

    const location = useLocation();

    return (
        <VStack spacing={'8'} p={'16'} boxShadow={'-2px 0 10px rgba(107, 70, 193, 0.5)'}>

            <Link to={'/admin/dashboard'}>
                <Button colorScheme={location.pathname === "/admin/dashboard" ? "purple" : ""} fontSize={'larger'} variant={'ghost'} >
                    <RiDashboardFill style={{ margin: '4px' }} />
                    Dashboard
                </Button>
            </Link>

            <Link to={'/admin/createcourse'}>
                <Button colorScheme={location.pathname === "/admin/createcourse" ? "purple" : ""} fontSize={'larger'} variant={'ghost'}>
                    <RiAddCircleFill style={{ margin: '4px' }} />
                    Create Course
                </Button>
            </Link>

            <Link to={'/admin/courses'}>
                <Button colorScheme={location.pathname === "/admin/courses" ? "purple" : ""} fontSize={'larger'} variant={'ghost'}>
                    <RiEyeFill style={{ margin: '4px' }} />
                    Courses
                </Button>
            </Link>

            <Link to={'/admin/users'}>
                <Button colorScheme={location.pathname === "/admin/users" ? "purple" : ""} fontSize={'larger'} variant={'ghost'}>
                    <RiUser3Fill style={{ margin: '4px' }} />
                    Users
                </Button>
            </Link>

        </VStack>
    )
}

export default Sidebar;


// function Linkbutton({ url, Icon, text }) {
//     return (
//         <Link to={`/admin/${url}`}>
//             <Button colorScheme={'purple'} fontSize={'larger'} variant={'ghost'}>
//                 <Icon style={{ margin: '4px' }} />
//                 {text}
//             </Button>
//         </Link>

//     );
// }
