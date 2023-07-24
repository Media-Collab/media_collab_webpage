import { useState } from "react";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { authProvider } from "src/authProvider";
// visuals
import {
  Box,
  Stack,
  Text,
  Heading,
  Image,
  Flex,
  Center,
  Link,
  UnorderedList,
  ListItem,
  Input,
  Textarea,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import CaptionCarousel from "@components/containers/CaptionCarousel";
import ContactForm from "@components/containers/ContactForm";
import Newsletter from "@components/containers/Newsletter";
import TestimonialCard from "@components/containers/TestimonialCard";

const Home = () => {
  const [formData, setFormData] = useState<any>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData: any) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log(formData);
    // ... (Agrega aquí la lógica para enviar el formulario a tu backend o servicio de correo electrónico)
  };

  const quotes = [
    {
      author: "John Doe",
      text: "In love with React & Next",
    },
    {
      author: "Jane Smith",
      text: "Next.js is awesome!",
    },
    {
      author: "Alejandro",
      text: "If you can imaginate it, you can program it!",
    },
    // Agrega aquí más citas si es necesario
  ];

  const features = [
    {
      title: "Collaborative Projects",
      description:
        "Work together with your team on media projects in real-time.",
      icon: "🤝",
    },
    {
      title: "Media Library",
      description: "Organize and access all your media assets in one place.",
      icon: "📚",
    },
    // Agrega más características si es necesario
  ];

  const teamMembers = [
    {
      name: "John Doe",
      role: "Co-founder & CEO",
      avatar:
        "https://images.unsplash.com/photo-1585076800246-4562eb6d6f42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Sm9obiUyMERvZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60.jpg",
    },
    {
      name: "Jane Smith",
      role: "Co-founder & CTO",
      avatar:
        "https://images.unsplash.com/photo-1525138257806-dd63710e891b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80.jpg",
    },
    // Agrega más miembros del equipo si es necesario
  ];

  return (
    <Box>
      {/* Encabezado */}
      <Stack
        spacing={3}
        mt={8}
        minH={"70vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Heading>Welcome to Media Collab</Heading>
        <Text fontSize="lg">A platform to collaborate on media projects.</Text>
      </Stack>

      {/* Carousel de imágenes */}
      <CaptionCarousel />

      {/* Citas */}
      {/* <Center mt={8}>
        <Stack spacing={4} maxW="600px">
          {quotes.map((quote, index) => (
            <Box key={index} borderWidth="1px" borderRadius="md" p={4}>
              <Text fontStyle="italic">{quote.text}</Text>
              <Text mt={2} fontWeight="bold">
                - {quote.author}
              </Text>
            </Box>
          ))}
        </Stack>
      </Center> */}

      {/* Testimonials */}
      <TestimonialCard />

      {/* Sección de Características */}
      <Box mt={16}>
        <Heading as="h2" size="lg" textAlign="center">
          Key Features
        </Heading>
        <Center mt={6}>
          <Flex direction="column" maxW="600px">
            {features.map((feature, index) => (
              <Box key={index} p={4} borderWidth="1px" borderRadius="md" mb={4}>
                <Text fontSize="2xl" mb={2}>
                  {feature.icon} {feature.title}
                </Text>
                <Text>{feature.description}</Text>
              </Box>
            ))}
          </Flex>
        </Center>
      </Box>

      {/* Sección de Equipo */}
      <Box mt={16}>
        <Heading as="h2" size="lg" textAlign="center">
          Our Team
        </Heading>
        <Center mt={6}>
          <Flex maxW="800px" justifyContent="space-around" flexWrap="wrap">
            {teamMembers.map((member, index) => (
              <Box key={index} textAlign="center" p={4}>
                <Image
                  src={member.avatar}
                  alt={member.name}
                  borderRadius="full"
                  boxSize="150px"
                  mb={2}
                  objectFit="cover"
                  h="200px"
                  w="200px"
                />
                <Text fontWeight="bold">{member.name}</Text>
                <Text>{member.role}</Text>
              </Box>
            ))}
          </Flex>
        </Center>
      </Box>

      {/* Sección de Contacto */}
      {/* <Box mt={16}>
        <Heading as="h2" size="lg" textAlign="center">
          Contact Us
        </Heading>
        <Center mt={6}>
          <form onSubmit={handleSubmit}>
            <Stack spacing={4} maxW="400px">
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                isRequired
              />
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                isRequired
              />
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                isRequired
              />
              <Button type="submit" colorScheme="blue">
                Submit
              </Button>
            </Stack>
          </form>
        </Center>
      </Box> */}

      {/* alternative */}
      <Box mt={16}>
        <ContactForm />
      </Box>

      {/* Newsletter */}
      <Box mt={16}>
        <Newsletter />
      </Box>

      {/* Footer */}
      <Box mt={10} p={4} bg="gray.600" textAlign="center">
        <Text>
          © {new Date().getFullYear()} Media Collab. All rights reserved.
        </Text>
        <UnorderedList
          mt={2}
          listStyleType="none"
          display="inline-flex"
          justifyContent="center"
        >
          <ListItem mx={2}>
            <Link href="/about">About</Link>
          </ListItem>
          <ListItem mx={2}>
            <Link href="/contact">Contact</Link>
          </ListItem>
          {/* Agrega más enlaces de navegación aquí si es necesario */}
        </UnorderedList>
      </Box>
    </Box>
  );
};

export const getServerSideProps: GetServerSideProps<{}> = async (context) => {
  const { authenticated, redirectTo } = await authProvider.check(context);

  const translateProps = await serverSideTranslations(context.locale ?? "en", [
    "common",
  ]);

  if (!authenticated) {
    return {
      props: {
        ...translateProps,
      },
      redirect: {
        destination: `${redirectTo}?to=${encodeURIComponent("/home")}`,
        permanent: false,
      },
    };
  }

  return {
    props: {
      ...translateProps,
    },
  };
};

export default Home;
