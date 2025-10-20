import { type JSX, type ReactNode } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/navbar/navbar.tsx";
import ProtectedRoute from "./components/ProtectedRoute.tsx";
//import "./css/App.css";
import SigninPage from "./pages/SigninPage.tsx";
import SignupPage from "./pages/SignupPage.tsx";
import Order from "./pages/Orders.tsx";
import Home from "./pages/Home.tsx";

interface RenderPageProps {
    children?: ReactNode;
    protectedRoute?: boolean;
}

function RenderPage({
    children,
    protectedRoute,
}: RenderPageProps): JSX.Element {
    if (!protectedRoute) {
        return (
            <>
                <Navbar />
                <>{children}</>
            </>
        );
    } else {
        return (
            <ProtectedRoute>
                <Navbar />
                <>{children}</>
            </ProtectedRoute>
        );
    }
}

function App(): JSX.Element {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<RenderPage children={<Home />} />} />
                <Route
                    path="/sign-in"
                    element={<RenderPage children={<SigninPage />} />}
                />
                <Route
                    path="/sign-up"
                    element={<RenderPage children={<SignupPage />} />}
                />
                <Route
                    path="/orders"
                    element={<RenderPage children={<Order />} protectedRoute />}
                />
            </Routes>
        </Router>
    );
}

export default App;
