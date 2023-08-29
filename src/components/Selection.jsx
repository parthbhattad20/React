import React from 'react';

const SelectionSection = () => {
  return (
    <div name="selection" id="selection" className="bg-gray-100 py-12" >
      <div className="container mx-auto text-center text-justify  text-center max-w-[1240px] mx-auto px-8 sm:px-16 lg:px-32 py-16">
        <h2 className="text-3xl font-semibold mb-4">Selection Process</h2>
        <p className="text-gray-600">
          We are always on the lookout for talented players to join our cricket team. Our selection process is
          thorough and based on a combination of skill, dedication, and team spirit. If you're passionate about
          cricket and ready to give your best, we encourage you to register for our selection trials.
        </p>
        <button className="mt-6 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
          Register for Selection
        </button>
      </div>
    </div>
  );
};

export default SelectionSection;
