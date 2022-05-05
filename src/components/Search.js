

export const SearchBar = () => {
    return (
      <>
          <div className="form-row mt-4 mb-2">
            <div className="col-md-8 mx-auto">
              <div className="input-group ">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Search for items..."
                />
                <div className="input-group-append">
                  <button className="btn btn-secondary" type="submit">
                    <i className="fa fa-search fa-lg" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <hr />
      </>
    );
}