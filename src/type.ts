export type TechnologyType = {
  tech: string;
  bgColor?: string;
  fontColor?: string;
};

export type GlobalStateType = {
  message: {
    state: string | null;
    setState: (msg: string | null) => void;
  };
  messageBoxColor: {
    state: string | null;
    setState: (color: string | null) => void;
  };
};
