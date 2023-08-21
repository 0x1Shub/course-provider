import { Box, Grid, HStack, Heading, Progress, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import Sidebar from '../Sidebar'
import { RiArrowDownLine, RiArrowUpLine } from 'react-icons/ri'
import { DoughnutChart, LineChart } from './Chart'


const Bar = ({ title, value, profit }) => {
    <Box py={'4'} px={['0', '20']}>
        <Heading size={'sm'} children={title} mb={'2'} />
        <HStack w={'full'} alignItems={'center'}>
            <Text children={profit ? "0%" : value} />
            <Progress w={'full'} value={profit ? value : 0} colorScheme='purple' />
            <Text children={`${value > 100 ? value : 100}%`} />
        </HStack>
    </Box>
}


// const Databox = ({ title, qty, qtyPercent, profit }) => {
//     <Box w={['full', '20%']} boxShadow={'-2px 0 10px rgba(107, 70, 193, 0.5)'} p={'8'} borderRadius={'lg'} >
//         <Text children={title} />
//         <HStack spacing={"6"}>
//             <Text fontSize={'2xl'} fontWeight={'bold'} children={qty} />
//             <HStack>
//                 <Text children={`${qtyPercent}%`} />
//                 {profit ? <RiArrowUpLine color='green' /> : <RiArrowDownLine color='red' />}
//             </HStack>
//         </HStack>
//         <Text children={'Since last month'} opacity={0.6} />
//     </Box>
// }

const Dashboard = () => {
    return (
        <Grid minH={"100vh"} templateColumns={["1fr", '5fr 1fr']}>
            <Box boxSizing={"border-box"} py={'16'} px={['4', '0']}>
                <Text textAlign={'center'} opacity={0.5} children={`Last Change was on ${String(new Date()).split("G")[0]}`} />
                <Heading children={"Dashboard"} ml={['0', '16']} mb={'16'} textAlign={['center', 'left']} />
                <Stack direction={['column', 'row']} minH={'24'} justifyContent={'space-evenly'}>
                    {/* <Databox title="Views" qty={123} qtyPercent={30} profit={true} /> */}

                    <Box w={['full', '25%']} boxShadow={'-2px 0 10px rgba(107, 70, 193, 0.5)'} p={'8'} borderRadius={'lg'} >
                        <Text children={"Views"} />
                        <HStack spacing={"6"}>
                            <Text fontSize={'2xl'} fontWeight={'bold'} children={123} />
                            <HStack>
                                <Text children={`${30}%`} />
                                {/* {profit ? <RiArrowUpLine color='green' /> : <RiArrowDownLine color='red' />} */}
                                <RiArrowUpLine color='green' />
                            </HStack>
                        </HStack>
                        <Text children={'Since last month'} opacity={0.6} />
                    </Box>


                    <Box w={['full', '25%']} boxShadow={'-2px 0 10px rgba(107, 70, 193, 0.5)'} p={'8'} borderRadius={'lg'} >
                        <Text children={"Users"} />
                        <HStack spacing={"6"}>
                            <Text fontSize={'2xl'} fontWeight={'bold'} children={23} />
                            <HStack>
                                <Text children={`${78}%`} />
                                {/* {profit ? <RiArrowUpLine color='green' /> : <RiArrowDownLine color='red' />} */}
                                <RiArrowUpLine color='green' />
                            </HStack>
                        </HStack>
                        <Text children={'Since last month'} opacity={0.6} />
                    </Box>


                    <Box w={['full', '25%']} boxShadow={'-2px 0 10px rgba(107, 70, 193, 0.5)'} p={'8'} borderRadius={'lg'} >
                        <Text children={"Subsciption"} />
                        <HStack spacing={"6"}>
                            <Text fontSize={'2xl'} fontWeight={'bold'} children={12} />
                            <HStack>
                                <Text children={`${20}%`} />
                                {/* {profit ? <RiArrowUpLine color='green' /> : <RiArrowDownLine color='red' />} */}
                                <RiArrowDownLine color='red' />
                            </HStack>
                        </HStack>
                        <Text children={'Since last month'} opacity={0.6} />
                    </Box>

                </Stack>

                <Box m={['0', '16']} borderRadius={'lg'} p={['0', '16']} mt={['4', '16']} boxShadow={'-2px 0 10px rgba(107, 70, 193, 0.5)'}>
                    <Heading textAlign={['center', 'left']} size={'md'} children={'Views Graph'} pt={['8', '0']} ml={['0', '16']} />

                    {/* Line graph here */}
                    <LineChart />
                </Box>

                <Grid templateColumns={['1fr', '2fr 1fr']}>
                    <Box p='4'>
                        <Heading textAlign={['center', 'left']} size={'md'} children={"Progess Bar"} my={'8'} ml={['0', '16']} />

                        <Box>
                            {/* <Bar profit=true title="Views" value={30} /> */}
                            {/* <Bar profit=true title="Users" value={78} /> */}
                            {/* <Bar profit=false title="Subscription" value={-20} /> */}

                            <Box py={'4'} px={['0', '20']}>
                                <Heading size={'sm'} children={"Views"} mb={'2'} />
                                <HStack w={'full'} alignItems={'center'}>
                                    <Text children="0%" />
                                    <Progress w={'full'} value={30} colorScheme='purple' />
                                    <Text children={`${100}%`} />
                                </HStack>
                            </Box>

                            <Box py={'4'} px={['0', '20']}>
                                <Heading size={'sm'} children={"Users"} mb={'2'} />
                                <HStack w={'full'} alignItems={'center'}>
                                    <Text children="0%" />
                                    <Progress w={'full'} value={78} colorScheme='purple' />
                                    <Text children={`${100}%`} />
                                </HStack>
                            </Box>

                            <Box py={'4'} px={['0', '20']}>
                                <Heading size={'sm'} children={"Subscription"} mb={'2'} />
                                <HStack w={'full'} alignItems={'center'}>
                                    <Text children="0%" />
                                    <Progress w={'full'} value={20} colorScheme='purple' />
                                    <Text children={`${100}%`} />
                                </HStack>
                            </Box>
                        </Box>
                    </Box>


                    <Box p={['0', '16']} boxSizing={'border-box'} py={'4'}>
                        <Heading textAlign={'center'} size={'md'} mb={'4'} children={'Users'} />

                        <DoughnutChart />

                    </Box>



                </Grid>


            </Box>

            <Sidebar />


        </Grid>
    )
}

export default Dashboard
