import * as React from 'react';
import './TextInput.css';

interface Props {
  text?: string;
  ok?: boolean;
  i?: number;
}

const TextInput: React.FC<Props> = ({}) => {

  const textInputForList = React.useRef<HTMLInputElement>(null);


  return (
    <>
      <p className="inputBox">input works</p>
      <input ref={textInputForList} />
    </>
  );
};

export default TextInput; 