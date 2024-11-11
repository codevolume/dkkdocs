import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <div className="h-screen bg-gray-200">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/login" element={<LoginPage />} />

                {/* 404 Page */}
                <Route path="*" element="404" />
            </Routes>
        </div>
    );
}

export default App;
