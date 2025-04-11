import React, { useState, useRef } from 'react';
import { Upload } from 'lucide-react';
import { potatoDiseases } from './data/diseases';
import { DiseaseCard } from './components/DiseaseCard';

function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [matchedDisease, setMatchedDisease] = useState<{ disease: typeof potatoDiseases[0], similarity: number } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageUrl = e.target?.result as string;
        setSelectedImage(imageUrl);
        
        // Simulate disease detection with random matching
       
        const randomIndex = Math.floor(Math.random() * potatoDiseases.length);
        const similarity = Math.random() * 0.3 + 0.7; // Random similarity between 70-100%
        setMatchedDisease({
          disease: potatoDiseases[randomIndex],
          similarity
        });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Potato Disease Detector</h1>
          <p className="text-gray-600">Upload a photo of your potato plant to identify potential diseases</p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 transform transition-all hover:shadow-2xl">
          <div 
            className="border-3 border-dashed border-gray-200 rounded-xl p-12 text-center cursor-pointer hover:border-blue-400 hover:bg-blue-50 transition-all duration-300"
            onClick={() => fileInputRef.current?.click()}
          >
            <Upload className="mx-auto mb-6 text-blue-500" size={64} />
            <p className="text-xl text-gray-700 mb-2 font-medium">Click to upload or drag and drop</p>
            <p className="text-sm text-gray-500">PNG, JPG up to 10MB</p>
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              accept="image/*"
              onChange={handleImageUpload}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {selectedImage && (
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900">Uploaded Image</h2>
              </div>
              <img 
                src={selectedImage} 
                alt="Uploaded potato"
                className="w-full h-[400px] object-cover"
              />
            </div>
          )}

          {matchedDisease && (
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900">Detected Disease</h2>
                <div className="mt-2 inline-block bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                  {(matchedDisease.similarity * 100).toFixed(1)}% match
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{matchedDisease.disease.name}</h3>
                <p className="text-gray-600 mb-6">{matchedDisease.disease.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Symptoms:</h4>
                  <ul className="space-y-2">
                    {matchedDisease.disease.symptoms.map((symptom, index) => (
                      <li key={index} className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-red-400 rounded-full mt-2 mr-3"></span>
                        <span className="text-gray-600">{symptom}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Solutions:</h4>
                  <ul className="space-y-2">
                    {matchedDisease.disease.solutions.map((solution, index) => (
                      <li key={index} className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-green-400 rounded-full mt-2 mr-3"></span>
                        <span className="text-gray-600">{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
