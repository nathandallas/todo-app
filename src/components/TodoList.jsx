import React from "react";
import {
	HStack,
	IconButton,
	VStack,
	Text,
	StackDivider,
	Spacer,
	Badge,
} from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

export default function TodoList({ todos, deleteTodo }) {
	if (!todos.length) {
		return (
			<Badge colorScheme="green" p="4" m="4" borderRadius="lg">
				All done!
			</Badge>
		);
	}

	return (
		<VStack
			divider={<StackDivider />}
			borderColor="gray.200"
			borderWidth="2px"
			p="4"
			borderRadius="lg"
			w="100%"
			maxW={{ base: "90vw", sm: "80vw", lg: "50vw", xl: "40vw" }}
			alignItems="stretch"
		>
			{todos.map((todo) => (
				<HStack key={todo.id}>
					<Text>{todo.body}</Text>
					<Spacer />
					<IconButton
						icon={<FaTrash />}
						isRound="true"
						onClick={() => deleteTodo(todo.id)}
					></IconButton>
				</HStack>
			))}
		</VStack>
	);
}
