import React from "react";
import {
    Container,
    Box,
    Text,
    Tabs,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
} from "@chakra-ui/react";
import Login from "../components/Authentication/Login";
import Register from "../components/Authentication/Register";

const HomePage = () => {
    return (
        <Container maxW={"2xl"} centerContent>
            <Box
                d="flex"
                justifyContent={"center"}
                p="3"
                bg={"white"}
                w="100%"
                m={"40px 0 15px 0"}
                borderRadius="lg"
                borderWidth={"1px"}
            >
                <Text fontSize={"4xl"} color="black">
                    ChatApp React
                </Text>
            </Box>
            <Box bg={"white"} w="100%" p={4} borderRadius="lg" color={"black"} borderWidth={"1px"}>
                <Tabs variant={"soft-rounded"} colorScheme="green">
                    <TabList mb={"1en"}>
                        <Tab width={"50%"}>Iniciar Sesion</Tab>
                        <Tab width={"50%"}>Registro</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <Login />
                        </TabPanel>
                        <TabPanel>
                            <Register />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </Container>
    );
};

export default HomePage;
