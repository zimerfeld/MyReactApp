import React, { MouseEvent, useState }  from "react";

function ListGroupMap() {
  let items = ["An item", "A second item", "A third item", "A fourth item"];
  // items = [];

/*   const GetMessage = () => {
    return items.length === 0 ? <h1>No items</h1> : null;
  }; */

  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleClick = (event: MouseEvent, i: number) => {
  console.log(event, i);
  setSelectedIndex(i);
  }
  
  return (
    <>
      {/* {GetMessage()} */}
      {items.length === 0 && <h1>No items</h1>}
      <ul className="list-group">
        {items.map((item, i) => (
          <li key={i} onClick={(e) => handleClick(e, i)} 
          className={ selectedIndex === i ? 'list-group-item active' : 'list-group-item' }>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroupMap;
