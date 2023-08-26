export default function Statistics({ items }) {
  if (!items.length)
    return <p className="stats">Start adding some items to packaing list 🚀</p>;

  const checkedItemsCount = items.filter((item) => item.packed).length;
  const average = Math.round((checkedItemsCount / items.length) * 100);
  return (
    <footer className="stats">
      <em>
        {average === 100
          ? "You got everything packed Ready to go ✈️"
          : `🍻 You have ${items.length} items on your list and you already packed ${checkedItemsCount} (${average}%)`}
      </em>
    </footer>
  );
}
