import React from "react";

function ProductReviews() {
  return (
    <div className="mx-7 bg-white border shadow-sm rounded-xl">
        <div className="p-4 md:p-5">
            <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl lg:text-5xl lg:leading-tight text-center">Reviews</h1>
        </div>
      <div className="max-w-[85rem] px-4 py-10 bg-gray-100 rounded-b-xl sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex flex-col bg-white border border-gray-200 shadow-sm rounded-xl">
            <div className="flex-auto p-4 md:p-6">
              <p className="mt-3 sm:mt-6 text-base text-gray-800 md:text-xl">
                <em>
                    "I have been using this product for a while now and I am very happy with it. I would recommend it to anyone who wants to improve their health and fitness."
                </em>
              </p>
            </div>
            <div className="p-4 rounded-b-xl md:px-6">
              <div className="flex-shrink-0 group block">
                <div className="flex items-center">
                <span className="inline-flex items-center justify-center h-[2.875rem] w-[2.875rem] text-sm font-semibold leading-none rounded-full border border-gray-800 text-gray-800">NG</span>
                  <div className="ms-3">
                    <h3 className="font-semibold text-gray-800">Nicole Grazioso</h3>
                    <p className="text-sm font-medium text-gray-400">
                      nicole@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col bg-white border border-gray-200 shadow-sm rounded-xl">
            <div className="flex-auto p-4 md:p-6">
              <p className="mt-3 sm:mt-6 text-base text-gray-800 md:text-xl">
                <em>
                    "One of the best yoga courses I have ever had! I am so happy with this product and would recommend it to anyone who wants to improve their health and fitness."
                </em>
              </p>
            </div>

            <div className="p-4 rounded-b-xl md:px-6">
              <div className="flex-shrink-0 group block">
                <div className="flex items-center">
                <span className="inline-flex items-center justify-center h-[2.875rem] w-[2.875rem] text-sm font-semibold leading-none rounded-full border border-gray-800 text-gray-800">JT</span>
                  <div className="ms-3">
                    <h3 className="font-semibold text-gray-800">Josh Tyson</h3>
                    <p className="text-sm font-medium text-gray-400">
                      josh@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col bg-white border border-gray-200 shadow-sm rounded-xl ">
            <div className="flex-auto p-4 md:p-6">
              <p className="mt-3 sm:mt-6 text-base text-gray-800 md:text-xl ">
                <em>
                  "This is simply one of the best yoga courses I have ever had!"
                </em>
              </p>
            </div>

            <div className="p-4 rounded-b-xl md:px-6">
              <div className="flex-shrink-0 group block">
                <div className="flex items-center">
                <span className="inline-flex items-center justify-center h-[2.875rem] w-[2.875rem] text-sm font-semibold leading-none rounded-full border border-gray-800 text-gray-800">JD</span>
                  <div className="ms-3">
                    <h3 className="font-semibold text-gray-800">John Doe</h3>
                    <p className="text-sm font-medium text-gray-400">
                      john@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductReviews;
