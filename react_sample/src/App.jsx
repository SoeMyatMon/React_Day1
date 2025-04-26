export default function App() {
  const title = "Product Categories";
  const categories = ["Electronics", "Books", "Clothing", "Toys", "Sports"];

  return (
    <div id="">
      <p className="text-2xl font-bold">{title}</p>
      <div>
        {categories.map((category) => (
          <button className="bg-blue-500 text-white rounded p-2 m-2">
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
