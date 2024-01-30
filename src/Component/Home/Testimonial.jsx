import React from 'react'

function Testimonial() {
  return (
    <div>
<div className="relative overflow-hidden">
  <div className="max-w-[85rem] px-4 py-12 sm:px-6 lg:px-8 lg:py-16 mx-auto">
    <div aria-hidden="true" className="flex absolute start-0 -z-[1]">
      {/* <div className="bg-[#ffb606] opacity-20 blur-3xl w-[1036px] h-[300px]"></div> */}
    </div>

    <div className="lg:grid lg:grid-cols-6 lg:gap-8 lg:items-center">
      <div className="hidden lg:block lg:col-span-2">
        <img className="rounded-xl" src="https://images.unsplash.com/photo-1444312645910-ffa973656eba?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image Description"/>
      </div>

      <div className="lg:col-span-4">
        <blockquote>

          <p className="text-xl font-medium text-gray-800 lg:text-2xl lg:leading-normal">
            To say that switching to Preline has been life-changing is an understatement. My business has tripled and I got my life back.
          </p>

          <footer className="mt-6">
            <div className="flex items-center">
              <div className="lg:hidden flex-shrink-0">
                <img className="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1671726203390-cdc4354ee2eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Image Description"/>
              </div>
              <div className="ms-4 lg:ms-0">
                <p className="font-medium text-gray-800">
                  Nicole Grazioso
                </p>
                <p className="text-sm text-gray-600">
                  Head of Finance
                </p>
              </div>
            </div>
          </footer>
        </blockquote>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Testimonial