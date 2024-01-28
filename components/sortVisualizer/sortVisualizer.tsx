import SortElement from '@/sortElement/sortElement';

interface SortVisualizerProps {
  elements: number[];
}

const SortVisualizer = ({ elements }: SortVisualizerProps) => {
  const maxHeight = Math.max(...elements);

  return (
    <div className="h-2/3 w-2/3 border-white border-2 rounded bg-gray-700 flex justify-between items-end gap-5 py-3 px-3">
      {elements.map((element) => (
        <div data-testid="sortElement" key={element}>
          <SortElement element={element} maxHeight={maxHeight} />
        </div>
      ))}
    </div>
  );
};

export default SortVisualizer;
