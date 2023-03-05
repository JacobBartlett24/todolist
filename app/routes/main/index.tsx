import { Box, Text, Input, Button, Textarea } from "@chakra-ui/react";
import { Form } from "@remix-run/react";
import { ActionArgs, json, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { db } from "~/utils/db.server";
import { Todo } from "@prisma/client";

export async function loader() {
  let test = json({
    todos: await db.todo.findMany(),
  })
  return (test)
}

export async function action({ request }: ActionArgs) {
  const body = await request.formData();
  const todo = body.get("todo")!.toString();

  if (
    typeof todo !== "string"
  ) {
    throw new Error(`Form not submitted correctly.`);
  }

  const todoTest = await db.todo.create({
    data: { todo },
  })

  console.log(todoTest.todo)

  return redirect("/main");
}

export default function MainIndex() {
  const data = useLoaderData();

  return (
    <Box>
      <Box display={"flex"} flexDir={"row"} marginTop={"2rem"}>
        <Form method="post">
          <Box display={"flex"} flexDir={"column"}>
            <Input name="todo" color={"white"} placeholder={"Title"} required />
          </Box>
          <Button type="submit">Submit</Button>
        </Form>
      </Box>
      <Box display={"flex"} flexDir={"column"}>
        {data.todos.map((todo: Todo) => (
          <Text color={"white"} key={todo.id}>{todo.todo}</Text>
        ))}
      </Box>
    </Box>
  );
}