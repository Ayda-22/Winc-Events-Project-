import React from "react";
import { Image, Text } from "@chakra-ui/react";
import "../index.css";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="logo" onClick={scrollToTop}>
          <Image
            src="/assets/logo-no-background.svg"
            w="5rem"
            m="auto"
            pb="0.5rem"
          />
        </div>

        <Text fontSize="sm">Copyright © 2024</Text>
      </div>
    </div>
  );
}
