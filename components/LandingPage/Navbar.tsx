import { FC, Fragment, MouseEventHandler, useEffect, useRef, useState } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { GlobeIcon } from '@heroicons/react/solid';
import { MenuIcon, ChevronDownIcon, XIcon, ChevronUpIcon } from '@heroicons/react/outline';
import { navigation } from '../../config/landingPage';
import useScroll from '../../hooks/useScroll';
import { LogoIcon, LogoText } from '../Logo';

interface NavBarProps {
  onSignUpClick?: () => void;
}

const Navbar: FC<NavBarProps> = (props) => {
  const navEl = useRef<HTMLDivElement>(null);
  const [isColored, setIsColored] = useState(false);
  const scrollY = useScroll();

  const handleSignUpClick: MouseEventHandler<HTMLAnchorElement> = () => {
    props.onSignUpClick?.();
  };

  useEffect(() => {
    const navHeight = navEl.current?.offsetHeight;

    if (navHeight) {
      setIsColored(scrollY > navHeight);
    }
  }, [scrollY])

  return (
    <Popover as="nav" className={`relative bg-${isColored ? 'pink-400' : 'transparent'} transition-colors shadow-inner`}>
      {/* desktop device */}
      <div ref={navEl} className="flex justify-between items-center max-w-7xl mx-auto px-4 py-3 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
        <a href="#" className="flex items-center justify-start lg:w-0 lg:flex-1">
          <span className="sr-only">Sweetie</span>
          <LogoIcon className="transition-colors" color={isColored ? 'white' : 'origin'} width={39} height={42} />
          <LogoText color="white" className="ml-2" width={113} height={32} />
        </a>
        {/* mobilde device */}
        <div className="-mr-2 -my-2 md:hidden">
          <Popover.Button className="bg-transparent rounded-md p-2 inline-flex items-center justify-center text-white focus:outline-none">
            <span className="sr-only">Open menu</span>
            <MenuIcon className="h-6 w-6" aria-hidden="true" />
          </Popover.Button>
        </div>
        <Popover.Group as="nav" className="hidden md:flex space-x-10">
          <Popover className="relative">
            {({ open }) => (
              <>
                <Popover.Button
                  className="group bg-transparent rounded-md inline-flex items-center text-base font-medium hover: text-white focus:outline-none"
                >
                  <span>Safety</span>
                  <ChevronDownIcon
                    className={`${!open ? 'block' : 'hidden'} ml-2 h-5 w-5 group-hover:text-white`}
                    aria-hidden="true"
                  />
                  <ChevronUpIcon
                    className={`${open ? 'block' : 'hidden'} ml-2 h-5 w-5 group-hover:text-white`}
                    aria-hidden="true"
                  />
                </Popover.Button>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform w-screen max-w-md lg:max-w-lg lg:ml-0 lg:-left-8 lg:-translate-x-0">
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                      <div className="relative grid gap-6 bg-pink-400 px-5 py-3 sm:gap-8 sm:p-8 lg:grid-rows-2">
                        {navigation.safetys.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="-m-3 p-3 flex items-start rounded-lg"
                          >
                              <p className="text-base font-medium text-white">{item.name}</p>
                          </a>
                        ))}
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>

          <a href="#" className="text-base font-medium text-white">
            Pricing
          </a>
        </Popover.Group>
        
        <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
          <GlobeIcon className="inline-block h-6 w-6 text-white" />
          <select
            id="language"
            name="language"
            title="language"
            className="appearance-none bg-transparent py-2 px-3 text-base text-white focus:outline-none sm:text-sm"
            defaultValue="English"
          >
            <option>English</option>
            <option>Chinese (Traditional)</option>
          </select>
          <a
            href="#"
            className="whitespace-nowrap inline-flex items-center justify-center bg-white hover:bg-gray-100 px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-pink-400 hover:text-pink-500 transition-colors"
            onClick={handleSignUpClick}
          >
            Sign in
          </a>
        </div>
      </div>
      {/* mobile device */}
      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <LogoIcon className="transition-colors" color="origin" width={27} height={32} />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-transparent rounded-md p-2 inline-flex items-center justify-center text-black focus:outline-none">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="py-3 px-5">
              <a href="#" className="block text-base font-medium text-black">
                Safety
              </a>
              <a href="#" className="block text-base font-medium text-black">
                Pricing
              </a>
              <div className="mt-6">
                <a
                  href="#"
                  className="w-full flex items-center justify-center bg-gradient-to-r from-pink-400 to-purple-400 bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:from-pink-500 hover:to-purle-500"
                >
                  Sign up
                </a>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Existing customer? 
                  <a href="#" className=" text-black" onClick={handleSignUpClick}>
                    Sign in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default Navbar;
