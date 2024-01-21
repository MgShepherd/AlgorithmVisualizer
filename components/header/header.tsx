'use client';

const Header = () => {
  const menuOptions = ['Search', 'Sort'];

  const handlePress = (option: string) => {
    console.log(`You pressed ${option}`);
  };

  return (
    <div className="text-white h-20 flex items-center px-5 border-b-white border-b">
      <h1 className="mr-20">Algorithm Visualizer</h1>
      {menuOptions.map((option) => {
        return (
          <div
            key={option}
            className="mr-10 h-full flex items-center cursor-pointer"
            onClick={() => {
              handlePress(option);
            }}
          >
            <h2 className="text-stone-400">{option}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default Header;
