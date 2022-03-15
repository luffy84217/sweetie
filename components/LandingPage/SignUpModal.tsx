import { LogoIcon } from '../Logo';
import Modal, { ModalProps } from '../Modal'

const SignUpModal: React.FC<Omit<ModalProps, 'titleAboveModal'>> = (props) => {
  const title = (
    <div className="sm:mx-auto sm:w-full sm:max-w-md">
      <LogoIcon className="mx-auto h-12 w-auto" />
      <h2 className="mt-3 text-center text-3xl font-extrabold text-white">Sign in to your account</h2>
      <p className="mt-2 text-center text-sm font-medium text-pink-400">
        And start your journey
      </p>
    </div>
  );

  return (
    <Modal titleAboveModal={title} isOpen={props.isOpen} onClose={props.onClose}>
      <form className="space-y-6" action="#" method="POST">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email address
          </label>
          <div className="mt-1">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <div className="mt-1">
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
              Remember me
            </label>
          </div>

          <div className="text-sm">
            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
              Forgot your password?
            </a>
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-pink-400 hover:bg-pink-500 focus:outline-none transition-colors"
          >
            Sign in
          </button>
        </div>
      </form>

      <div className="mt-6">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">Or continue with</span>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-3">
          <div>
            <a
              href="#"
              className="group w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-[#3b5998] transition-colors"
            >
              <span className="sr-only">Sign in with Facebook</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 group-hover:fill-white" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                <path d="m4.9 10.3v-3.3c0-0.1 0.2-0.3 0.4-0.3h2.3v-2.4c-0.1-0.3-0.3-1.8 1.1-3.1c1.3-1.1 2.8-1.2 3.3-1.2q0.1 0 0.1 0h2.6c0.2 0 0.4 0.1 0.4 0.3v3.1c0 0.2-0.2 0.3-0.4 0.3c0 0-1.8 0-1.9 0q-1 0-1 0.9v2.1h2.9q0.2 0 0.3 0.1q0.1 0.1 0 0.3l-0.3 3.3c-0.1 0.2-0.2 0.3-0.4 0.3h-2.5v9c0 0.2-0.1 0.3-0.3 0.3h-3.7c-0.2 0-0.3-0.1-0.3-0.3v-9h-2.2c-0.2 0-0.4-0.2-0.4-0.4z"/>
              </svg>
            </a>
          </div>

          <div>
            <a
              href="#"
              className="group w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-[#ea4335] transition-colors"
            >
              <span className="sr-only">Sign in with Google</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 group-hover:fill-white" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                <path d="m10.2 8.6h9.4c0.1 0.5 0.2 1 0.2 1.6c0 5.7-3.8 9.8-9.6 9.8c-5.5 0-10-4.5-10-10c0-5.5 4.5-10 10-10c2.7 0 5 1 6.7 2.6l-2.7 2.6c-0.8-0.7-2.1-1.5-4-1.5c-3.4 0-6.2 2.8-6.2 6.3c0 3.5 2.8 6.3 6.2 6.3c4 0 5.4-2.8 5.7-4.3h-5.7v-3.4q0 0 0 0z"/>
              </svg>
            </a>
          </div>

          <div>
            <a
              href="#"
              className="group w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-[#00b900] transition-colors"
            >
              <span className="sr-only">Sign in with Line</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" aria-hidden="true" viewBox="0 0 20 20">
                <path className="fill-current group-hover:fill-white" d="m10 0c5.5 0 10 3.7 10 8.2c0 1.5-0.5 3-1.5 4.2q-0.1 0.1-0.2 0.3q-0.5 0.5-1.1 1.1c-2.7 2.5-7.3 5.6-7.9 5.2c-0.5-0.5 0.9-2.5-0.7-2.8q-0.2 0-0.4-0.1c-4.6-0.6-8.2-4-8.2-7.9c0-4.5 4.5-8.2 10-8.2z"/>
                <path className="fill-white group-hover:fill-[#00b900]" d="m3.7 10.2v-3.9c0-0.3 0.2-0.5 0.5-0.5c0.3 0 0.6 0.2 0.6 0.5v3.3h1.4c0.3 0 0.5 0.3 0.5 0.6c0 0.3-0.2 0.5-0.5 0.5h-2c-0.3 0-0.5-0.2-0.5-0.5zm12.5-1.4h-1.5v0.8h1.5c0.3 0 0.5 0.3 0.5 0.6c0 0.3-0.2 0.5-0.5 0.5h-2c-0.3 0-0.6-0.2-0.6-0.5v-3.9c0-0.3 0.3-0.5 0.6-0.5h2c0.3 0 0.5 0.2 0.5 0.5c0 0.3-0.2 0.6-0.5 0.6h-1.5v0.8h1.5c0.3 0 0.5 0.2 0.5 0.5v0.1c0 0.3-0.2 0.5-0.5 0.5zm-3.5 1.9q0 0-0.1 0q0 0 0 0q-0.1 0-0.1 0q0 0-0.1 0q-0.1 0-0.2 0q-0.1 0-0.2-0.2q0 0 0 0l-1.9-2.6v2.3c0 0.3-0.3 0.5-0.6 0.5c-0.3 0-0.5-0.2-0.5-0.5v-3.9c0-0.3 0.2-0.5 0.5-0.5c0.2 0 0.4 0.1 0.5 0.2l1.9 2.6v-2.3c0-0.3 0.2-0.5 0.5-0.5c0.3 0 0.6 0.2 0.6 0.5v3.9q0 0.1 0 0.1q0 0.1-0.1 0.1q0 0.1 0 0.1q0 0-0.1 0.1q0 0-0.1 0.1zm-5.5-4.4c0-0.3 0.2-0.5 0.5-0.5c0.3 0 0.5 0.2 0.5 0.5v3.9c0 0.3-0.2 0.5-0.5 0.5c-0.3 0-0.5-0.2-0.5-0.5z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </Modal>
  )
};

export default SignUpModal;
