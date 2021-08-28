import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";

function Index() {
  return (
    <div className="w-full px-4 pt-16">
      <div className="w-full max-w-md p-2 mx-auto bg-white rounded-2xl">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>What is your refund policy?</span>
                <ChevronUpIcon
                  className={`${
                    open ? "transform rotate-180" : ""
                  } w-5 h-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                <div className="grid grid-cols-1">
                  <div className="grid grid-cols-2 border-b-2  py-3">
                    <div>Air Conditioner</div>
                    <div>Yes (Manual)</div>
                  </div>
                  <div className="grid grid-cols-2 border-b-2 py-3">
                    <div>Air Conditioner</div>
                    <div>Yes (Manual)</div>
                  </div>
                  <div className="grid grid-cols-2 border-b-2 py-3">
                    <div>Air Conditioner</div>
                    <div>Yes (Manual)</div>
                  </div>
                  <div className="grid grid-cols-2 border-b-2 py-3">
                    <div>Air Conditioner</div>
                    <div>Yes (Manual)</div>
                  </div>
                  <div className="grid grid-cols-2 border-b-2 py-3">
                    <div>Air Conditioner</div>
                    <div>Yes (Manual)</div>
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>Do you offer technical support?</span>
                <ChevronUpIcon
                  className={`${
                    open ? "transform rotate-180" : ""
                  } w-5 h-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                No.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}

export default Index;
