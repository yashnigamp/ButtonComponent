import Button from "./components/Button";
import Navbar from "./components/Navbar";

declare global {
  interface Window {
    Android: any;
  }
}
function App() {
  // const requestCameraPermission = () => {
  //   console.log("Hello");
  //   window.Android.requestCameraPermission();
  // };
  function requestBarcodePermission() {
    window.Android.requestBarcodePermission();
  }
  function requestCameraPermission() {
    window.Android.requestCameraPermission();
  }
  function requestLocationPermission() {
    window.Android.requestLocationPermission();
  }
  return (
    <>
      <Navbar />
      <div id="he">CLick</div>
      <div className="flex justify-center m-10 gap-4">
        <Button onClick={requestBarcodePermission}>Scan BarCode</Button>
        <Button onClick={requestLocationPermission}>Get GeoLocation</Button>
        <Button onClick={requestCameraPermission}>Open Camera</Button>
      </div>{" "}
    </>
  );
}

export default App;
