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
          'Please ensure you enter a list of comma seperated integers',
        );
        return;
      }
      valuesToAdd.push(result);
    }
    setUserInput('');
    setElements((prevElements) => prevElements.concat(valuesToAdd));
  };

  const buttonStyle = 'bg-blue-400 p-1 border-white border-2 rounded w-full';

  return (
    <div className="flex w-full items-center flex-col">
      <div>
        <p>Enter Numbers to sort (comma seperated)</p>
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          className="bg-stone-600 border-white border-2 rounded px-2 py-1 w-full"
        />
        <div className="mt-2 flex justify-between gap-2">
          <button onClick={handleSubmit} className={buttonStyle}>
            Submit
          </button>
          <button onClick={() => setElements([])} className={buttonStyle}>
            Clear Existing
          </button>
        </div>
      </div>
      {errorMessage != '' && <p>{errorMessage}</p>}
    </div>
  );
};

export default ElementInput;
