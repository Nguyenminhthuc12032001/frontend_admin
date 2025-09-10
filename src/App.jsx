import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MoviesManagement from './components/movie/index'
import AddMovie from './components/movie/add'
import { ToastContainer } from 'react-toastify';
import MovieDetail from './components/movie/detail';
import EditMovie from './components/movie/edit';
import AddAdmin from './components/admin/add';
import AdminDashboard from './dashboard';

function App() {

  return (
    <div className="montserrat-regular">
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path='/' element={<AdminDashboard />} />
          <Route path="/movie_management" element={<MoviesManagement />} />
          <Route path="/movie/add" element={<AddMovie />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/movie/edit/:id" element={<EditMovie />} />
          <Route path="/admin/add" element={<AddAdmin />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
