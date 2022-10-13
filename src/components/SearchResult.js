import React from "react";
import { SearchBar } from "./Search";

const SearchResult = (props) => {
    return (
      <React.Fragment>
        <SearchBar />
        {props.itemsHolder.items.reduce((item) => item.id === 1)}
        {/* item.title.includes(props.keywords) */}
        {console.log(props.itemsHolder.items.reduce((item) => item.id === 1))}

        {/* fileter doesn't work!!! */}
      </React.Fragment>
    );
}

export default SearchResult;