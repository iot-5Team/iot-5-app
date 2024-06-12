const initialBooks= {
    books:[]
}

const bookListAll= (state = initialBooks, action) =>{
    switch (action.type) {
        case "allAddBooks":
            return{
                ...state,
                books:action.books
            }
        default:
            return state;
    }
}
export default bookListAll;