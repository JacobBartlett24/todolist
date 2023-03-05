import { Box, Input, Button, Textarea } from "@chakra-ui/react";
import { Form } from "@remix-run/react";

export default function MainIndex() {
  return (
    <Box display={"flex"} flexDir={"row"} marginTop={"2rem"}>
      <Form>
        <Box display={"flex"} flexDir={"column"}>
          <Input color={"white"} placeholder={"Title"} />
        </Box>
      </Form>
      <Button>Submit</Button>
    </Box>
  );
}