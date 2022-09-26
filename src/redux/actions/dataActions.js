import { types } from "../types/types";
import { useRequest } from "../../hooks/useRequest";

// eslint-disable-next-line react-hooks/rules-of-hooks
const { get } = useRequest();

export const loadData = () => async dispatch => {
  let URL = '/data.json';

  try {
    const data = await get(URL,
        {
            'Content-Type': 'application/json'
        }
    );

    dispatch({
      type: types.SET_DATA,
      payload: data,
    })
  } catch (e) {
    console.log(e)
  }
};
