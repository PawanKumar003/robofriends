function SearchInput(props) {
  const { ...inputAttributes } = props;
  return <input className="" id="searcVal" {...inputAttributes} />;
}

export default SearchInput;
