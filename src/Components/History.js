import React from "react";
import { useState } from "react";

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
    { title: "Cell Structure Quest", id: 4, progress: 20, image: "/images/leaf.jpg"},
  ];

  return (
    <div className="p-16 bg-white min-h-screen">


{/* History Section */}
<h2 className="text-4xl font-bold mb-6 font-Parkinsans text-black">History</h2>

<div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-40">
  {historyQuizzes.map((quiz) => {
    const [isFavorite, setIsFavorite] = useState(false); // State to manage favorite status

    const toggleFavorite = () => {
      setIsFavorite(!isFavorite); // Toggle favorite state
    };

    return (
      <div
        key={quiz.id}
        className="group bg-white shadow-sm rounded-lg text-center h-72 w-56 mx-auto transition-all"
      >
        {/* Progress Bar with Clickable Heart Icon */}
        <div className="flex items-center space-x-2 mb-3 px-4">
          <button
            onClick={toggleFavorite} // Toggle favorite on click
            className={`w-6 h-6 flex items-center justify-center rounded-full ${
              isFavorite ? "bg-red-500" : "bg-black"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              className="w-4 h-4"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </button>
          <div className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="absolute h-full bg-yellow-500"
              style={{ width: `${quiz.progress}%` }}
            ></div>
          </div>
        </div>

        {/* Hoverable Card */}
        <div className="group-hover:border-black group-hover:border-2 rounded-lg p-4">
          {/* Image Section */}
          <div className="h-52 w-44 bg-gray-100 rounded mb-3 flex items-center justify-center mx-auto">
            <img
              src={quiz.image}
              alt={quiz.title}
              className="h-full w-full object-cover rounded"
            />
          </div>

          {/* Quiz Title */}
          <p className="font-medium mb-3" style={{ fontSize: "20px" }}>
            {quiz.title}
          </p>

          {/* Try Button */}
          <button className="bg-yellow-500 text-white py-1 px-4 rounded text-sm hover:bg-yellow-600">
            Try
          </button>
        </div>
      </div>
    );
  })}
</div>




{/* Science Section */}
<h2 className="text-4xl font-bold mb-6 font-Parkinsans text-black">Science</h2>

<div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
  {scienceQuizzes.map((quiz) => {
    const [isFavorite, setIsFavorite] = useState(false); // State to manage favorite status

    const toggleFavorite = () => {
      setIsFavorite(!isFavorite); // Toggle favorite state
    };

    return (
      <div
        key={quiz.id}
        className="group bg-white shadow-sm rounded-lg text-center h-72 w-56 mx-auto transition-all"
      >
        {/* Progress Bar with Clickable Heart Icon */}
        <div className="flex items-center space-x-2 mb-3 px-4">
          <button
            onClick={toggleFavorite} // Toggle favorite on click
            className={`w-6 h-6 flex items-center justify-center rounded-full ${
              isFavorite ? "bg-red-500" : "bg-black"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              className="w-4 h-4"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </button>
          <div className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="absolute h-full bg-yellow-500"
              style={{ width: `${quiz.progress}%` }}
            ></div>
          </div>
        </div>

        {/* Hoverable Card */}
        <div className="group-hover:border-black group-hover:border-2 rounded-lg p-4">
          {/* Image Section */}
          <div className="h-52 w-44 bg-gray-100 rounded mb-3 flex items-center justify-center mx-auto">
            <img
              src={quiz.image}
              alt={quiz.title}
              className="h-full w-full object-cover rounded"
            />
          </div>

          {/* Quiz Title */}
          <p className="font-medium mb-3" style={{ fontSize: "20px" }}>
            {quiz.title}
          </p>

          {/* Try Button */}
          <button className="bg-yellow-500 text-white py-1 px-4 rounded text-sm hover:bg-yellow-600">
            Try
          </button>
        </div>
      </div>
    );
  })}
</div>


      <p className="text-center mt-44 text-black font-medium text-5xl">
        Give all our quizzes a shot— <br /> there's no way you won't find your <br /> favorite!
      </p>
    </div>

  );
};

export default history;
