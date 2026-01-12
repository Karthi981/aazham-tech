import React from "react";

interface Feature {
    
    title: string;
    description: string;
    image: string;
}


const FeatureCard = ({ feature }: { feature: Feature }) => (
    <div className="bg-white rounded-lg border border-gray-200 p-8 flex flex-col">
      <h3 className="text-xl font-bold mb-4 text-gray-800">
        {feature.title}
      </h3>
  
      <p className="text-gray-600 text-base leading-relaxed mb-6">
        {feature.description}
      </p>
  
      <div className="mt-auto">
        <div className="relative overflow-hidden rounded-lg">
          <img
            src={feature.image}
            alt={feature.title}
            className="w-full h-56 object-contain"
          />
        </div>
      </div>
    </div>
  );
  
export default FeatureCard;