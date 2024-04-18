import React, { useState, Fragment } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

///Header Bar
const Header = () => {
  const [sideOverIsOpen, setSideOverIsOpen] = useState(false);

  return (
    <div className="Header ">
      <div
        className="Container  flex  justify-between items-center md:p-10 p-5  "
        style={{ background: "#000" }}
      >
        <h2
          className="text-white  font-extrabold  "
          style={{ fontSize: "29px" }}
        >
          LOGO
        </h2>
        <div className="hidden lg:block  ">
          <div className="flex gap-x-10   ">
            <div className="flex space-x-20  item-center">
              <h2 className="text-white text-base">Home</h2>
              <h2 className="text-white text-base">About Us</h2>
              <h2 className="text-white text-base">Portfolio</h2>
              <h2 className="text-white text-base">News</h2>
            </div>
            <button
              className=" rounded-md  text-white "
              style={{
                width: "131.771px",
                height: "41.343px",
                background: "#FA9021",
              }}
            >
              Contact Us
            </button>
          </div>
        </div>

        <div className="lg:hidden block">
          <Bars3Icon
            className="h-6 w-6 text-white "
            onClick={() => {
              setSideOverIsOpen(true);
            }}
          />
        </div>

        {/* Side bar  */}

        <Transition.Root show={sideOverIsOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-10"
            onClose={setSideOverIsOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-in-out duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                  <Transition.Child
                    as={Fragment}
                    enter="transform transition ease-in-out duration-500 sm:duration-700"
                    enterFrom="translate-x-full"
                    enterTo="translate-x-0"
                    leave="transform transition ease-in-out duration-500 sm:duration-700"
                    leaveFrom="translate-x-0"
                    leaveTo="translate-x-full"
                  >
                    <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                      <Transition.Child
                        as={Fragment}
                        enter="ease-in-out duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in-out duration-500"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                          <button
                            type="button"
                            className="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                            onClick={() => {
                              setSideOverIsOpen(false);
                            }}
                          >
                            <span className="absolute -inset-2.5" />
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </Transition.Child>
                      <div className="flex h-full flex-col overflow-y-scroll bg-zinc-950 py-6 shadow-xl">
                        <div className="px-4 sm:px-6">
                          <Dialog.Title className="text-base  font-semibold leading-6 text-gray-900">
                            <h2
                              className="font-extrabold  text-white "
                              style={{ fontSize: "19px" }}
                            >
                              LOGO
                            </h2>
                          </Dialog.Title>
                        </div>
                        <div className="relative mt-6 flex-1 px-4 sm:px-6">
                          {/* Your content */}

                          <div className="flex  flex-col  ">
                            <div className="flex  flex-col gap-y-5 ">
                              <h2 className=" text-white text-base">Home</h2>
                              <h2 className=" text-white text-base">
                                About Us
                              </h2>
                              <h2 className=" text-white text-base">
                                Portfolio
                              </h2>
                              <h2 className=" text-white text-base">News</h2>
                            </div>
                            <button
                              className=" rounded-md  mt-6 text-white "
                              style={{
                                width: "131.771px",
                                height: "41.343px",
                                background: "#FA9021",
                              }}
                            >
                              Contact Us
                            </button>
                          </div>

                          {/* my content end here */}
                        </div>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      </div>
    </div>
  );
};

export default Header;
