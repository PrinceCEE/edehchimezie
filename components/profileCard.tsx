/* eslint-disable react/no-unescaped-entities */
import {
  Box,
  Flex,
  Text,
  ListItem,
  List,
  Tag,
  Image,
  TagLabel,
  Link,
  Icon,
} from '@chakra-ui/react';
import styles from '../styles/Home.module.css';
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineLinkedin,
  AiOutlineGithub,
} from 'react-icons/ai'

const ProfileCard = () => {
  return (
    <>
      <Box
        pt={{ lg: "14" }}
        px={{ lg: "12" }}
        pb={{ lg: "8" }}
      >
        <Box justify="space-between" display={{ md: "flex" }}>
          <Box mr="4" w={{ base: "100%", lg: "35%" }} flexShrink={0}>
            <Image
              w="100%"
              src="/images/mypic.jpg"
              alt="Chimezie's picture"
            />
          </Box>
          <Box pl="8">
            <Flex flexDir="column">
              <Tag
                size="lg"
                backgroundColor="#07cb79"
                borderRadius="3px"
                boxSize="max-content"
                mb="2"
                mt={{ base: "2" }}
              >
                <TagLabel color="#fff" fontWeight="bold">Hello</TagLabel>
              </Tag>
              <Box pb="4" borderBottom="solid 1px #dedede">
                <Text
                  fontSize="36px"
                  lineHeight="1.1"
                  fontWeight="700"
                  mb="2"
                >
                  <span className={styles.textProfile}>I'm</span> Chimezie Edeh
                </Text>
                <Text fontSize="18px" fontWeight="400" lineHeight="1.1">Software Developer</Text>
              </Box>
              <List mt="4" spacing={{ base: "3", lg: "6" }}>
                <ListItem>
                  <Box display={{ lg: "flex" }}>
                    <Text fontWeight="700" fontSize="12px" width="120px" textTransform="uppercase">Address</Text>
                    <Text fontSize="15px" fontWeight="400" color="#9da0a7" lineHeight="20px">3/4 Major Salawu, Ibadan, Oyo State, Nigeria</Text>
                  </Box>
                </ListItem>
                <ListItem>
                  <Box display={{ lg: "flex" }}>
                    <Text fontWeight="700" fontSize="12px" width="120px" textTransform="uppercase">Email</Text>
                    <Text fontSize="15px" fontWeight="400" color="#9da0a7" lineHeight="20px">princecee15@gmail.com</Text>
                  </Box>
                </ListItem>
                <ListItem>
                  <Box display={{ lg: "flex" }}>
                    <Text fontWeight="700" fontSize="12px" width="120px" textTransform="uppercase">Phone</Text>
                    <Text fontSize="15px" fontWeight="400" color="#9da0a7" lineHeight="20px">(+234) 9135714762</Text>
                  </Box>
                </ListItem>
                <ListItem>
                  <Box display={{ lg: "flex" }}>
                    <Text fontWeight="700" fontSize="12px" width="120px" textTransform="uppercase">Education</Text>
                    <Text fontSize="15px" fontWeight="400" color="#9da0a7" lineHeight="20px">Computer Science, University of Ibadan</Text>
                  </Box>
                </ListItem>
              </List>
            </Flex>
          </Box>
        </Box>
      </Box>
      <Box bgColor="#07cb79" mt={{ base: "4" }}>
        <Flex alignItems="center" justify="space-evenly" px="10" py="6">
          <Link href="https://www.github.com/princecee">
            <Icon as={AiOutlineGithub} color="#fff" h={6} w={6}></Icon>
          </Link>
          <Link href="https://www.linkedin/in/chimezie-edeh">
            <Icon as={AiOutlineLinkedin} color="#fff" h={6} w={6}></Icon>
          </Link>
          <Link href="https://www.twitter.com/princecee">
            <Icon as={AiOutlineTwitter} color="#fff" h={6} w={6}></Icon>
          </Link>
          <Link href="https://instagram.com/princecee1">
            <Icon as={AiOutlineInstagram} color="#fff" h={6} w={6}></Icon>
          </Link>
        </Flex>
      </Box>
    </>
  );
};

export default ProfileCard;