import React from "react";
import { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { HiChevronRight } from "react-icons/hi";

const history = () => {
  const historyQuizzes = [
    { title: "From Colonies to Nationhood", id: 1, progress: 30, image: "/images/fungi.png" },
    { title: "Shifting Sands of Power", id: 2, progress: 50, image: "/images/sand.jpg" },
    { title: "Map It Right!", id: 3, progress: 70, image: "/images/map.jpg" },
    { title: "Pages Through Time", id: 4, progress: 90, image: "/images/book.jpg" },
  ];

  const scienceQuizzes = [
    { title: "Atoms in Harmony", id: 1, progress: 40, image: "/images/atom.jpg" },
    { title: "Periodic Puzzle", id: 2, progress: 60, image: "/images/element.jpg" },
    { title: "Optical Illusions", id: 3, progress: 80, image: "/images/optical.jpg" },
    { title: "Cell Structure Quest", id: 4, progress: 20, image: "/images/leaf.jpg" },
  ];

  return (
    <div className="p-4 sm:p-16 bg-white min-h-screen">
      {/* History Section */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl sm:text-4xl font-bold font-Parkinsans text-black">History</h2>
        <div className="flex items-center space-x-2 cursor-pointer text-black hover:text-red-600">
          <span className="text-sm font-medium">View more</span>
          <HiChevronRight className="w-4 h-4" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mb-10 mt-8 sm:mt-16">
        {historyQuizzes.map((quiz) => {
          const [isFavorite, setIsFavorite] = useState(false);
          const toggleFavorite = () => setIsFavorite(!isFavorite);

          return (
            <div
              key={quiz.id}
              className="group bg-white rounded-lg text-center h-72 sm:w-56 w-full mx-auto transition-all"
            >
              <div className="flex items-center space-x-2 mb-3 px-4">
                <button
                  onClick={toggleFavorite}
                  className={`w-6 h-6 flex items-center justify-center rounded-full ${
                    isFavorite ? "bg-red-500" : "bg-black"
                  }`}
                >
                  <AiFillHeart
                    className="w-4 h-4"
                    style={{ color: isFavorite ? "pink" : "white" }}
                  />
                </button>
                <div className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="absolute h-full bg-yellow-500"
                    style={{ width: `${quiz.progress}%` }}
                  ></div>
                </div>
              </div>

              <div className="group-hover:border-black group-hover:border-2 rounded-lg p-4">
                <div className="h-44 w-40 sm:h-52 sm:w-44 bg-gray-100 rounded mb-3 flex items-center justify-center mx-auto">
                  <img
                    src={quiz.image}
                    alt={quiz.title}
                    className="h-full w-full object-cover rounded"
                  />
                </div>
                <p className="font-medium mb-3 text-sm sm:text-lg">{quiz.title}</p>
                <button className="bg-yellow-500 text-white py-1 px-4 rounded text-sm hover:bg-yellow-600">
                  Try
                </button>
              </div>
            </div>
          );
        })}
      </div>



      {/* Science Section */}
      <div className="flex justify-between items-center mt-16 sm:mt-32">
        <h2 className="text-2xl sm:text-4xl font-bold font-Parkinsans text-black">Science</h2>
        <div className="flex items-center space-x-2 cursor-pointer text-black hover:text-red-600">
          <span className="text-sm font-medium">View more</span>
          <HiChevronRight className="w-4 h-4" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-16">
        {scienceQuizzes.map((quiz) => {
          const [isFavorite, setIsFavorite] = useState(false);
          const toggleFavorite = () => setIsFavorite(!isFavorite);

          return (
            <div
              key={quiz.id}
              className="group bg-white rounded-lg text-center h-72 sm:w-56 w-full mx-auto transition-all"
            >
              <div className="flex items-center space-x-2 mb-3 px-4">
                <button
                  onClick={toggleFavorite}
                  className={`w-6 h-6 flex items-center justify-center rounded-full ${
                    isFavorite ? "bg-red-500" : "bg-black"
                  }`}
                >
                  <AiFillHeart
                    className="w-4 h-4"
                    style={{ color: isFavorite ? "pink" : "white" }}
                  />
                </button>
                <div className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="absolute h-full bg-yellow-500"
                    style={{ width: `${quiz.progress}%` }}
                  ></div>
                </div>
              </div>

              <div className="group-hover:border-black group-hover:border-2 rounded-lg p-4">
                <div className="h-44 w-40 sm:h-52 sm:w-44 bg-gray-100 rounded mb-3 flex items-center justify-center mx-auto">
                  <img
                    src={quiz.image}
                    alt={quiz.title}
                    className="h-full w-full object-cover rounded"
                  />
                </div>
                <p className="font-medium mb-3 text-sm sm:text-lg">{quiz.title}</p>
                <button className="bg-yellow-500 text-white py-1 px-4 rounded text-sm hover:bg-yellow-600">
                  Try
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <p className="text-center mt-24 sm:mt-48 text-black font-medium text-3xl sm:text-5xl">
        Give all our quizzes a shot— <br /> there's no way you won't find your <br /> favorite!
      </p>
    </div>
  );
};

export default history;
