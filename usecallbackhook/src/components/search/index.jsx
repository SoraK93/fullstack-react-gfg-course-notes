import { memo } from "react";

export const Search = memo(({ handleChange }) => {
  console.log("Search component rendered");
  return (
    <input
      onChange={(e) => handleChange(e.target.value)}
      placeholder="Search..."
    />
  );
});
