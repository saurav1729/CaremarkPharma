import React, { useEffect, useState } from "react";
import { api } from "../service";

const ContactSubmissions = () => {
  const [contactSubmissions, setContactSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedMessage, setSelectedMessage] = useState(null);

  useEffect(() => {
    const fetchContactSubmissions = async () => {
      try {
        const response = await api.get("/api/contact/getContactInfo");
        if (response.data.success) {
          setContactSubmissions(response.data.data);
        } else {
          setError("Failed to fetch data.");
        }
      } catch (err) {
        setError("An error occurred while fetching data.");
      } finally {
        setLoading(false);
      }
    };

    fetchContactSubmissions();
  }, []);

  const handleViewMessage = (submission) => {
    setSelectedMessage(submission);
  };

  const closeModal = () => {
    setSelectedMessage(null);
  };



  const finalFormmat = (submission) => {
    const formattedDate = new Date(submission.createdAt).toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: '2-digit',
    });
    const formattedTime = new Date(submission.createdAt).toLocaleTimeString('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true, // Enables AM/PM format
    });
  
    return `${formattedDate} ${formattedTime}`;
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="bg-white shadow-xl sm:rounded-lg p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Recent Contact Form Submissions</h2>
      <div className="">
        <table className="divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th scope="col" className="px-6 py-3  text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Message</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {contactSubmissions.map((submission) => (
              <tr key={submission._id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{submission.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{submission.email}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {submission.message.split(' ').slice(0, 5).join(' ')}
                  {submission.message.split(' ').length > 5 ? '...' : ''}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{finalFormmat(submission)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <button 
                    className="text-blue-600 hover:underline" 
                    onClick={() => handleViewMessage(submission)}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedMessage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg md:max-h-[30rem] overflow-y-scroll scrollbar-none max-w-md w-full">
            <h3 className="text-lg font-semibold mb-4">Message Details</h3>
            <p className="text-gray-700 mb-2"><strong>Name:</strong> {selectedMessage.name}</p>
            <p className="text-gray-700 mb-2"><strong>Email:</strong> {selectedMessage.email}</p>
            <div><p className="text-gray-700 mb-4"><strong>Message:</strong> {selectedMessage.message}</p></div>

            <p className="text-gray-500 mb-4"><strong>Date:</strong> {finalFormmat(selectedMessage)}</p>
            <button 
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" 
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactSubmissions;

