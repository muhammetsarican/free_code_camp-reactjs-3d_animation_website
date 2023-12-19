import { useRef } from "react";
import DisplaySection from "./components/DisplaySection";
import Jumbotron from "./components/Jumbotron";
import Navbar from "./components/Navbar";
import SoundSection from "./components/SoundSection";
import WebgiViewer from "./components/WebgiViewer";

function App() {
  const webgiRef = useRef();
  const handlePreview = () => {
    webgiRef.current.triggerPreview();
  }
  return (
    <div className="App">
      <Navbar />
      <Jumbotron />
      <SoundSection />
      <DisplaySection triggerPreview={handlePreview} />
      <WebgiViewer ref={webgiRef} />
    </div>
  );
}

export default App;