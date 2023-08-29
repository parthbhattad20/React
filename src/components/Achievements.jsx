import React from 'react';

const achievementsData = [
  {
    title: "Championship Title 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Championship Title 2",
    description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Championship Title 3",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  },
];

const AchievementsSection = () => {
  return (
    <div name="achievements" className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">Our Achievements</h2>
        <div className="grid gap-8 lg:grid-cols-3">
          {achievementsData.map((achievement, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-lg font-semibold mb-2">{achievement.title}</h3>
              <p className="text-gray-600">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AchievementsSection;
