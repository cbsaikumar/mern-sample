import {GET_POSTS_LOADING, GET_POSTS_SUCCESS, GET_POSTS_FAILURE} from '../actions/getAllPosts';
// const initialState = {
//     posts: [
//         {
//             "userId": 1,
//             "id": 1,
//             "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//             "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
//         },
//         {
//             "userId": 1,
//             "id": 2,
//             "title": "qui est esse",
//             "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
//         },
//         {
//             "userId": 1,
//             "id": 3,
//             "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
//             "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
//         },
//         {
//             "userId": 1,
//             "id": 4,
//             "title": "eum et est occaecati",
//             "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
//         },
//         {
//             "userId": 1,
//             "id": 5,
//             "title": "nesciunt quas odio",
//             "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
//         }
//     ]
// }

const initState = {
    posts: [],
    loading: false,
    error: {}
}
const rootReducer = (state = initState, action) => {
    switch(action.type){
        case 'DELETE_POST':{
            const newPosts = state.posts.filter(post => post.id !== Number(action.id));
            return {
                ...state,
                posts: newPosts
            }
        }
        case GET_POSTS_LOADING: {
            return {
                ...state,
                loading: true,
                error: {}
            }
        }
         case GET_POSTS_SUCCESS: {
            return {
                ...state,
                data: action.data,
                loading: false,
            }
        }
         case GET_POSTS_FAILURE: {
            return {
                ...state,
                error: action.error,
                loading: false,
            }
        }
        default:
            return state;
    }
}

export default rootReducer;