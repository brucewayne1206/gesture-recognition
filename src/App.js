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
        <Route path="/recognition" element={<Recognition />}>
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
