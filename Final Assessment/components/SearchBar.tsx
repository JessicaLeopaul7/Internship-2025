import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchBar.css";
import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  const [query, setQuery] = useState<string>("");
  const navigate = useNavigate();

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.trim) {
      navigate(`/results?search_query=${query.trim()}`);
    }
  };

  return (
    <div className="search-container">
      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search"
          className="search-input"
        />

        <button type="submit" className="search-btn">
          <CiSearch size={20} />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
