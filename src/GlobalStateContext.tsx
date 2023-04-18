import { createContext, useState } from 'react';
import { GlobalStateType } from './type';

const initialValue: GlobalStateType = {
  message: {
    state: null,
    setState: (msg: string | null) => {},
  },
  messageBoxColor: {
    state: null,
    setState: (color: string | null) => {},
  },
};

const GlobalStateContext = createContext(initialValue);

type Props = {
  children: JSX.Element;
};

const GlobalStateProvider = ({ children }: Props) => {
  const [message, setMessage] = useState<string | null>(null);
  const [messageBoxColor, setMessageBoxColor] = useState<string | null>(null);

  const valueToShare: GlobalStateType = {
    message: {
      state: message,
      setState: (msg: string | null) => {
        setMessage(msg);
      },
    },
    messageBoxColor: {
      state: messageBoxColor,
      setState: (color: string | null) => {
        setMessageBoxColor(color);
      },
    },
  };

  return (
    <GlobalStateContext.Provider value={valueToShare}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export { GlobalStateProvider };
export default GlobalStateContext;
