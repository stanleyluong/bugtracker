import React from 'react'

const Search = (props) => {
  const { onChange } = props;

  function handleChange(e) {
    // console.log(e.target.value)
    onChange(e.target.value)
  }

  return (
    <div className="ui huge fluid icon input">
      <input
        type="text"
        placeholder={"Search Bugs"}
        onChange={(searchText) => handleChange(searchText)}
      />
      <i className="circular search link icon"></i>
    </div>
  )
}

export default Search
