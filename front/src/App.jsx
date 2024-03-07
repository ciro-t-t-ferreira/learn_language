import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

//pages and components
import NavBar from './components/NavBar';
import Home from './pages/Home';
import AlphabetPage from './pages/Alphabet';
import VocabularyPage from './pages/Vocabulary';
import AboutPage from './pages/About';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div >
     <BrowserRouter>
      <NavBar />
      <div className="content">
        <Routes>
          <Route path="/"
              element={<Home />}>
          </Route>
          <Route path="/alphabet"
              element={<AlphabetPage />}>
          </Route>
          <Route path="/vocabulary"
              element={<VocabularyPage />}>
          </Route>
          <Route path="/about"
              element={<AboutPage />}>
          </Route>
          <Route path="/404"
              element={<NotFound />}>                
          </Route>

          {/* Catch all route*/}
          <Route path="*"
              element={<Navigate to="/404"/>}></Route>
        </Routes>
      </div>
     </BrowserRouter>
    </div>
  );
}

export default App;
