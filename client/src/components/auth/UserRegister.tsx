import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { userRegisterValidationSchema } from "../../validations/userValidations";
import { toast } from "react-toastify";
import { UserRegisterInfo } from "../../types/User";
import { Link } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const UserRegister: React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = async (userInfo: UserRegisterInfo) => {
    try {
      console.log(userInfo);
    } catch (error: any) {
      toast.error(error?.data?.message, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
  };

  return (
    <div className='mt-7 mb-20 my-3 flex justify-center items-center h-screen text-customFontColorBlack'>
      <div className='bg-white rounded-lg mx-10 shadow-xl p-8 w-full max-w-xl border md:mx-auto md:p-10 lg:p-12'>
        <div className='mb-8 sm:mx-auto sm:w-full sm:max-w-sm'>
          <img
            className='mx-auto h-10 w-auto'
            src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
            alt='Your Company'
          />
          <h2 className='mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
            Register here..
          </h2>
        </div>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
            mobile: "",
            interests: [],
          }}
          validationSchema={userRegisterValidationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className='flex flex-wrap -mx-3 mb-4'>
              <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                <label
                  htmlFor='lastName'
                  className='mt-2 block text-sm font-medium leading-6 text-gray-900'
                >
                  First Name
                </label>
                <div className='mt-2'>
                  <Field
                    id='firstName'
                    name='firstName'
                    type='firstName'
                    autoComplete='firstName'
                    required
                    className=' pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-700 focus-visible:outline-none focus-visible:ring-blue-600 sm:text-sm sm:leading-6'
                  />
                  <ErrorMessage
                    name='firstName'
                    component='div'
                    className='text-red-500 text-sm'
                  />
                </div>
              </div>
              <div className='w-full md:w-1/2 px-3'>
                <label
                  htmlFor='lastName'
                  className='mt-2 block text-sm font-medium leading-6 text-gray-900'
                >
                  Last Name
                </label>
                <div className='mt-2'>
                  <Field
                    id='lastName'
                    name='lastName'
                    type='lastName'
                    autoComplete='lastName'
                    required
                    className=' pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-700 focus-visible:outline-none focus-visible:ring-blue-600 sm:text-sm sm:leading-6'
                  />
                  <ErrorMessage
                    name='lastName'
                    component='div'
                    className='text-red-500 text-sm'
                  />
                </div>
              </div>
            </div>
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
              <label
                htmlFor='age'
                className='block mt-2 text-sm font-medium leading-6 text-gray-900'
              >
                Age
              </label>
              <div className='mt-2'>
                <Field
                  id='age'
                  name='age'
                  type='text'
                  autoComplete='age'
                  maxLength={2}
                  required
                  className=' pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-700 focus-visible:outline-none focus-visible:ring-blue-600 sm:text-sm sm:leading-6'
                />
                <ErrorMessage
                  name='age'
                  component='div'
                  className='text-red-500 text-sm'
                />
              </div>
            </div>
            <div className='mb-6'>
              <label
                htmlFor='confirmPassword'
                className='mt-2 block text-sm font-medium leading-6 text-gray-900'
              >
                Confirm password
              </label>
              <div className='mt-2 relative'>
                <Field
                  id='password'
                  name='password'
                  type={showPassword ? "text" : "password"}
                  autoComplete='password'
                  required
                  className='pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-700 focus-visible:outline-none focus-visible:ring-blue-600 sm:text-sm sm:leading-6'
                />
                <div
                  className='absolute inset-y-0 right-2 flex items-center'
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <AiFillEyeInvisible className='text-gray-500 cursor-pointer' />
                  ) : (
                    <AiFillEye className='text-gray-500 cursor-pointer' />
                  )}
                </div>
                <ErrorMessage
                  name='password'
                  component='div'
                  className='text-red-500 text-sm'
                />
              </div>
            </div>
            <div className='mb-6'>
              <label
                htmlFor='confirmPassword'
                className='mt-2 block text-sm font-medium leading-6 text-gray-900'
              >
                Confirm password
              </label>
              <div className='mt-2 relative'>
                <Field
                  id='confirmPassword'
                  name='confirmPassword'
                  type={showConfirmPassword ? "text" : "password"}
                  autoComplete='confirmPassword'
                  required
                  className='pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-700 focus-visible:outline-none focus-visible:ring-blue-600 sm:text-sm sm:leading-6'
                />
                <div
                  className='absolute inset-y-0 right-2 flex items-center'
                  onClick={toggleConfirmPasswordVisibility}
                >
                  {showConfirmPassword ? (
                    <AiFillEyeInvisible className='text-gray-500 cursor-pointer' />
                  ) : (
                    <AiFillEye className='text-gray-500 cursor-pointer' />
                  )}
                </div>
                <ErrorMessage
                  name='confirmPassword'
                  component='div'
                  className='text-red-500 text-sm'
                />
              </div>
            </div>
            <div className='flex flex-col md:flex-row items-center justify-between mb-6'>
              <button
                type='submit'
                className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
              >
                Sign up
              </button>
            </div>
          </Form>
        </Formik>
        <p className='mt-10 text-center text-sm text-gray-500'>
          Already have an account?
          <Link
            to='/login'
            className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500'
          >
            &nbsp; Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default UserRegister;
