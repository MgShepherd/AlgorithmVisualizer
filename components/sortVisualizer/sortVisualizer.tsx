interface SortVisualizerProps {
  elements: number[];
}

const SortVisualizer = ({ elements }: SortVisualizerProps) => {
  return (
    <div className="h-2/3 w-2/3 border-white border-2 rounded bg-gray-700 flex justify-around items-end py-3">
      {elements.map((element) => (
        <div>
          <div className="bg-blue-200" style={{ height: element + 'px' }} />
          <p>{element}</p>
        </div>
      ))}
    </div>
  );
};

export default SortVisualizer;
