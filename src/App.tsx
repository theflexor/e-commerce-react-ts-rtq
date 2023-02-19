import "@styles/App.sass";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { RoutesRender } from "@components/Router/Router";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; 

function App() {
  return (
    <div className="App">
        <RoutesRender />
        <ToastContainer />
    </div>
  );
}

export default App;
