import React from "react";

function MediaAvatar() {
  return (
    <div>
      <div className="flex-shrink-0 group block">
        <div className="flex items-center">
          <img
            className="inline-block flex-shrink-0 h-[3.875rem] w-[3.875rem] rounded-full"
            src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
            alt="Image Description"
          />
          <div className="ms-3">
            <h3 className="font-semibold text-gray-800">
              John Doe
            </h3>
            <p className="text-sm font-medium text-gray-400">john@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MediaAvatar;
