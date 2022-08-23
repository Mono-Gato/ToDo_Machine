import React from 'react';
import { TodoIcons } from './TodoIcons';

function DeleteIcon({ onDelete }) {
  return (
    <TodoIcons
      type="delete"
      onClick={onDelete}
    />
  );
}

export { DeleteIcon };