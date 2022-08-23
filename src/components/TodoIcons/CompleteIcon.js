import React from 'react';
import { TodoIcons } from './TodoIcons';

function CompleteIcon({ completed, onComplete }) {
  return (
    <TodoIcons
      type="check"
      color={completed ? '#4caf50' : 'gray'}
      onClick={onComplete}
    />
  );
}

export { CompleteIcon };