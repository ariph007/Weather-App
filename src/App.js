import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ContextWrapper } from './helper/context';
import Home from './pages/Home';

function App() {
  return (
    <ContextWrapper>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </ContextWrapper>
  );
}

export default App;
