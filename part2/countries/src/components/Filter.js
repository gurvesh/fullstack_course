const Filter = ({filteringString, handleFilter}) => {
  return (
    <div>
      find countries <input value={filteringString} onChange={handleFilter} />
    </div>
  )
}

export default Filter