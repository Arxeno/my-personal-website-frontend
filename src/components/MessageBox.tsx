import React from 'react';

type Props = {
  message: string;
  bgColor?: string;
};

const MessageBox = ({ message, bgColor }: Props) => {
  if (bgColor) {
    return (
      <div className='message-box-class' style={{ background: bgColor }}>
        <p>{message}</p>
      </div>
    );
  } else {
    return (
      <div className='message-box-class'>
        <p>{message}</p>
      </div>
    );
  }
};

export default MessageBox;
