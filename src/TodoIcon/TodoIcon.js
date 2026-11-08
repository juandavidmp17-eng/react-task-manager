import { ReactComponent as CheckSVG } from './check.svg';
import { ReactComponent as DeleteSVG } from './delete.svg';

import './TodoIcon.css';


const iconTypes = {
  check: () => <CheckSVG />,
  delete: () => <DeleteSVG />,
};

function TodoIcon({ type, color }) {
  return (
    <span
      className={`Icon-svg Icon-svg--${type}`}
      style={{ color }}
    >
      {iconTypes[type]()}
    </span>
  );
}

export { TodoIcon };
