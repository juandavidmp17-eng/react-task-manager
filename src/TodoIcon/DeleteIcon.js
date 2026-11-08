import { TodoIcon } from './TodoIcon';

function DeleteIcon({deleted}) {
  return (
    <TodoIcon
      type="delete"
      color={deleted ? "red" : "gray"}
    />
  );
}

export { DeleteIcon };