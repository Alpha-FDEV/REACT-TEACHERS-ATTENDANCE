export default function SearchBar() {
  return (
    <input
      type="text"
      className="bg-gray-200 w-full py-3 border border-green-300 px-2 focus:border-green-500 focus:bg-white transition-all duration-300 ease-in-out shadow-lg focus:scale-105 focus:outline-none placeholder-black"
      placeholder="Search.."
    />
  );
}
