export const KeyMapper = {
    Pages : {
        AUTH : '/auth',
        DASHBOARD : '/',
        QUESTION : '/question',
        PUBLISH : '/publish',
        ERROR : '*',
    },

    DASHBOARDCHILD :{
        BOOKS : '/',
        DETAILS : ':bookId',
    }, 


    ReactQueryKeys : {
        BOOKLIST : "booklist",
        BOOK_DETAIL : "bookdetail",
    },

    SortingKeys : {
        MOST_RELEVANT : "most_relevant",
        NEWEST : "newest",
        OLDEST : "oldest",
        PRICE_HIGH_TO_LOW : "price_high_to_low",
        PRICE_LOW_TO_HIGH : "price_low_to_high",
    },

    CONFIG : 'athrConfig',
    QUESTION_SHOWN : 'questionShown',
    auth_success : 'authSuccess',

}