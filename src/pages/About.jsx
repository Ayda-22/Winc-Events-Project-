import React from "react";
import { Button, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <div className="about-container">
      <div className="about-hero">
        <img src="assets/about.jpg" alt="music festival"></img>
      </div>
      <div className="about-text">
        <Heading className="about-welcome-text">
          {" "}
          Little bit about Winc Events!
        </Heading>
        <Text lineHeight={7} fontSize="clamp(1rem, 0.95rem + 0.25vw, 1.25rem)">
          <Text mt="1rem"></Text>
          <Text>
            <br></br>
            We are an innovative event management company offering an array of
            thrilling experiences for everyone! Whether it is exhilarating
            bungee jumping, adventurous hiking trips, or relaxed brunch
            gatherings, we cater to all tastes and preferences.{" "}
          </Text>
          <p>
            Our events bring families, friends, and corporate teams together,
            creating unforgettable memories. With Winc Events, there is always
            something exciting to partake in, no matter your interests.{" "}
          </p>
          <Text
            mb="1.5rem"
            lineHeight={7}
            fontSize="clamp(1rem, 0.95rem + 0.25vw, 1.25rem)"
          ></Text>
          <Box>
            <Heading className="about-welcome-text"> Adress </Heading>
            <Text
              mt="1rem"
              color="gray.600"
              lineHeight={7}
              fontSize="clamp(1rem, 0.95rem + 0.25vw, 1.25rem)"
            >
              Address: Hoogstraat <Text>1234 AB Amsterdam</Text>
              <Text>The Netherlands</Text>
            </Text>
          </Box>
          <Text
            mb="1.5rem"
            lineHeight={7}
            fontSize="clamp(1rem, 0.95rem + 0.25vw, 1.25rem)"
          ></Text>
          <Box>
            <Heading color="black">Contact</Heading>{" "}
            <Text
              color="gray.600"
              lineHeight={7}
              fontSize="clamp(1rem, 0.95rem + 0.25vw, 1.25rem)"
            >
              <Text mt="1rem">+31 (0)12 34 56 789</Text>
              info@wincevents.nl
            </Text>
          </Box>
          <Text
            mb="1.5rem"
            lineHeight={7}
            fontSize="clamp(1rem, 0.95rem + 0.25vw, 1.25rem)"
          ></Text>

          <Heading fontSize="1.5rem">
            <br></br>Join us to create unforgettable moments together!
          </Heading>
        </Text>
        <div className="about-salesbox">
          <Link to="/events">
            <Button mt="1.5rem" colorScheme="gray" color="salmon">
              Book Events
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
