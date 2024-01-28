import { useEffect, useState } from "react";

function CookieBanner() {

    // Save it in local storage and don't show again

    // if (localStorage.getItem("cookieBanner") === "true") {
    //     return null;
    // }


    // localStorage.setItem("cookieBanner", "false");

    // console.log(localStorage.getItem("cookieBanner"));

    const [time, setTime] = useState(0);

    // Set time to dismiss cookie banner
    // 10 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            setTime(1);
        }, 10000);
        return () => clearTimeout(timer);
    }, []);

    if (time === 1) {
        return null;
    }
  return (
    <div>
      <div
        id="cookies-simple-with-dismiss-button"
        className="fixed bottom-0 start-1/2 transform -translate-x-1/2 z-[60] sm:max-w-4xl w-full mx-auto p-6"
      >
        <div className="p-4 bg-white border border-gray-200 rounded-xl shadow-sm  ">
          <div className="flex justify-between items-center gap-x-5 sm:gap-x-10">
            <h2 className="text-sm text-gray-600 ">
              By continuing to use this site you consent to the use of cookies
              in accordance with our{" "}
              <a
                className="inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium"
                href="#"
              >
                Cookies Policy.
              </a>
            </h2>
            <button
              type="button"
              className="p-2 inline-flex items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none"
              data-hs-remove-element="#cookies-simple-with-dismiss-button"
            >
              <span className="sr-only">Dismiss</span>
              <svg
                className="flex-shrink-0 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CookieBanner;
