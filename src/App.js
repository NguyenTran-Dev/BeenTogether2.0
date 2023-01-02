import './styles/style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './layout/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NewFeed from './pages/NewFeed';

function App() {
  return (
    <div>
      <Header />
      <div className="body--content container">
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/new-feed" element={<NewFeed />} exact />
        </Routes>{' '}
      </div>{' '}
    </div>
  );
}

export default App;
