const reducer = (state, action) => {
    switch (action.type) {
        case "updateCarousel":
            return {
                ...state,
                carouselImages: action.images
            };

        case "changeSelection":
            let { carouselSelectedIndex } = state;

            carouselSelectedIndex += action.indexChange
            // Reset selected index to end of list if reducing below zero
            carouselSelectedIndex = (carouselSelectedIndex < 0 ? state.carouselImages.length - 1 : carouselSelectedIndex)
            // Reset selected index to beginning of list if increasing above limit
            carouselSelectedIndex = (carouselSelectedIndex === state.carouselImages.length? 0 : carouselSelectedIndex)

            return {
                ...state,
                carouselSelectedIndex
            }
        default:
            throw new Error(`Tried to reduce with unsupported action type: ${action.type}`);
    }
};

export default reducer