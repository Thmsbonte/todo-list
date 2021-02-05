const SearchBar = ({ search, setSearch }) => {
  const handleOnChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className="Search-bar">
      <input
        type="text"
        name="search"
        placeholder="Rechercher"
        value={search}
        onChange={handleOnChange}
      />
    </div>
  );
};

export default SearchBar;
