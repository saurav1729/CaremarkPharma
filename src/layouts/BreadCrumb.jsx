import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/20/solid';

const Breadcrumb = ({ customLabels = {} }) => {
  const location = useLocation();
  const params = useParams();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const formatLabel = (path) => {
    // Check if there's a custom label for this path
    if (customLabels[path]) {
      return customLabels[path];
    }
    // Check if this is a parameter (starts with ':')
    if (path.startsWith(':')) {
      const paramKey = path.slice(1);
      return params[paramKey] || path;
    }
    // Default: capitalize first letter and replace hyphens with spaces
    return path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, ' ');
  };

  return (
    <nav className="flex mb-8" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <Link to="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
            <HomeIcon className="w-4 h-4 mr-2" />
            Home
          </Link>
        </li>
        {pathnames.map((path, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          const label = formatLabel(path);

          return (
            <li key={path} aria-current={isLast ? "page" : undefined}>
              <div className="flex items-center">
                <ChevronRightIcon className="w-6 h-6 text-gray-400" />
                {isLast ? (
                  <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
                    {label}
                  </span>
                ) : (
                  <Link
                    to={routeTo}
                    className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white"
                  >
                    {label}
                  </Link>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;

