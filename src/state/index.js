const initialState = {
    tweets: [],
    users: [],
    following: [],
    recomendedFollowers: ['Beatriz', 'Ben', 'Jenny', 'Alice', 'Bob', 'Kate']
}

export default function tweetsReducer (state = initialState, action) {
    const payload = action.payload;

    switch(action.type) {
        case 'POST_TWEET':
            return {
                ...state,
                tweets: [payload, ...state.tweets]
            }
        case 'FOLLOW_USER':
            return {
                ...state,
                following: [payload, ...state.following],
                recomendedFollowers: state.recomendedFollowers.filter(follower => follower !== payload),
            }
        case 'UNFOLLOW_USER':
            return {
                ...state,
                following: state.following.filter(follower => follower !== payload),
                recomendedFollowers: [payload, ...state.recomendedFollowers]
            }
        default:
            return state
    }
}