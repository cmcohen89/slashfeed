const LOAD_RESULTS = 'search/LOAD';

export const loadResults = results => {
    return {
        type: LOAD_RESULTS,
        results
    };
};

export const searchQuery = query => async dispatch => {
    let formattedQuery = query.split('+').join(' ');
    const response = await fetch(`/api/search/${formattedQuery}`);

    if (response.ok) {
        const results = await response.json();
        dispatch(loadResults(results));
        return results;
    }
};

const initialState = {};

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_RESULTS:
            return action.results.Users.reduce((results, result) => {
                results[result.id] = result;
                return results;
            }, {});
        default:
            return state;
    }
}

export default searchReducer;
