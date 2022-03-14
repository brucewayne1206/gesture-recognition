import './App.css';
import Recognition from './recongnition';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Recognition />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
