import React from "react";

class SearchInput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { ...inputAttributes } = this.props;
    return <input className="inputCls" id="searcVal" {...inputAttributes} />;
  }
}

export default SearchInput;
