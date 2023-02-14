import React from "react";
import { Box, Checkbox, IconButton } from "@chakra-ui/core";

const TodoItem = ({ id, task, completed, onChange, onDelete }) => (
  <Box
    display="flex"
    alignItems="center"
    justifyContent="space-between"
    p={2}
    mb={2}
    borderWidth="1px"
    borderRadius="md"
  >
    <Checkbox
      isChecked={completed}
      onChange={() => onChange(id)}
      mr={2}
    />
    <Box as="p" lineHeight="1.5" flex={1}>
      {task}
    </Box>
    <IconButton
      size="sm"
      aria-label="Delete Todo"
      icon="delete"
      onClick={() => onDelete(id)}
    />
  </Box>
);

export default TodoItem;
