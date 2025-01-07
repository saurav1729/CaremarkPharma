import React from 'react';

const FormNavigation = ({ steps, currentStep }) => (
  <nav className="mb-4">
    <ol className="flex items-center w-full p-2 space-x-2 text-xs font-medium text-center text-gray-500 bg-white border border-gray-200 rounded-lg shadow-sm dark:text-gray-400 dark:bg-gray-800 dark:border-gray-700">
      {steps.map((step, index) => (
        <li
          key={index}
          className={`flex items-center ${
            index <= currentStep ? 'text-blue-600 dark:text-blue-500' : ''
          }`}
        >
          <span className="flex items-center justify-center w-5 h-5 mr-2 text-xs border border-blue-600 rounded-full shrink-0 dark:border-blue-500">
            {index + 1}
          </span>
          {step.name}
          {index < steps.length - 1 && (
            <svg
              className="w-3 h-3 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 12 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m7 9 4-4-4-4M1 9l4-4-4-4"
              />
            </svg>
          )}
        </li>
      ))}
    </ol>
  </nav>
);

export default FormNavigation;

