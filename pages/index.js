import { Button, Flex, Heading } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react"
import Head from "next/head";
import styles from "../styles/Home.module.css";


export default function Home() {
  function ErrorToast() {
    const toast = useToast()
  }
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
onClick={()=> alert("kardesim dur daha yapmadik yapim asamasinda")}
    >
      tikla ve rasgele sarkin calsin
    </Button>
    </Flex>
  );
}

