import Button from "./components/Button";
import Navbar from "./components/Navbar";

function App() {
  const handleClick = () => {
    console.log("Button clicked!");
  };
  return (
    <>
      <Navbar />
      <div className="flex justify-center m-10 gap-4">
        <Button onClick={handleClick}>Scan BarCode</Button>
        <Button onClick={handleClick}>Get GeoLocation</Button>
        <Button onClick={handleClick}>Open Camera</Button>
      </div>{" "}
    </>
  );
}

export default App;
