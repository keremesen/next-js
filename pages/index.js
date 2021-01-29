import { Button, Flex, Heading } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  const toast = useToast();
  return (
    <Flex
      bgColor="red.300"
      w="100vw"
      h="100vh"
      align="center"
      justify="space-evenly"
      direction="column"
    >
      <Heading>SARKI ONERME SITESI</Heading>
      <Button
        onClick={() =>
          toast({
            title: "kardesim dur bi daha yapmadık",
            description: "yapmaya calisiyoz",
            status: "error",
            duration: 5000,
            isClosable: true,
          })
        }
      >
        tikla ve rasgele sarkin calsin
      </Button>
    </Flex>
  );
}
