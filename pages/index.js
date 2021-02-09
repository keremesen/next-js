import { Button, Flex, Heading } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import Lottie from "react-lottie";
import animationData from '../public/43988-walkwalk.json'

export default function Home() {
  const toast = useToast();
  return (
    <Flex
      bgColor="tomato"
      w="100vw"
      h="100vh"
      align="center"
      justify="space-evenly"
      direction="column"
    >
<Lottie width={200} height={200}
options={{loop:true, autoplay:true, animationData}} ></Lottie>
      {/* <Heading>SARKI ONERME SITESI</Heading>
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
      </Button> */}
    </Flex>
  );
}
