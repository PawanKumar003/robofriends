function SearchInput(props) {
  const { ...inputAttributes } = props;
  return <input className="inputCls" id="searcVal" {...inputAttributes} />;
}

export default SearchInput;
