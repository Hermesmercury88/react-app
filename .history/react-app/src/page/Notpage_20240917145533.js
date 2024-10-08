import { Link } from 'react-router-dom';

function NotPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-red-800">
      <div className="text-center text-white">
        <h1 className="text-6xl font-bold">404</h1>
        <p className="text-2xl mt-2">Page Not Found</p>
        <Link to="./Dashboard" className="mt-4 inline-block px-6 py-2 bg-white text-red-800 font-semibold rounded hover:bg-gray-200">
          Go Home
        </Link>
      </div>
    </div>
  );
}

export default NotPage;
