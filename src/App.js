
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Courses from './componants/Courses';
import Home from './componants/Home';
import Login from './componants/Login';
import FAQ from './componants/FAQ';
import Register from './componants/Register';
import Main from './Layout/Main';
import AnotherPage from './componants/AnotherPage/AnotherPage';
import PrivetRoute from './routes/PrivetRoute';
import Blog from './componants/Blog';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/faq',
          element: <FAQ></FAQ>
        },
        {
          path: '/Courses',
          element: <Courses></Courses>
        },
        {
          path: '/anotherpage',
          element: <PrivetRoute><AnotherPage></AnotherPage></PrivetRoute>
        },
        {
          path: '/register',
          element: <Register></Register>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;