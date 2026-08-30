import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
    const role = localStorage.getItem("role");
    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear();
        navigate("/login");
    };

    return (
        <nav className="navbar" id="main-navbar">

            <h2 className="navbar-logo">ShopSphere</h2>

            <div className="navbar-links">

                <Link className="nav-link" to="/">Home</Link>

                <Link className="nav-link" to="/products">
                    Products
                </Link>

                {/* When user is NOT logged in */}
                {!role && (
                    <>
                        <Link className="nav-link" to="/login">
                            Login
                        </Link>

                        <Link className="nav-link" to="/register">
                            Register
                        </Link>
                    </>
                )}

                {/* Customer links */}
                {role === "customer" && (
                    <>
                        <Link className="nav-link" to="/cart">
                            Cart
                        </Link>

                        <Link className="nav-link" to="/orders">
                            My Orders
                        </Link>
                    </>
                )}

                {/* Vendor links */}
                {role === "vendor" && (
                    <>
                        <Link className="nav-link" to="/add-product">
                            Add Product
                        </Link>

                        <Link className="nav-link" to="/my-products">
                            My Products
                        </Link>

                        <Link className="nav-link" to="/vendor/orders">
                            Vendor Orders
                        </Link>

                        <Link className="nav-link" to="/vendor-dashboard">
                            Dashboard
                        </Link>
                    </>
                )}

                {/* Profile for logged-in users */}
                {role && (
                    <Link className="nav-link" to="/profile">
                        Profile
                    </Link>
                )}

                {/* Logout button for logged-in users */}
                {role && (
                    <button
                        className="logout-btn"
                        onClick={logout}
                    >
                        Logout
                    </button>
                )}

            </div>
        </nav>
    );
}

