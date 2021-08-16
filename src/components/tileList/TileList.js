import React from "react";
import PropTypes from "prop-types";
import Tile from "../tile/Tile";

const TileList = (props) => {
  const tileArray = props.arr.map((item) => <Tile item={item} key={item.id} />);
  return <div>{tileArray}</div>;
};

TileList.propTypes = {
  arr: PropTypes.array.isRequired,
};

export default TileList;
