'use client';

import ElementInput from '@/elementInput/elementInput';
import { useState } from 'react';

const SortPage = () => {
  const [elements, setElements] = useState<number[]>([]);

  return (
    <div>
      <h1>This is the sort page</h1>
      <p>Elements: {elements}</p>
      <ElementInput setElements={setElements} />
    </div>
  );
};

export default SortPage;
