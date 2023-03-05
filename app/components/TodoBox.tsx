import { Box, Input, Text } from "@chakra-ui/react";

type TodoListProps = {
  todos: string[];
  title: string;
}

export default function TodoBox(props: TodoListProps) {
  return (
    <Box>
      <Box>
        <Text>{props.title}</Text>
        {props.todos.map((todo) => (
          <Text>{todo}</Text>
        ))}
      </Box>
    </Box>
  );
}