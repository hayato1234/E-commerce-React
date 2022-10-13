import { useState } from "react";
import { Link } from "react-router-dom";

export const SearchBar = () => {

    const [keys, setKeys] = useState("");

    return (
      <>
          <div className="form-row mt-4 mb-2">
            <div className="col-md-8 mx-auto">
              <div className="input-group ">
                <input
                  value={keys}
                  onInput={e=>setKeys(e.target.value)}
                  className="form-control"
                  type="text"
                  placeholder="Search for items..."
                />
                <div className="input-group-append">
                  <Link to={`/search-result/${keys}`}>
                    <button className="btn btn-secondary" type="submit">
                      <i className="fa fa-search fa-lg" aria-hidden="true" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <hr />
      </>
    );
}