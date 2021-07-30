const reducer = (state, action) => {
    switch (action.type) {
        case "cats":
            return {
                ...state,
                cats: action.cats
            };
        case "sharks":
            return {
                ...state,
                sharks: action.sharks
            }
        default:
            throw new Error(`Tried to reduce with unsupported action type: ${action.type}`);
    }
};

export default reducer