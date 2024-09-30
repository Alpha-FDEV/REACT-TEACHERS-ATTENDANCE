export default function Button({ bgColor, text, onToggle, id, activeBtn }) {
  return (
    <button
      className={
        activeBtn === id
          ? " bg-green-300 px-4 py-1 rounded-sm"
          : `${bgColor} px-4 py-1 rounded-sm `
      }
      onClick={() => onToggle(id)}
    >
      {text}{" "}
    </button>
  );
}
