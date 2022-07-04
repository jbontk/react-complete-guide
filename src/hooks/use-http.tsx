import axios from "axios";
import { useCallback } from "react";
import { HttpActionType } from "../reducers/http-state-reducer";

const useHttp = (dispatch?: any) => {
  const sendRequest = useCallback(
    async (method: string, url: string, data?: any) => {
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
    },
    [dispatch]
  );

  return sendRequest;
};

export default useHttp;
