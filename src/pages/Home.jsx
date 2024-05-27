import {} from "@chakra-ui/icons";
import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Flex } from "@chakra-ui/react";

const Home = () => {
  return (
    <div className="about-container">
      <Box position="relative" h="100vh">
        <div className="home-hero Img">
          <img src="public/assets/kayak.jpg"></img>
        </div>

        <div className="home_hero_text">
          <h1>Discover Your Next Adventure: </h1>
          <h1>Explore Our Exciting Activities!</h1>
        </div>
      </Box>
      <Text
        mt="-5rem"
        lineHeight={7}
        fontSize="clamp(1rem, 0.95rem + 0.25vw, 1.25rem)"
      ></Text>
      <div className="home-hero">
        <Heading className="about-welcome-text">
          {" "}
          Welcome to Winc Events: Your Gateway to Thrilling Experiences!
        </Heading>
        <Text
          mt="1.5rem"
          lineHeight={7}
          fontSize="clamp(1rem, 0.95rem + 0.25vw, 1.25rem)"
        ></Text>
        <Text lineHeight={7} fontSize="clamp(1rem, 0.95rem + 0.25vw, 1.25rem)">
          Set Sail on an Adventure with Winc Events: Your Ultimate Destination
          for Unforgettable Experiences in Amsterdam! Prepare to be whisked away
          on a journey filled with heart-pounding bungee jumps, tranquil hikes,
          lively brunch gatherings, and exhilarating team-building activities.
          Our curated selection of diverse experiences is designed to cater to
          every taste and preference, ensuring an unforgettable adventure awaits
          you.{" "}
        </Text>
        <div className="home-text" style={{ marginBottom: "2rem" }}>
          {" "}
        </div>
        <Text
          mb="1.5rem"
          lineHeight={7}
          fontSize="clamp(1rem, 0.95rem + 0.25vw, 1.25rem)"
        ></Text>
        <Text lineHeight={7} fontSize="clamp(1rem, 0.95rem + 0.25vw, 1.25rem)">
          At Winc Events, we believe that life is meant for exploration and
          discovery. Our mission is simple: to ignite your sense of adventure
          and guide you towards exhilarating experiences that push boundaries
          and create lasting memories. Whether you are seeking adrenaline-fueled
          thrills or leisurely pursuits, we are here to turn your dreams into
          reality.{" "}
        </Text>
        <div className="home-text" style={{ marginBottom: "2rem" }}>
          {" "}
        </div>
        <Text
          lineHeight={7}
          fontSize="clamp(1rem, 0.95rem + 0.25vw, 1.25rem)"
        ></Text>
        <Text
          mb="1.5rem"
          lineHeight={7}
          fontSize="clamp(1rem, 0.95rem + 0.25vw, 1.25rem)"
        ></Text>

        <Text lineHeight={7} fontSize="clamp(1rem, 0.95rem + 0.25vw, 1.25rem)">
          Catering to families, groups of friends, and corporate teams alike,
          our meticulously planned events promise excitement, camaraderie, and
          pure enjoyment. With Winc Events as your trusted partner, rest assured
          that your next adventure is just around the corner. So why wait? Join
          us today and let the thrill of exploration begin!{" "}
        </Text>
        <div className="home-text" style={{ marginBottom: "2rem" }}>
          {" "}
        </div>

        <Box w="80%" m="auto">
          <Flex
            w="100%"
            h={{ base: "30%", md: "20%", lg: "15%" }}
            flexDirection="row"
            flexWrap="wrap"
            mb="3rem"
          ></Flex>
        </Box>
        <Box className="about-salesbox" m="auto" zIndex={10} w="100%">
          <Text fontSize="1.5rem">
            <Heading fontSize="1.5rem">
              <br></br>Join us to create unforgettable moments together!
            </Heading>
          </Text>
          <Link to="/events">
            <Button mt="1.5rem" colorScheme="gray" color="salmon">
              Book Events
            </Button>
          </Link>
        </Box>
      </div>
    </div>
  );
};

export default Home;
