import React from "react";

function Tabs(props) {
  const tabId1 = props.tabId1;
  const tabId2 = props.tabId2;
  const tabId3 = props.tabId3;
  const tabTitle1 = props.tabTitle1;
  const tabTitle2 = props.tabTitle2;
  const tabTitle3 = props.tabTitle3;
  const tabContent1 = props.tabContent1;
  const tabContent2 = props.tabContent2;
  const tabContent3 = props.tabContent3;
  return (
    <div className="flex justify-between items-center w-full flex-col px-5">
      <nav
        className="relative w-full z-0 flex justify-center items-center border rounded-xl overflow-hidden "
        aria-label="Tabs"
        role="tablist"
      >
        <div className="w-full flex justify-center items-center">
          <button
            type="button"
            className="hs-tab-active:border-b-blue-600 hs-tab-active:text-gray-900 relative min-w-0 flex-1 bg-white first:border-s-0 border-s border-b-2 py-4 px-4 text-gray-500 hover:text-gray-700 text-sm font-medium text-center overflow-hidden hover:bg-gray-50 focus:z-10 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none active"
            id="bar-with-underline-item-1"
            data-hs-tab="#bar-with-underline-1"
            aria-controls="bar-with-underline-1"
            role="tab"
          >
            {tabTitle1}
          </button>
          <button
            type="button"
            className="hs-tab-active:border-b-blue-600 hs-tab-active:text-gray-900 relative min-w-0 flex-1 bg-white first:border-s-0 border-s border-b-2 py-4 px-4 text-gray-500 hover:text-gray-700 text-sm font-medium text-center overflow-hidden hover:bg-gray-50 focus:z-10 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none"
            id="bar-with-underline-item-2"
            data-hs-tab="#bar-with-underline-2"
            aria-controls="bar-with-underline-2"
            role="tab"
          >
            {tabTitle2}
          </button>
          <button
            type="button"
            className="hs-tab-active:border-b-blue-600 hs-tab-active:text-gray-900 relative min-w-0 flex-1 bg-white first:border-s-0 border-s border-b-2 py-4 px-4 text-gray-500 hover:text-gray-700 text-sm font-medium text-center overflow-hidden hover:bg-gray-50 focus:z-10 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none"
            id="bar-with-underline-item-3"
            data-hs-tab="#bar-with-underline-3"
            aria-controls="bar-with-underline-3"
            role="tab"
          >
            {tabTitle3}
          </button>
        </div>
      </nav>

      <div className="mt-3">
        <div
          id="bar-with-underline-1"
          role="tabpanel"
          aria-labelledby="bar-with-underline-item-1"
        >
          {tabContent1}
        </div>
        <div
          className="hidden"
          id="bar-with-underline-2"
          role="tabpanel"
          aria-labelledby="bar-with-underline-item-2"
        >
          {tabContent2}
        </div>
        <div
          className="hidden"
          id="bar-with-underline-3"
          role="tabpanel"
          aria-labelledby="bar-with-underline-item-3"
        >
          {tabContent3}
        </div>
      </div>
    </div>
  );
}

export default Tabs;
