import { Link } from 'react-router-dom';
import React from 'react';

function Login() {
    const { login } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const res = await axios.post('http://localhost:5000/login', {

        email: email,

        password: password

      }, {

        headers: {

          'Content-Type': 'application/json'

        }

      });

      // localStorage.setItem('token', res.data.token);

      login(res.data.token);

      alert('Login Successful!');

      navigate('/');

    } catch (err) {

      setError(err.response ? err.response.data.message : 'Login failed'); 

      console.error(err.response ? err.response.data : err); // Log the correct data

    }

  };



  return (
    <div className="flex items-center justify-center min-h-screen bg-red-200"> 
      <div className="p-8 bg-white mt-6 rounded-lg shadow-md">
        <form onSubmit={handleLogin} className="p-3 w-96">
          <h2 className="text-2xl font-bold mb-4 text-center">Login</h2> 

          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded mt-2"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className="w-full p-2 border border-gray-300 rounded mt-2"
              required
            />
          </div>

          <button
          type="submit"
          className="w-full bg-[#ff2800] text-white py-2 px-4 rounded hover:bg-[#cc0000] focus:outline-none focus:ring-2 focus:ring-[#ff2800]"
          >Login
          </button>

        </form>
        <p>
          <Link to="/register" className="mt-5 text-center block text-blue-800 hover:underline">
            สมัครสมาชิก
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;

