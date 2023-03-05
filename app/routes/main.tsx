import { Box } from "@chakra-ui/react";
import { Outlet } from "@remix-run/react";
import Header from "~/components/Header";

export default function Main() {
  return (
    <Box bg={"black"} height={"100vh"} display={"flex"} flexDir={"column"} alignItems={"center"}>
      <Header />
      <Outlet />
    </Box>
  );
}