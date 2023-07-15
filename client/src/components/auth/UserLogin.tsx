import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { userLoginValidationSchema } from "../../validations/userValidations";
import { UserLoginInfo } from "../../types/User";
import { toast } from "react-toastify";
import UserAuth from "../../api/auth/user";

const UserLogin: React.FC = () => {
  const userAuth = UserAuth()
  const handleSubmit = async (userInfo: UserLoginInfo) => {
    try {
      console.log(userInfo);
      const response = await userAuth.signIn(userInfo)
      console.log(response)
    } catch (error:any) {
      console.log(error.data.message)
      toast.error("Failed to login", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
  };

  return (
    <div className='flex justify-center items-center mt-16  text-customFontColorBlack'>
      <div className='bg-white rounded-lg mx-10 shadow-xl border p-8 w-full max-w-md md:mx-auto md:p-10 lg:p-12'>
        <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
          <img
            className='mx-auto h-10 w-auto'
            src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
            alt='Your Company'
          />
          <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
            Sign in to your account
          </h2>
        </div>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={userLoginValidationSchema}
          onSubmit={handleSubmit}
        >
          <Form className='mt-10 space-y-6'>
            <div>
              <label
                htmlFor='email'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Email address
              </label>
              <div className='mt-2'>
                <Field
                  id='email'
                  name='email'
                  type='email'
                  autoComplete='email'
                  required
                  className=' pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-700 focus-visible:outline-none focus-visible:ring-blue-600 sm:text-sm sm:leading-6'
                />
                <ErrorMessage
                  name='email'
                  component='div'
                  className='text-red-500 text-sm'
                />
              </div>
            </div>

            <div>
              <div className='flex items-center justify-between'>
                <label
                  htmlFor='password'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  Password
                </label>
                <div className='text-sm'>
                  <a
                    href='/'
                    className='font-semibold text-indigo-600 hover:text-indigo-500'
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className='mt-2'>
                <Field
                  id='password'
                  name='password'
                  type='password'
                  autoComplete='current-password'
                  required
                  className='pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-700 focus-visible:outline-none focus-visible:ring-blue-600 sm:text-sm sm:leading-6'
                />
                <ErrorMessage
                  name='password'
                  component='div'
                  className='text-red-500 text-sm'
                />
              </div>
            </div>

            <div>
              <button
                type='submit'
                className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
              >
                Sign in
              </button>
            </div>
          </Form>
        </Formik>
        <p className='mt-10 text-center text-sm text-gray-500'>
          Do not have an account?
          <Link
            to={'/sign-up'}
            className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500'
          >
            Sign up
          </Link>        
        </p>
      </div>
    </div>
  );
};

export default UserLogin;
