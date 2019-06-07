import axios from 'axios'
export const USER_INFO = 'USER_INFO';

export function userdetails(){
    const request =axios.get('https://jsonplaceholder.typicode.com/users')
    debugger;
    return (dispatch) => {
        request.then((data)=>{
            dispatch({
                type: USER_INFO,
                payload: data
            })
        })
    }
}
