import axios from "axios";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log("shiva");
    axios(`http://localhost:3001`, {
      method: "GET",
      responseType: "blob", //Force to receive data in a Blob Format
    })
      .then((response) => {
        //Create a Blob from the PDF Stream
        const file = new Blob([response.data], { type: "application/pdf" });
        //Build a URL from the file
        const fileURL = URL.createObjectURL(file);
        //Open the URL on new Window
        window.open(fileURL);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <h1>hello</h1>
    </div>
  );
}

export default App;
