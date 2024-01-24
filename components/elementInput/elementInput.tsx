import { Dispatch, SetStateAction, useState } from 'react';

interface ElementProps {
  setElements: Dispatch<SetStateAction<number[]>>;
}

const ElementInput = ({ setElements }: ElementProps) => {
  const [userInput, setUserInput] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = () => {
    const values = userInput.split(',');
    let valuesToAdd: number[] = [];

    for (let value of values) {
      let result = parseInt(value);
      if (isNaN(result)) {
        setErrorMessage(
          'Please ensure you enter a list of comma seperate integers',
        );
        return;
      }
      valuesToAdd.push(result);
    }
    setUserInput('');
    setElements((prevElements) => prevElements.concat(valuesToAdd));
  };

  const handleClear = () => {
    setElements([]);
  };

  return (
    <div>
      <p>Enter Numbers to sort (comma seperated)</p>
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit Values</button>
      <button onClick={handleClear}>Clear Existing Values</button>
      {errorMessage != '' && <p>{errorMessage}</p>}
    </div>
  );
};

export default ElementInput;
