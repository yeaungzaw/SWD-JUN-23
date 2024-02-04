import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  AdminPage,
  BlogPage,
  DashboardPage,
  DetailBookPage,
  HomePage,
  InventoryPage,
  UserPage,
} from "./page";
import NavComponents from "./components/Nav.components";
import NotFound from "./NotFound";

const App = () => {
  return (
    <div className="main">
      <NavComponents />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/detail/:id" element={<DetailBookPage />} /> */}
        <Route path="/detail/:slug" element={<DetailBookPage />} />
        <Route path="/dashboard" element={<DashboardPage />}>
          <Route index element={<InventoryPage />} />
          <Route path="user" element={<UserPage />} />
          <Route path="blog" element={<BlogPage />} />
        </Route>
        <Route path="/admin" element={<AdminPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
export default App;

// hooks
// => build in hook - useState, useEffect, useRef, useContext, useReducer, useLayoutEffect, useId, useTransition, useCallback, useMemo etc ...
// => lib provided hook - useParams, useNavigate, useLocation, useSearchParams
// => custom hook - useFetch
