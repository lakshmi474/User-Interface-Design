import { Link } from "react-router-dom";

export default function Navbar({ cartCount, user, onLogout }) {
  return (
    <nav className="p-4 bg-blue-600 text-white flex justify-between items-center">
      <Link to="/" className="text-xl font-bold hover:text-blue-200 transition-colors">
        Foodie
      </Link>
      <div className="flex items-center space-x-4">
        <Link 
          className="hover:text-blue-200 transition-colors" 
          to="/"
        >
          Home
        </Link>
        <Link 
          className="hover:text-blue-200 transition-colors" 
          to="/menu"
        >
          Menu
        </Link>
        <Link 
          className="hover:text-blue-200 transition-colors relative" 
          to="/cart"
        >
          Cart 
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </Link>
        <Link 
          className="hover:text-blue-200 transition-colors" 
          to="/dashboard"
        >
          Dashboard
        </Link>
        <div className="flex items-center space-x-2">
          <span className="text-sm">Welcome, {user?.name}</span>
          <button 
            onClick={onLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm transition-colors"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}
