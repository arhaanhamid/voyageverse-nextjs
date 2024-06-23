const CreatePost = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <main className="mt-10">
        <div
          className="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative"
          style={{ height: 24 + "em" }}
        >
          <div className="absolute left-0 bottom-0 w-full h-full z-10 bg-gradient-to-b from-transparent to-black/70"></div>
          <img
            src="https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
            className="absolute left-0 top-0 w-full h-full z-0 object-cover"
          />
          <div className="p-4 absolute bottom-0 left-0 z-20">
            <a
              href="#"
              className="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2"
            >
              Nutrition
            </a>
            <h2 className="text-4xl font-semibold text-gray-100 leading-tight">
              Pellentesque a consectetur velit, ac molestie ipsum. Donec
              sodales, massa et auctor.
            </h2>
            <div className="flex mt-3">
              <img
                src="https://randomuser.me/api/portraits/men/97.jpg"
                className="h-10 w-10 rounded-full mr-2 object-cover"
              />
              <div>
                <p className="font-semibold text-gray-200 text-sm">
                  {" "}
                  Mike Sullivan{" "}
                </p>
                <p className="font-semibold text-gray-400 text-xs"> 14 Aug </p>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">
          <p className="pb-6">
            Advantage old had otherwise sincerity dependent additions. It in
            adapted natural hastily is justice. Six draw you him full not mean
            evil. Prepare garrets it expense windows shewing do an. She
            projection advantages resolution son indulgence. Part sure on no
            long life am at ever. In songs above he as drawn to. Gay was
            outlived peculiar rendered led six.
          </p>
        </div>
      </main>
    </div>
  );
};

export default CreatePost;
