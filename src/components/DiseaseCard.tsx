import React from 'react';
import type { PotatoDisease } from '../data/diseases';

interface DiseaseCardProps {
  disease: PotatoDisease;
  similarity?: number;
}

export function DiseaseCard({ disease, similarity }: DiseaseCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img 
        src={disease.imageUrl} 
        alt={disease.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-bold text-gray-900">{disease.name}</h3>
          {similarity !== undefined && (
            <span className="text-sm font-semibold text-gray-600">
              {(similarity * 100).toFixed(1)}% match
            </span>
          )}
        </div>
        <p className="text-gray-600 mb-4">{disease.description}</p>
        
        <div className="mb-4">
          <h4 className="font-semibold text-gray-900 mb-2">Symptoms:</h4>
          <ul className="list-disc list-inside text-gray-600">
            {disease.symptoms.map((symptom, index) => (
              <li key={index}>{symptom}</li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Solutions:</h4>
          <ul className="list-disc list-inside text-gray-600">
            {disease.solutions.map((solution, index) => (
              <li key={index}>{solution}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}