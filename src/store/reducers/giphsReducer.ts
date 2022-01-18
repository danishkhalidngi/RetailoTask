import * as c from '../constants';
import {GiphsObjectType, GiphsActionType} from '../../types';

const initialState: GiphsObjectType = {
  loading: false,
  giphsData: [],
  giphsError: '',
  paginationObj: {},
  search: '',
};

const giphsReducer = (state = initialState, action: GiphsActionType) => {
  switch (action.type) {
    case c.GIPHS:
      return {...state, loading: true};
    case c.GIPHS_SUCCESS:
      return {
        ...state,
        loading: false,
        giphsData:
          state.search !== action.payload.reqData.search
            ? action.payload.response.data
            : [...state.giphsData, ...action.payload.response.data],
        paginationObj: action.payload.response.pagination,
        search: action.payload.reqData.search,
      };
    case c.GIPHS_FAIL:
      return {...state, loading: false, giphsError: action.payload};

    default: {
      return state;
    }
  }
};

export default giphsReducer;
