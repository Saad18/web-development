import { Component } from "react";
// eslint-disable-next-line

import './search-box.styles.css'

class SearchBox extends Component {
    render() {
        const { onChangeHandler, placeholder, className } = this.props;
        return (
            <input 
                className={`search-box ${className}`}
                type='search'
                placeholder={placeholder}
                onChange={onChangeHandler}
            />
        );
    }
}

export default SearchBox;  