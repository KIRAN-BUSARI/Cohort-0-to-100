import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { Suspense, lazy } from "react";
const Landing = lazy(() => import("./components/Landing"));
const Dashboard = lazy(() => import("./components/Dashboard"));
// import Landing from "./components/Landing";
// import Dashboard from "./components/Dashboard";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <AppBar />
        <Routes>
          <Route path="/" element={<Suspense fallback={"loading..."}><Landing /></Suspense>} />
          <Route path="/dashboard" element={<Suspense fallback={"loading..."}><Dashboard /></Suspense>} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

function AppBar() {
  const navigate = useNavigate();
  return (
    <>
      <div className="m-5">
        <button className="border border-black active:border-blue-400 rounded-md mr-2 p-2" onClick={() => {
          // window.location.href = "/landing"
          navigate("/")
        }}>Landing Page</button>
        <button className="border border-black active:border-blue-400 rounded-md p-2" onClick={() => {
          // window.location.href = "/dashboard"
          navigate("/dashboard")
        }}>Dashboard Page</button>
      </div>
    </>
  )
}

export default App
