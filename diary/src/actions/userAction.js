import {auth, googleProvider, twitterProvider} from '../firebase';
import {GET_USER, USER_STATUS} from '../actionTypes'

export function getUser(){
    return dispatch => {
        //SHOW LOADING STATUS BEFORE GETTING USER TO TRUE
        dispatch({
            type: USER_STATUS,
            payload: true
        });
        auth.onAuthStateChanged(user => {
            dispatch({
                type: GET_USER,
                payload : user
            });
            //show loading status to false
            dispatch({
                type: USER_STATUS,
                payload: false
            })
        });
    }
}
export function googleLogin(){
    return dispatch => auth.signInWithPopup(googleProvider);
}

export function twitterLogin(){
    return dispatch => auth.signInWithPopup(twitterProvider);
}

export function logout(){
    return dispatch => auth.signOut();
}