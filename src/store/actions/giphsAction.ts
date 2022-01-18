import * as c from '../constants';
import {PayloadProps, GiphsPayloadActionType} from '../../types';

export const giphs = (payload: PayloadProps) => {
  return {
    type: c.GIPHS,
    payload,
  };
};

export const giphsSuccess = (payload: GiphsPayloadActionType) => ({
  type: c.GIPHS_SUCCESS,
  payload,
});

export const giphsFail = (payload: any) => ({
  type: c.GIPHS_FAIL,
  payload,
});
