'use client';

import ElementInput from '@/elementInput/elementInput';
import SortVisualizer from '@/sortVisualizer/sortVisualizer';
import { useState } from 'react';

const SortPage = () => {
  const [elements, setElements] = useState<number[]>([]);

  return (
    <div className="flex w-full grow items-center flex-col pt-10 gap-y-5">
      <ElementInput setElements={setElements} />
      <SortVisualizer elements={elements} />
    </div>
  );
};

export default SortPage;
