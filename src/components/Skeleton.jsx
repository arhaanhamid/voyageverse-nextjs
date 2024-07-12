const Skeleton = () => {
  return (
    <div className="max-w-screen-xl mx-auto mb-10 bg-gray-900 rounded-2xl pb-10 p-2 shadow-custom-shadow">
      <main>
        <div className="w-full relative h-[24em] bg-gray-700 animate-pulse">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70"></div>
        </div>
        <div className="px-4 lg:px-0 mt-12 text-gray-400 max-w-screen-md mx-auto">
          <div className="h-3 bg-gray-700 animate-pulse rounded mb-4"></div>
          <div className="h-5 bg-gray-700 animate-pulse rounded mb-2"></div>
          <div className="flex items-center space-x-4">
            <div className="h-10 w-10 bg-gray-700 animate-pulse rounded-full"></div>
            <div className="flex flex-col space-y-1">
              <div className="h-3 bg-gray-700 animate-pulse rounded"></div>
              <div className="h-2 bg-gray-700 animate-pulse rounded"></div>
            </div>
          </div>
          <div className="mt-4">
            <div className="h-3 bg-gray-700 animate-pulse rounded mb-2"></div>
            <div className="h-2 bg-gray-700 animate-pulse rounded"></div>
          </div>
          <div className="text-center mt-4">
            <div className="h-2 bg-gray-700 animate-pulse rounded inline-block"></div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Skeleton;
