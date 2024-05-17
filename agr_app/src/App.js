import Tidings from './componets/tidings/Tidings';
import Post from './componets/pages/Post';
import { Route, Routes } from 'react-router-dom';

export default function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Tidings />} />
        <Route path="/news_side/:postId" element={<Post/>} /> {/* Маршрут для страницы новости */}
      </Routes>
    </>
  );
}
