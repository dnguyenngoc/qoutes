import { Route, Routes } from "react-router-dom";
import DashBoard from './views/DashBoard'
import NotFound from './components/response/NotFound'



export const RoutesInit = () => {    
    return (
      <>
      <Routes>
         <Route path='/' element={<DashBoard/>} />
         <Route path='/dashboard' element={<DashBoard/>} />
         <Route path='*' element={<NotFound />} />
      </Routes>
      </>
    );
  };