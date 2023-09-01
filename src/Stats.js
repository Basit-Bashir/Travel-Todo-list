export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start Packing your items 🧳</em>
      </p>
    );
  const numItem = items.length;
  const packed = items.filter((item) => item.packed).length;
  const percentage = Math.round((packed / numItem) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You are ready to go✈"
          : ` You have ${numItem} items on your list and you have packed ${packed},(
      ${percentage}%) 🧳`}
      </em>
    </footer>
  );
}
