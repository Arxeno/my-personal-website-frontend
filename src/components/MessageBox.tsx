import React, { useContext } from 'react';
import GlobalStateContext from '../GlobalStateContext';

const MessageBox = () => {
  const { message, messageBoxColor } = useContext(GlobalStateContext);

  const handleOnAnimationEnd = () => {
    message.setState(null);
    messageBoxColor.setState(null);
  };

  if (message.state) {
    if (messageBoxColor.state) {
      return (
        <div
          className='message-box-class'
          onAnimationEnd={handleOnAnimationEnd}
          style={{ background: messageBoxColor.state }}
        >
          <p>{message.state}</p>
        </div>
      );
    } else {
      return (
        <div
          className='message-box-class'
          onAnimationEnd={handleOnAnimationEnd}
        >
          <p>{message.state}</p>
        </div>
      );
    }
  } else {
    return null;
  }
};

export default MessageBox;
