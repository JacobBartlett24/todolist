import { Box, Text } from "@chakra-ui/react";

export default function Header() {
  return (
    <Box h={"2rem"} background={"black"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
      <Text color={"white"}>Todo List App</Text>
    </Box>
  );
}