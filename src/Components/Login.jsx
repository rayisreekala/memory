// import React, { useState } from 'react';
// import axios from 'axios';

// export default function Login() {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });

//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('http://localhost:5000/api/login', formData);
//       if (response.status === 200) {
//         setSuccess('Login successful!');
//         setError('');
//         localStorage.setItem('authToken', response.data.token);
//         // Handle successful login (e.g., redirect)
//       }
//     } catch (err) {
//       setError('Invalid email or password');
//       setSuccess('');
//     }

//     setFormData({ email: '', password: '' });
//   };

//   return (
//     <div className='flex justify-end mr-20'>
//       <div className="w-full mt-20 max-w-sm p-4 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-900 dark:border-gray-700">
//         <form className="space-y-6" onSubmit={handleSubmit}>
//           <h5 className="text-xl font-medium text-white dark:text-white">Sign in to our platform</h5>

//           {error && <div className="text-red-500">{error}</div>}
//           {success && <div className="text-green-500">{success}</div>}

//           <div>
//             <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Your email</label>
//             <input
//               type="email"
//               name="email"
//               id="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
//               placeholder="name@company.com"
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">Your password</label>
//             <input
//               type="password"
//               name="password"
//               id="password"
//               value={formData.password}
//               onChange={handleChange}
//               placeholder="••••••••"
//               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
//               required
//             />
//           </div>
//           <div className="flex items-start">
//             <div className="flex items-start">
//               <div className="flex items-center h-5">
//                 <input
//                   id="remember"
//                   type="checkbox"
//                   value=""
//                   className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
//                 />
//               </div>
//               <label htmlFor="remember" className="ms-2 text-sm font-medium text-white dark:text-gray-300">Remember me</label>
//             </div>
//             <a href="#" className="ms-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
//           </div>
//           <button
//             type="submit"
//             className="w-full text-white bg-blue-400 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//           >
//             Login to your account
//           </button>
//           <div className="text-sm font-medium text-white dark:text-gray-300">
//             Not registered? <a href="#" className="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }
import React from "react";

export default function Login() {
  return (
    <div className="flex justify-end p-10">
      <form className="text-white shadow-2xl border border-transparent bg-opacity-50 rounded-xl w-1/3 mt-20 mr-20 p-10" action="#">
        <div className="flex flex-col gap-3 p-2">
          <h2 className="text-xl font-bold">Sign in to your account</h2>
       
          <label className="text-sm font-bold">Your email</label>
          <input
            type="email"
            name="email"
            id="useremail"
            placeholder="name@gmail.com"
            className="rounded p-2 text-sm text-black"
            required
          />
          <label className="text-sm font-bold">Password</label>
          <input
            type="password"
            name="password"
            id="userpassword"
            placeholder="********"
            className="rounded p-2 text-sm text-black"
            required
          />
          <div className="flex items-center">
            <input
              type="checkbox"
              id="subscribeNewsletter"
              name="subscribeNewsletter"
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label
              htmlFor="subscribeNewsletter"
              className="ml-2 text-sm text-white"
            >
              Remember Me. 
            </label>

            <label className="text-sm text-blue-800"> <a href="#">Lost password?</a></label>
          </div>

          <button className="bg-blue-400 rounded p-2 font-bold">
            Login to your account
          </button>

          <div className="flex items-center">
            <label className="text-sm">Not registered?</label>
            <label className="text-sm">
              <a href="#" className="text-blue-800">Create another account.</a>
            </label>
          </div>
        </div>
      </form>
    </div>
  );
}
