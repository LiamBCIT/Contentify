import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react';

const Testimonial = ({ children }: { children: ReactNode }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }: { children: ReactNode }) => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'lg'}
      p={8}
      rounded={'xl'}
      align={'center'}
      pos={'relative'}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        borderTopColor: useColorModeValue('white', 'gray.800'),
        pos: 'absolute',
        bottom: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}>
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }: { children: ReactNode }) => {
  return (
    <Heading as={'h3'} fontSize={'xl'}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }: { children: ReactNode }) => {
  return (
    <Text
      textAlign={'center'}
      color={useColorModeValue('gray.600', 'gray.400')}
      fontSize={'sm'}>
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({
  src,
  name,
  title,
}: {
  src: string;
  name: string;
  title: string;
}) => {
  return (
    <Flex align={'center'} mt={8} direction={'column'}>
      <Avatar src={src} mb={2} />
      <Stack spacing={-1} align={'center'}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

export default function Testimonials() {
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.700')}>
      <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={'center'}>
          <Heading>Our Clients Speak</Heading>
          <Text>Here what our users are saying around the world</Text>
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Jame</TestimonialHeading>
              <TestimonialText>
                It&#39;s so easy to get started with Contentify! I instantly could
                tell the results after the first month and it has been reliable.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://source.unsplash.com/B8A3_0qfNzg/100x100'
              }
              name={'Jane Cooper'}
              title={'CEO at Late Night News'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Mark</TestimonialHeading>
              <TestimonialText>
                Their customer support was quick to respond. You could tell they were super-service minded, ready to help you with the implementation.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://source.unsplash.com/WNoLnJo7tS8/100x100'
              }
              name={'Mark Williams'}
              title={'Head of Marketing at Demonware'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Beyonce</TestimonialHeading>
              <TestimonialText>
                Contentify has given me so many oppotunities to turn what I love into something I can share and sell in my free time. It&#39;s a game changer! 
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://source.unsplash.com/lxsduAdWXy4/100x100'
              }
              name={'Beyonce Brown'}
              title={'Vice President at CA Funds'}
            />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  );
}