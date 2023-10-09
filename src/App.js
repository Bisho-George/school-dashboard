import './App.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from './pages/Root.jsx';
import Dashboard from './pages/Dashboard/Dashboard';
import Parents from './pages/Parents/Parents';
import TeachersPage from './pages/TeachersPage/TeachersPage.jsx';
import Classes from './pages/Classes/Classes.jsx';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Dashboard />} />
      <Route path='/teachers' element={<TeachersPage />} />
      <Route path='/parents' element={<Parents />} />
      <Route path='/classes' element={<Classes/>} />
    </Route>
  )
);


function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
