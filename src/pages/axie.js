import Head from "next/head";
import {
  Box,
  Container,
  IconButton,
  Button,
  Stack,
  Flex,
  Spacer,
  Heading,
  Text,
  Tooltip,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalCloseButton,
  ModalBody,
  Code,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/hooks";

//Icons and Logo
import { GrAdd, GrFormSubtract, GrAddCircle, GrRefresh } from "react-icons/gr";
import { useState } from "react";
import { useClipboard } from "@chakra-ui/react";
import { BiCopy } from "react-icons/bi";

const Counter = ({ header }) => {
  return (
    <>
      <Box maxW={"70px"}>
        <Text>{header}</Text>
        <NumberInput size="md" maxW={20} defaultValue={0} min={0}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </Box>
    </>
  );
};

const addEnergy = (energy) => {
  return energy === 10 ? 0 : 1;
};

const newRoundEnergy = (energy) => {
  return energy === 9 ? 1 : energy === 10 ? 0 : 2;
};

const removeEnergy = (energy) => {
  return energy === 0 ? 0 : -1;
};

export default function Axie() {
  const [energy, setEnergy] = useState(3);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const wallet = "ronin:c10a01314991df0d8776bda72854556eef5922a5";
  const { hasCopied, onCopy } = useClipboard(wallet);
  return (
    <>
      <Head>
        <title>Axie Counter - Kasper Luna</title>
        <meta
          name="description"
          content="I'm Kasper Luna, a software developer based in the Philippines. Experienced in frontend and backend system design, project management, and development."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxW={"xs"}>
        <Stack as={Box} textAlign={"center"} spacing={2} py={1}>
          <Stack direction="row">
            <Counter header="Wins" />
            <Spacer />
            <Counter header="Draw" />
            <Spacer />
            <Counter header="Loss" />
          </Stack>
          <Text>Enemy Energy Counter</Text>
          <Heading>{energy}</Heading>
          <Flex direction={"row"} spacing={10}>
            <IconButton
              marginRight={5}
              width={"100%"}
              colorScheme="messenger"
              icon={<GrAdd />}
              onClick={() => setEnergy(energy + addEnergy(energy))}
            />
            <Spacer />
            <IconButton
              marginLeft={5}
              width={"100%"}
              colorScheme="red"
              icon={<GrFormSubtract />}
              onClick={() => setEnergy(energy + removeEnergy(energy))}
            />
          </Flex>
          <Button
            colorScheme={"yellow"}
            leftIcon={<GrAddCircle />}
            onClick={() => setEnergy(energy + newRoundEnergy(energy))}
          >
            New Round
          </Button>
          <Button leftIcon={<GrRefresh />} onClick={() => setEnergy(3)}>
            Reset / New Game
          </Button>
          <Stack direction="row">
            <Text>© Kasper Luna.</Text>
            <Spacer />
            <Button colorScheme="linkedin" size="xs" onClick={onOpen}>
              Donate
            </Button>
          </Stack>
        </Stack>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent px={5}>
            <ModalHeader>Kasper&apos;s Ronin Wallet</ModalHeader>
            <ModalBody>
              <Text>Any Donation is much appreciated!</Text>
              <Code overflowWrap={"anywhere"}>
                ronin:c10a01314991df0d8776bda72854556eef5922a5
              </Code>
            </ModalBody>
            <ModalCloseButton />

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Tooltip
                label="(Copy to Clipboard) ronin:c10a01314991df0d8776bda72854556eef5922a5"
                placement="top"
                width="200px"
              >
                <Button leftIcon={<BiCopy />} variant="ghost" onClick={onCopy}>
                  {hasCopied ? "Copied" : "Copy"}
                </Button>
              </Tooltip>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Container>
    </>
  );
}
