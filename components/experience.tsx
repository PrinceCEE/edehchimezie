import { Box, Text } from '@chakra-ui/react';
import { FC } from 'react';

interface Props {
  timeline: string;
  companyName: string;
  role: string;
  description: string;
}

const Experience: FC<Props> = ({
  timeline,
  companyName,
  role,
  description,
}) => {
  return (
    <Box
      boxShadow="0 1px 6px rgb(0 0 0 / 12%), 0 1px 4px rgb(0 0 0 / 24%)"
      borderTop="5px solid #07cb79"
      textAlign="center"
      p="8"
      mb="8"
    >
      <Text
        fontWeight="700"
        fontSize="16px"
        lineHeight="1"
        mb="15px"
        color="greenModified.100"
      >{timeline}</Text>
      <Text
        fontFamily="Open Sans"
        fontSize="22px"
        color="##414141"
        fontWeight="400"
        lineHeight="1.1"
        marginBottom="20px"
        textTransform="uppercase"
      >{companyName}</Text>
      <Text
        color="#878787"
        fontSize="13px"
        fontWeight="400"
        lineHeight="1.1"
        textTransform="uppercase"
        marginBottom="30px"
      >{role}</Text>
      <Text
        color="#757575"
        lineHeight="1.5"
        mb="25px"
        fontSize="100%"
        verticalAlign="baseline"
      >
        {description}
      </Text>
    </Box>
  );
};

export default Experience;