import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthComponent } from './components/AuthComponent';
import './App.css';
import GeekLayout from './pages/Layout';
import Login from './pages/Login';
import Home from './pages/Home';
import Article from './pages/Article';
import Publish from './pages/Publish';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <AuthComponent>
                <GeekLayout />
              </AuthComponent>
            }
          >
            <Route index element={<Home />} />
            <Route path="article" element={<Article />} />
            <Route path="publish" element={<Publish />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
