import React from "react";

function ViewCard(props) {
  const title = props.title;
  const description = props.description;
  const price = props.price;
  const badgeDesc = props.badgeDesc;
  const duration = props.duration;
  return (
    <div>
      <div className="flex flex-col bg-white border shadow-sm rounded-xl">
        <div className="bg-gray-100 border-b flex justify-between items-center rounded-t-xl py-3 px-4 md:py-4 md:px-5">
          <p className="mt-1 text-xl text-gray-500">{price}</p>
          <button
            type="button"
            className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-gray-200 text-yellow-800 hover:bg-yellow-100 hover:text-yellow-800 disabled:opacity-50 disabled:pointer-events-none"
          >
            Buy Now
          </button>
        </div>
        <div className="p-4 md:p-5">
          <h3 className="text-lg font-bold text-gray-800">{title}</h3>
          <p className="mt-2 text-gray-500">{description}</p>

          <div className="mt-5">
            <table className="min-w-full divide-y divide-gray-200">
              <tbody className="divide-y divide-gray-200">
                <tr className="divide-x">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                    Price
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {price}
                  </td>
                </tr>

                <tr className="divide-x">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                    Duration
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {duration}
                  </td>
                </tr>
                <tr className="divide-x">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                        Category
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {badgeDesc}
                    </td>
                </tr>
                <tr className="divide-x">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                    Instructor
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    John Doe
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewCard;
