const UserReducer = (
    state = {
        name: "Majid ",
        age: 24
    }, action) => {
    switch (action.type) {
        case "SET_NAME":
            state = {
                // name: state.name + action.value,
                name: action.value,
                age: state.age
            }
            break;
        case "SET_AGE":
            state = {
                name: state.name,
                age: action.value
            }
            break;
    }
    return state
}
export default UserReducer