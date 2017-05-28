const countReducer = (state = {
	count: 0
}, action) => {
	switch (action.type) {
		case 'ADD':
			console.log("state is", state)
			return Object.assign({}, state, {
					count: state.count + 1
				})
		case 'SUBTRACT':
			return Object.assign({}, state, {
					count: state.count - 1
				})
		default:
			return state 
	}
}

export default countReducer