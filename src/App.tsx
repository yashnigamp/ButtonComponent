import Button from "./components/Button";
import Navbar from "./components/Navbar";

declare global {
  interface Window {
    Android: any;
  }
}
function App() {
  const requestCameraPermission = () => {
    console.log("Hello");
    window.Android.requestCameraPermission();
  };
  return (
    <>
      <Navbar />
      <div id="he">CLick</div>
      <div className="flex justify-center m-10 gap-4">
        <Button onClick={requestCameraPermission}>Scan BarCode</Button>
        {/* <Button onClick={handleClick}>Get GeoLocation</Button>
        <Button onClick={handleClick}>Open Camera</Button> */}
      </div>{" "}
    </>
  );
}

export default App;
