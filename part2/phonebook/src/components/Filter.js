const Filter = ({filteringString, handleFilter}) => {
  return (
    <div>
      filter shown with <input value={filteringString} onChange={handleFilter} />
    </div>
  )
}

export default Filter