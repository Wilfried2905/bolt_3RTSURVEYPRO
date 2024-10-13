import React, { useState } from 'react';

interface PrivacyPolicyProps {
  surveyType: string;
  onAccept: () => void;
  onCancel: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ surveyType, onAccept, onCancel }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleAccept = () => {
    if (isChecked) {
      onAccept();
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Politique de Confidentialité et Protection des Données à Caractère Personnel</h2>
      <h3 className="text-xl font-semibold mb-2">Survey: {surveyType}</h3>
      
      <div className="max-h-96 overflow-y-auto mb-4 text-sm">
        <h4 className="font-semibold mb-2">1. Introduction</h4>
        <p className="mb-2">
          Chez 3R TECHNOLOGIE, nous prenons très au sérieux la protection des données à caractère personnel de nos clients. Ce document décrit de manière claire et transparente la manière dont nous collectons, utilisons, protégeons et partageons vos informations personnelles.
        </p>
        
        {/* ... (rest of the policy text) ... */}
        
        <h4 className="font-semibold mt-4 mb-2">10. Contact</h4>
        <p>
          Pour toute question concernant cette politique, veuillez nous contacter à l'adresse suivante : <a href="mailto:infos@3rtechnologie.com" className="text-blue-600 hover:underline">infos@3rtechnologie.com</a>. Nous sommes disponibles pour répondre à toutes vos interrogations et vous fournir des informations complémentaires sur la gestion de vos données personnelles.
        </p>
      </div>
      
      <div className="flex items-center mb-4">
        <input
          type="checkbox"
          id="accept-policy"
          className="mr-2"
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
        />
        <label htmlFor="accept-policy" className="text-sm">
          J'ai lu et j'accepte la politique de confidentialité
        </label>
      </div>
      
      <div className="flex justify-end space-x-4">
        <button
          onClick={onCancel}
          className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
        >
          Annuler
        </button>
        <button
          onClick={handleAccept}
          disabled={!isChecked}
          className={`px-4 py-2 rounded ${
            isChecked
              ? 'bg-blue-600 text-white hover:bg-blue-700'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          Valider
        </button>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
