const setCurrentUser = (user) => {
    return { type : "SET_USER" , payload : user}
}

export default  setCurrentUser;