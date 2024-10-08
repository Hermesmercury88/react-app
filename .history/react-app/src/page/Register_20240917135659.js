import { Link } from 'react-router-dom';

<div className="flex items-center justify-center min-h-screen bg-gray-100">

      <div className="max-w-md w-full mx-auto">

        <div className="text-3xl font-bold text-gray-900 mt-2 text-center">Register</div>

        <div className="p-8 bg-white mt-6 rounded-lg shadow-md">

           <form>

            <div className="mb-5">

              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-600">Email</label>

              <input

                type="email"

                id="email"

                className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none"

                required

              />

            </div>

            <div className="mb-5">

              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-600">Password</label>

              <input

                type="password"

                id="password"

                className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none"

                required

              />

            </div>

            <div className="mb-5">

              <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-600">Confirm Password</label>

              <input

                type="password"

                id="confirm-password"

                className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none"

                required

              />

              </div>

            <div className="mb-5">

              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-600">Name</label>

              <input

                type="text"

                id="name"

                 className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none"

                required

              />

            </div>

            <button type="submit" className="w-full p-3 mt-4 bg-indigo-600 text-white rounded hover:bg-indigo-500">Register</button>

            <p> <Link to={"/login"} className="mt-5 text-center block text-blue-800">เข้าสู่ระบบ</Link> </p>

          </form>

        </div>

      </div>

    </div>