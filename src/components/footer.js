import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
  Tooltip,
} from "@chakra-ui/react";

//Icon
import { FaGithub, FaFacebook, FaLinkedin, FaEthereum } from "react-icons/fa";

//Logo
import Logo from "../logos/navlogo.js";

const SocialButton = ({ children, label, href, onClick }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      onClick={onClick}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function SmallWithLogoLeft({ colormode }) {
  return (
    <Box
      bg={useColorModeValue("gray.50", "#1C2F4D")}
      boxShadow={useColorModeValue("0px -3px 3px rgba(0,0,0,.1)", "")}
      color={useColorModeValue("gray.700", "gray.200")}
      position={"sticky"}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Logo width={"155px"} />
        <Text>© 2022 Kasper Luna. All rights reserved</Text>
        <Stack direction={"row"} spacing={6}>
          <Tooltip
            openDelay={500}
            label="Connect with me on LinkedIn"
            aria-label="A tooltip"
          >
            <SocialButton
              label={"LinkedIn"}
              href={"https://www.linkedin.com/in/kasperluna/"}
            >
              <FaLinkedin />
            </SocialButton>
          </Tooltip>
          <Tooltip
            openDelay={500}
            label="Check out my Github"
            aria-label="A tooltip"
          >
            <SocialButton
              label={"Github"}
              href={"https://github.com/KasperLuna"}
            >
              <FaGithub />
            </SocialButton>
          </Tooltip>
          <Tooltip
            openDelay={500}
            label="Open Axie Energy Counter"
            aria-label="A tooltip"
          >
            <SocialButton
              onClick={() =>
                window.open(
                  `${window.location.origin}/axie`,
                  "Axie Counter",
                  "width=310,height=360"
                )
              }
            >
              <FaEthereum />
            </SocialButton>
          </Tooltip>
        </Stack>
      </Container>
    </Box>
  );
}
