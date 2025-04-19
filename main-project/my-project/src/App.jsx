import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { BookList } from './pages/BookList';
import { BookDetail } from './pages/BookDetail';
import { FavoritesList } from './pages/FavoritesList';
import { Sidebar } from './components/Sidebar';
import './App.css';

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-gray-50">
        <Sidebar />
        <main className="flex-1 ml-64">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/books" element={<BookList />} />
            <Route path="/books/:id" element={<BookDetail />} />
            <Route path="/favorites" element={<FavoritesList />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;