const initialData = {
  list: [],
};
const Reducer = (state = initialData, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const { id, data } = action.payload;
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            data: data,
          },
        ],
      };

    case "DELETE_ITEM":
      const deleteItem = state.list.filter((elem) => {
        return elem.id !== action.id;
      });
      return {
        ...state,
        list: deleteItem,
      };
    case "REMOVE_ALL":
      return {
        ...state,
        list: [],
      };
    default:
      return state;
  }
};

export default Reducer;
