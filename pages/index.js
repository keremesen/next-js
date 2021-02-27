import { Button, Flex, Heading, Progress, Stack } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import Lottie from "react-lottie";
import animationData from "../public/43988-walkwalk.json";
import animationData2 from "../public/19962-blog-page.json";
import React, { useEffect, useState } from "react";

export default function Home() {
  // const toast = useToast();

  const [scrolled, setScrolled] = useState(0);

  function onScroll() {
    var winScroll = document.documentElement.scrollTop;
    var height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    setScrolled((winScroll / height) * 100);
  }
  useEffect(() => {
    window.onscroll = function () {
      onScroll();
    };
  }, [onScroll]);

  return (
    <Flex
      justify="center"
      direction="column"
      bgColor="gray.300"
      height="10000px"
      w="100%"
    >
      <Progress
        //isIndeterminate
        colorScheme="blackAlpha"
        bgGradient="linear-gradient(to right top, #d445cc, #be33ce, #a522d0, #8614d4, #5d0ed7)"
        value={scrolled}
        size="xs"
        w="100%"
        h="10px"
        pos="sticky"
        top="0"
        zIndex="1"
        borderRadius="6px"
      />
      <Flex bgColor="" w="1080px" h="100%" direction="column">
        <Lottie
          speed={1}
          options={{
            loop: true,
            autoplay: true,
            animationData: animationData2,
          }}
          width="500px"
          height="500px"
        ></Lottie>
        <Lottie
          speed={1}
          options={{
            loop: true,
            autoplay: true,
            animationData: animationData2,
          }}
          width="500px"
          height="500px"
        ></Lottie>
        <Lottie
          speed={1}
          options={{
            loop: true,
            autoplay: true,
            animationData: animationData2,
          }}
          width="500px"
          height="500px"
        ></Lottie>
        <Lottie
          speed={1}
          options={{
            loop: true,
            autoplay: true,
            animationData: animationData2,
          }}
          width="500px"
          height="500px"
        ></Lottie>
        <Lottie
          speed={1}
          options={{
            loop: true,
            autoplay: true,
            animationData: animationData2,
          }}
          width="500px"
          height="500px"
        ></Lottie>

        <Lottie
          speed={1}
          options={{ loop: true, autoplay: true, animationData: animationData }}
          width="500px"
          height="500px"
        ></Lottie>
      </Flex>
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
