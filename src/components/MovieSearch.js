import React from "react";


const movieSearch = (props) => {
    return (
        <form>
            <div className="form-group">
                <label htmlFor="search">Search:</label>
                <input
                    onChange={props.handleInputChange}
                    value={props.value}
                    name="search"
                    type="text"
                    className="form-control"

                    placeholder="Search For a Movie"
                    id="search"

                />
                <button
                    onClick={props.handleFormSubmit}
                    className="btn btn-primary">
                    Search
            </button>
            </div>
        </form>
    )
}

export default movieSearch;