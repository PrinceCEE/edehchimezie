/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import {
  Box,
  Flex,
  Text,
  List,
  ListItem,
  Heading,
  Progress,
  HStack,
  Input,
  FormControl,
  Button,
  FormErrorMessage,
} from '@chakra-ui/react';
import { Formik, Field } from 'formik';
import ProfileCard from '../components/profileCard';
import Skill from '../components/skill';
import axios from 'axios';
import Experience from '../components/experience';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Chimezie Edeh</title>
      </Head>
      <Box className={styles.header}>
        <Box>
          <Text>Chimezie Edeh</Text>
        </Box>
        <Box className={styles.headerBg}></Box>
      </Box>
      <Box className={styles.content} mt="200px">
        <Box className={styles.container}>
          <Box bgColor="#fff">
            <Flex flexDirection="column">
              <Box
                bgColor="#fff"
                boxShadow="0 1px 6px rgb(0 0 0 / 12%), 0 1px 4px rgb(0 0 0 / 24%)"
                p="0"
              >
                <Flex flexDir="column">
                  <ProfileCard />
                </Flex>
              </Box>
              <Box
                color="#757575"
                fontSize="20px"
                fontWeight="300"
                lineHeight="1.8"
                textAlign="center"
                marginTop="30px"
                paddingLeft="5%"
                paddingRight="5%"
                mt="20"
              >
                <Box>
                  <Text textAlign="center">
                    Hello! I'm Chimezie Edeh, a software developer based in Nigeria. I have well versed experience in web development and dabbles into mobile application development with Flutter. I have worked with many programming languages, but mostly work with JavaScript, Typescript, Dart, and Golang. I am open to lay my hands on many other languages depending on the project at hand. I also have experience working with some frameworks like NestJs, ExpressJs and Flutter.
                  </Text>
                </Box>
              </Box>
              <Box mt="20" mb="20">
                <Heading textAlign="center" mb="4">Professional Skills</Heading>
                <Box
                  bgColor="#fff"
                  boxShadow="0 1px 6px rgb(0 0 0 / 12%), 0 1px 4px rgb(0 0 0 / 24%)"
                  p="12"
                >
                  <List spacing={8}>
                    <ListItem>
                      <HStack spacing="24px">
                        <Skill name="JS & Typescript" rating={85} />
                        <Skill name="Html & CSS" rating={75} />
                      </HStack>
                    </ListItem>
                    <ListItem>
                      <HStack spacing="24px">
                        <Skill name="MongoDB" rating={80} />
                        <Skill name="PostreSQL" rating={50} />
                      </HStack>
                    </ListItem>
                    <ListItem>
                      <HStack spacing="24px">
                        <Skill name="NodeJs" rating={80} />
                        <Skill name="Golang" rating={50} />
                      </HStack>
                    </ListItem>
                    <ListItem>
                      <HStack spacing="24px">
                        <Skill name="Redis" rating={75} />
                        <Skill name="Flutter" rating={65} />
                      </HStack>
                    </ListItem>
                  </List>
                </Box>
              </Box>
              <Box mb="20">
                <Heading textAlign="center" mb="4">Work Experience</Heading>
                <Box
                  bgColor="#fff"
                  position="relative"
                  mt="8"
                >
                  <Box
                    top="80px"
                    h="666px"
                    bgColor="greenModified.100"
                    w={{ lg: "4px" }}
                    opacity="0.2"
                    ml="-2px"
                    position="absolute"
                    left="50%"
                  ></Box>
                  <Box justify="space-between" display={{ lg: "flex" }}>
                    <Box w={{ lg: "45%" }}>
                      <Experience 
                        timeline="April, 2020 - May, 2020"
                        companyName="DestinClothing"
                        role="Full stack developer"
                        description="Designed and built an e-commerce website for the clothing line. Conducted the requirements and design of the Company's website and laid out the project architecture and implemented it"
                      />
                      <Experience
                        timeline="Nov, 2020 - Mar, 2021"
                        companyName="Skytrade NG"
                        role="Fullstack mobile app developer"
                        description="Developed the API for the company’s mobile app, developed the users' mobile app for the company and also developed the admin’s mobile app for the company"
                      />
                    </Box>
                    <Box
                      w={{ lg: "45%" }}
                      pt={{ lg: "16" }}
                      ml={{ lg: "10%" }}
                    >
                      <Experience
                        timeline="May, 2020 - June, 2020"
                        companyName="Teelhair"
                        role="Fullstack developer"
                        description="Designed and built an e-commerce website for the clothing line. Conducted the requirements and design of the Company's website and laid out the project architecture and implemented it"
                      />
                      <Experience
                        timeline="Sept, 2020 - Aug, 2021"
                        companyName="Convre Media"
                        role="Lead Backend Engineer"
                        description="Conducted the requirements and design of the Convre Media APIs. Laid out the project architecture and implemented it while being in a team of wonderful people. Managed the team, dividing up roles to enable a smooth development phase. Used languages like Javascript and Typescript, with Nodejs to implement the API, while I used Mongodb as the primary database and Redis as the cache memory."
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Home
