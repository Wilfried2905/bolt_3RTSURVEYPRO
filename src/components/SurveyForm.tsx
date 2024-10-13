import React, { useState } from 'react';
import { MapPin } from 'lucide-react';

interface SurveyFormProps {
  surveyType: string;
  onComplete: () => void;
}

const SurveyForm: React.FC<SurveyFormProps> = ({ surveyType, onComplete }) => {
  const [formData, setFormData] = useState({
    companyName: '',
    representativeName: '',
    phoneContact1: '',
    phoneContact2: '',
    email: '',
    technicianName: '',
    surveyDate: new Date().toISOString().split('T')[0],
    location: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    onComplete();
  };

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-4">Survey: {surveyType}</h2>
      <h3 className="text-xl font-semibold mb-4">Identification du Client</h3>
      
      <form onSubmit={handleSubmit}>
        {/* ... (form fields) ... */}
        
        <div className="flex items-center justify-between mt-6">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Suivant
          </button>
        </div>
      </form>
    </div>
  );
};

export default SurveyForm;
