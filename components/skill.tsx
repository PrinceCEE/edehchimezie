import { FC } from 'react';
import { Box, Flex, Text, Progress } from '@chakra-ui/react';

interface Props {
  name: string;
  rating: number;
}

const Skill: FC<Props> = ({ name, rating }) => {
  return (
    <Box w="50%">
      <Flex justify="space-between">
        <Text>{name}</Text>
        <Text>{rating}%</Text>
      </Flex>
      <Progress colorScheme="greenModified" size="xs" value={rating} />
    </Box>
  );
};

export default Skill;