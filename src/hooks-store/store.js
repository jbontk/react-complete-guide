import {useEffect, useState} from 'react';

let globalState = {};
let listeners = [];
let actions = {};


export const useStore = (shouldListen = true) => {
  const setState = useState(globalState)[1];

  const dispatch = (actionIdentifier, payload) => {
    const newState = actions[actionIdentifier](globalState, payload);
    globalState = {...globalState, ...newState};

    listeners.forEach(l => l(globalState));
  }

  useEffect(() => {
    if (shouldListen) {
      listeners.push(setState);
    }

    // useEffect's cleanup function
    return () => {
      if (shouldListen) {
        const listenerIndex = listeners.findIndex(l => l === setState);
        delete listeners[listenerIndex];
      }
    }

  }, [setState]);

  return [globalState, dispatch]
}

export const initStore = (userActions, initialState) => {
  if (initialState) {
    globalState = {...globalState, ...initialState};
  }
  if (userActions) {
    actions = {...actions, ...userActions};
  }
}
