const categoryState = {
  addCategoryModal: false,
};
const categoryReducer = (state, action) => {
  switch (action.type) {
    /* Create a product */
    case "addCategoryModal":
      return {
        ...state,
        addCategoryModal: action.payload,
      };
    default:
      throw new Error("Invalid Error");
  }
};
export { categoryState };
export default categoryReducer;
