import React, { Component } from "react";

class Searchbar extends Component {
    render() {
        return <div>
            <form className="form-inline offset-md-3">
              <input className="form-control mr-sm-2" type="text" placeholder="Search" />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                <i className="fa fa-search" aria-hidden="true" />
              </button>
            </form>
          </div>;
    }
}

export default Searchbar;