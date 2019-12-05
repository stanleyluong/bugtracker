import React from 'react'

const ProjectSearch = (props) => {
  const { onChange } = props;

  function handleChange(e) {
    onChange(e.target.value)
  }

  return (
    <div className="ui mini icon input">
      <input
        type="text"
        placeholder={"Search Projects"}
        onChange={handleChange}
      />
      <i className="circular search link icon"></i>
    </div>
  )
}

export default ProjectSearch
