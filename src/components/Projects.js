import {
  Text,
  Box,
  VStack,
  Flex,
  Heading,
  Button,
  Image,
  Link,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { ChevronDownIcon } from '@chakra-ui/icons';
import subletterImage from '../images/subletter.png';
import sorterImage from '../images/sorter.PNG';
import gradeairImage from '../images/gradeair.PNG';

export default function Projects() {
  const subletter = {
    title: 'Subletter',
    image: subletterImage,
    description:
      'Subletter was my first project making a full-stack social media application, as well as my first exposure to SQL and relational databases. It was incredibly satisfying seeing how the front and backend are both intertwined and separated. To support user CRUD operations, my team and I used Express.js to implement a RESTful API. For the frontend, we used React.js enhanced by the Chakra UI CSS framework. To ensure safety in the database, we encypted sensitive user information with bcrypt while storing it into the database, and used JSON Web Tokens and Cookies to preserve the user state while navigating through the application.',
    link: 'https://github.com/andyh031/subletter',
    technologies:
      'JavaScript, MySQL, React.js, Express.js, Node.js, Chakra UI CSS',
  };

  const sorter = {
    title: 'Sorting Visualizer',
    image: sorterImage,
    description:
      'I deployed a dynamic web application with React.js that visually demonstrates complex sorting algorithms sorting in real time. This was done so that I could supplement my in class learning of data structures and algorithms with a project of my own. To achieve a greater user experience, I made the animation speed customizable and let the user generate random data for sorting. ',
    link: 'https://github.com/andyh031/sort-app',
    technologies: 'JavaScript, React.js, CSS',
  };

  const gradeAir = {
    title: 'GradeAir',
    image: gradeairImage,
    description:
      'GradeAir is a grade tracking application made using Java, where I utilized SOLID principles in Object Oriented Programming to create an efficient application for students to use. I applied test-driven development and wrote numerous unit test with JUnit to achieve 100% code coverage.',
    link: 'https://github.com/andyh031/grade-air',
    technologies: 'Java, JUnit, Java Swing',
  };

  const projects = [subletter, sorter, gradeAir];

  return (
    <>
      <Box
        margin="auto"
        marginBottom="2rem"
        width="clamp(500px, 70vw, 1000px)"
        marginTop="6rem"
      >
        <Box minH="90vh">
          <VStack gap="1.5rem" alignItems="flex-start">
            <Text fontSize="4rem" fontWeight="bold">
              Projects
            </Text>
            <Text color="#0f1b61" fontSize="1.5rem">
              An expression of creativity and innovation.
            </Text>
            <Box textAlign="right" mt="3rem" w="clamp(15px, 25vw, 130px)">
              Scroll <ChevronDownIcon />
            </Box>
            <Box
              alignSelf="flex-start"
              w="clamp(10px, 20vw, 100px)"
              h="clamp(100px, 50vh, 600px)"
              borderStyle="solid"
              borderColor="gray.600"
              borderRightWidth="1px"
            ></Box>
          </VStack>
        </Box>
        <Box>
          {projects.map((project) => (
            <Project {...project} />
          ))}
        </Box>
      </Box>
    </>
  );
}

function Project({ title, image, description, link, technologies }) {
  return (
    <Box p="5rem" borderTop="solid 1px" borderTopColor="gray.300">
      <Flex gap="5rem">
        <Image
          boxShadow="lg"
          width="clamp(250px, 20vw, 400px)"
          height="clamp(250px, 20vw, 40000px)"
          borderRadius="50%"
          objectFit="cover"
          src={image}
        />
        <VStack alignItems="flex-start">
          <Heading>
            {title + ' '}
            <Link size="sm" display="inline" isExternal="true" href={link}>
              <ExternalLinkIcon size="md" />
            </Link>
          </Heading>
          <Text>{description}</Text>
          <Text textAlign="left" as="i">
            Technologies: {technologies}
          </Text>
        </VStack>
      </Flex>
    </Box>
  );
}