import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { authProvider } from "src/authProvider";
// visuals
import { Stack, Text, Heading } from "@chakra-ui/react";

const Test = () => {
  return (
    <Stack spacing={3}>
      <Heading>Hello Tests</Heading>
      <Text fontSize="6xl">(6xl) In love with React & Next</Text>
      <Text fontSize="5xl">(5xl) In love with React & Next</Text>
      <Text fontSize="4xl">(4xl) In love with React & Next</Text>
      <Text fontSize="3xl">(3xl) In love with React & Next</Text>
      <Text fontSize="2xl">(2xl) In love with React & Next</Text>
      <Text fontSize="xl">(xl) In love with React & Next</Text>
      <Text fontSize="lg">(lg) In love with React & Next</Text>
      <Text fontSize="md">(md) In love with React & Next</Text>
      <Text fontSize="sm">(sm) In love with React & Next</Text>
      <Text fontSize="xs">(xs) In love with React & Next</Text>
    </Stack>
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
        destination: `${redirectTo}?to=${encodeURIComponent("/test")}`,
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

export default Test;
