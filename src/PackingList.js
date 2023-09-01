import { useState } from "react";
export default function PackingList({
  items,
  deleteItem,
  toggleItem,
  clearList,
}) {
  const [sortBy, setSortBy] = useState("");
  let sortedItems = items;
  if (sortBy === "input") sortedItems = items;
  if (sortBy === "packed")
    sortedItems = items.slice().sort((a, b) => +a.packed - +b.packed);
  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            deleteItem={deleteItem}
            toggleItem={toggleItem}
            key={item.id}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value={"input"}>Sort by input</option>
          <option value={"packed"}>Sort by packed items</option>
          <option value={"description"}>Sort by description</option>
        </select>
        <button onClick={clearList}>Clear List</button>
      </div>
    </div>
  );
}
const Item = ({ item, deleteItem, toggleItem }) => {
  return (
    <div className="list">
      <li>
        <input
          type="checkbox"
          value={item.packed}
          onChange={() => {
            toggleItem(item.id);
          }}
        />
        <span style={item.packed ? { textDecoration: "line-through" } : {}}>
          {item.quantity} {item.description}
        </span>
        <button onClick={() => deleteItem(item.id)}>❌</button>
      </li>
    </div>
  );
};
