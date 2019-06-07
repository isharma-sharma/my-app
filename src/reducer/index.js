import {USER_INFO} from './../action/index'
import _ from 'lodash';

export default function (state={}, action){
    switch(action.type) {
        case USER_INFO:
        return _.mapKeys(action.payload, "id")
        default:
        return state;
    }
}