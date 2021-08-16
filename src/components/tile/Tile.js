import React from "react";
import PropTypes from "prop-types";

const Tile = (props) => {
  let tile = [];
  /* Codecademy requires first <p> element to have a 'title' class, but there is
   * no guarantee which property will come first from iteration through an object
   * - since it also specifies that either appointments OR contacts must be
   * handled by this Component I need to work around this. I assume 'title' and
   * 'name' should be first for appointments and contacts respectively
   */
  for (let property in props.item) {
    if (property !== "id") {
      let tileClass = "tile";
      if (property === "title" || property === "name") {
        tileClass += "-title";
      }
      if (property === "contact") {
        // catch contact object and return name instead
        tile.push(
          <p
            key={`${props.item[property].name}${props.item[property].id}`}
            className={tileClass}
          >
            {props.item[property].name}
          </p>
        );
      } else {
        tile.push(
          <p
            key={`${props.item[property]}${props.item.id}`}
            className={tileClass}
          >
            {props.item[property]}
          </p>
        );
      }
    }
  }
  return <div className="tile-container">{tile}</div>;
};

Tile.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Tile;
