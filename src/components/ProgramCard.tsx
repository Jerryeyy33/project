import React from 'react';

interface ProgramCardProps {
  title: string;
  description: string;
  link: string;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ title, description, link }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a href={link} className="text-blue-500 hover:underline">
        Learn More
      </a>
    </div>
  );
};

export default ProgramCard;