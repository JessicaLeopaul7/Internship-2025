import "./CategoryBar.css";
import { useCategory } from "../context/CategoryContext";

const CategoryBar = () => {
  const { category, setCategory } = useCategory();
  const categories = [
    "All",
    "Music",
    "Sports",
    "Gaming",
    "Comedy",
    "Entertainment",
    "News",
    "Science",
    "Recently uploaded",
  ];
  return (
    <div className="category-bar">
      {categories.map((label, index) => (
        <button
          key={index}
          onClick={() => setCategory(label)}
          className={
            category === label ? "active-category" : "inactive-category"
          }
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default CategoryBar;
