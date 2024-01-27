import { useEffect, useRef, useState } from 'react';

interface SortElementProps {
  element: number;
  maxHeight: number;
}

const SortElement = ({ element, maxHeight }: SortElementProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const elementRef = useRef<HTMLParagraphElement>(null);
  const [availableHeight, setAvailableHeight] = useState(-1);

  useEffect(() => {
    if (containerRef.current && elementRef.current) {
      setAvailableHeight(
        containerRef.current.clientHeight - elementRef.current.clientHeight,
      );
    }
  }, []);

  const getHeight = () => {
    return (availableHeight / maxHeight) * element;
  };

  return (
    <div
      ref={containerRef}
      className="h-full w-full flex flex-col justify-end items-center"
    >
      <div
        className="bg-blue-200 w-full"
        style={{ height: getHeight() + 'px' }}
      />
      <p ref={elementRef}>{element}</p>
    </div>
  );
};

export default SortElement;
