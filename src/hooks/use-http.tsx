import axios from "axios";
import { useCallback, useReducer } from "react";
import httpStateReducer, {
  HttpActionType,
} from "../reducers/http-state-reducer";

const useHttp = () => {
  const [httpState, dispatch] = useReducer(httpStateReducer, {
    isLoading: false,
    error: null,
  });

  const clearError = useCallback(() => dispatch({type: HttpActionType.CLEAR}), []);


  const sendRequest = useCallback(async (method: string, url: string, data?: any) => {
    try {
      if (dispatch) {
        dispatch({ type: HttpActionType.SEND });
      }
      const response = await axios({ method, url, data });
      if (dispatch) {
        dispatch({ type: HttpActionType.RESPONSE });
      }
      return response.data;
    } catch (e: any) {
      let errorMessage = "Unknown error";
      e instanceof Error && (errorMessage = e.message);
      if (dispatch) {
        dispatch({ type: HttpActionType.ERROR, payload: errorMessage });
      }
    }
  }, []);

  return {request: sendRequest, httpState, clearError};
};

export default useHttp;
