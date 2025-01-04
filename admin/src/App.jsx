import { Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import Sidebar from "./components/sidebar/Sidebar"
import Add from "./pages/add/Add"
import List from "./pages/list/List"
import Orders from "./pages/orders/Orders"
import { ToastContainer } from 'react-toastify';

const App = () => {
    const url = "http://localhost:4000"
    const urlForAdmin = "http://localhost:5173"

    return (
        <div>
            <ToastContainer />
            <Navbar />
            <hr />
            <div className="app-content">
                <Sidebar />
                <Routes>
                    <Route path="/add" element={<Add url={url} />} />
                    <Route path="/list" element={<List url={url} urlForAdmin={urlForAdmin} />} />
                    <Route path="/orders" element={<Orders url={url} />} />
                </Routes>
            </div>
        </div>
    )
}
export default App