import { HttpState } from "../models/http-state";

export enum HttpActionType {
  SEND = "SEND",
  RESPONSE = "RESPONSE",
  ERROR = "ERROR",
  CLEAR = "CLEAR"
}

const httpStateReducer = (
  httpState: HttpState,
  action: { type: HttpActionType; payload?: string }
): HttpState => {
  switch (action.type) {
    case HttpActionType.RESPONSE:
      return { ...httpState, isLoading: false };
    case HttpActionType.ERROR:
      const errorMessage: string = action.payload!;
      return { isLoading: false, error: errorMessage };
    case HttpActionType.SEND:
      return { isLoading: true, error: null };
    case HttpActionType.CLEAR:
      return { isLoading: false, error: null};
    default:
      throw new Error(`Invalid action type ${action.type}`);
  }
};

export default httpStateReducer;
