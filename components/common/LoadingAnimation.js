import React from 'react';

const LoadingAnimation = () => {
  return (
    <div className="container ml-40">
      <div className="p-4">
        {/* 1st Line - Quick Overview Title */}
        <div className="animate-pulse space-y-4">
          <div className="h-6 bg-gray-300 rounded w-3/4"></div>
          <div className="h-6 bg-gray-300 rounded w-1/2"></div>
        </div>

        {/* 2nd Line - Article Description */}
        <div className="animate-pulse space-y-4 mt-4">
          <div className="h-4 bg-gray-300 rounded w-3/4"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2"></div>
        </div>

        {/* 3rd Line - Author Image, Name, Published Date, and Read Time */}
        <div className="flex flex-col md:flex-row items-center justify-center mb-6 mt-4">
          {/* Author Image (Loading State) */}
          <div className="h-12 w-12 md:h-16 md:w-16 bg-gray-300 rounded-full mb-4 md:mb-0 md:mr-4"></div>

          {/* Author Details (Loading State) */}
          <div className="text-center md:text-left animate-pulse space-y-2">
            <div className="h-3 bg-gray-300 rounded w-16"></div>
            <div className="h-2 bg-gray-300 rounded w-12"></div>
          </div>
        </div>

        {/* Article Image (Loading State) */}
        <div className="animate-pulse">
          <div className="h-96 bg-gray-300 rounded-lg w-full lg:w-3/4 mt-10 mb-11"></div>
        </div>

        {/* Main Content Section (Loading State) */}
        <div className="max-w-[770px] mx-auto">
          <div className="animate-pulse space-y-4">
            <div className="h-6 bg-gray-300 rounded"></div>
            <div className="h-12 bg-gray-300 rounded w-3/4"></div>
            <div className="h-6 bg-gray-300 rounded w-1/2"></div>
          </div>

          <div className="mt-12">
            {/* Loading State for Content Sections */}
            <div className="animate-pulse space-y-4">
              <div className="h-6 bg-gray-300 rounded w-full"></div>
              <div className="h-12 bg-gray-300 rounded w-3/4"></div>
              <div className="h-6 bg-gray-300 rounded w-1/2"></div>
            </div>

            {/* Loading State for Content Sections */}
            <div className="animate-pulse space-y-4 mt-4">
              <div className="h-6 bg-gray-300 rounded w-full"></div>
              <div className="h-12 bg-gray-300 rounded w-3/4"></div>
              <div className="h-6 bg-gray-300 rounded w-1/2"></div>
            </div>

            {/* Loading State for Content Sections */}
            <div className="animate-pulse space-y-4 mt-4">
              <div className="h-6 bg-gray-300 rounded w-full"></div>
              <div className="h-12 bg-gray-300 rounded w-3/4"></div>
              <div className="h-6 bg-gray-300 rounded w-1/2"></div>
            </div>

            {/* Loading State for Content Sections */}
            <div className="animate-pulse space-y-4 mt-4">
              <div className="h-6 bg-gray-300 rounded w-full"></div>
              <div className="h-12 bg-gray-300 rounded w-3/4"></div>
              <div className="h-6 bg-gray-300 rounded w-1/2"></div>
            </div>

            {/* Loading State for Content Sections */}
            <div className="animate-pulse space-y-4 mt-4">
              <div className="h-6 bg-gray-300 rounded w-full"></div>
              <div className="h-12 bg-gray-300 rounded w-3/4"></div>
              <div className="h-6 bg-gray-300 rounded w-1/2"></div>
            </div>

            {/* Loading State for Content Sections */}
            <div className="animate-pulse space-y-4 mt-4">
              <div className="h-6 bg-gray-300 rounded w-full"></div>
              <div className="h-12 bg-gray-300 rounded w-3/4"></div>
              <div className="h-6 bg-gray-300 rounded w-1/2"></div>
            </div>
          </div>

          {/* Button (Loading State) */}
          <div className="animate-pulse mt-10">
            <div className="h-12 bg-gray-300 rounded w-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingAnimation;
