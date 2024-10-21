import "./Countries.css";
import * as React from "react";
interface Props {
  name: string;
  onClick: React.MouseEventHandler;
}

const Countries: React.FC<Props> = React.memo(
  ({ name, onClick }) => {
    return (
      <p className="countryTitle" onClick={onClick}>
        {name}
      </p>
    );
  },
  (prevProps, nextProps) => {
    return prevProps.name === nextProps.name;
  },
);

export default Countries;
