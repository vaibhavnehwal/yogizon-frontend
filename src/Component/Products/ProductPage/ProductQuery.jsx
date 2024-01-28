import React from "react";

function ProductQuery() {
  return (
    <div className="m-[3rem] flex justify-between md:flex-row flex-col gap-4 items-center bg-gray-100 border-b rounded-xl py-3 px-4 md:py-4 md:px-5">
      <div>
        <div className="flex flex-col bg-white border shadow-sm rounded-xl">
          <div className="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5">
            <h3 className="text-lg font-bold text-gray-800">Have a Query?</h3>
            <p className="mt-2 text-gray-500">
              Fill in the form below and we will get back to you as soon as
              possible.
            </p>
          </div>
          <div className="p-4 md:p-5">
            <form action="#" className="flex flex-col gap-4">
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                id="input-label"
                className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                placeholder="Type your Name here"
              />
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                id="input-label"
                className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                placeholder="Type your Email here"
              />
              <label className="block text-sm font-medium mb-2">Comment</label>
              <textarea
                id="textarea-label"
                className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                rows="3"
                placeholder="Say hi..."
              ></textarea>
            </form>
          </div>
        </div>
      </div>
      <div>
        <img className="rounded-xl" src="https://source.unsplash.com/random/500x500"/>
      </div>
    </div>
  );
}

export default ProductQuery;
