import {CHANGE_FILTERS} from '../../constants'

const BASE_FILTER = 'all'

const filters = (state = BASE_FILTER, {type, activeFilter}) => {
    switch (type){
        case CHANGE_FILTERS:
            return activeFilter;
            break;
            default: 
            return state;
    }
}
export default filters