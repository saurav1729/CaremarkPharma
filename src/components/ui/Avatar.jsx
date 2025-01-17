import React from 'react';

export const Avatar = ({ className, ...props }) => (
  <div className={`avatar ${className}`} {...props} />
);

export const AvatarImage = ({ src, alt, className }) => (
  <div className={`w-24 rounded-full ${className}`}>
    <img src={src} alt={alt} />
  </div>
);

export const AvatarFallback = ({ children, className }) => (
  <div className={`w-24 rounded-full bg-neutral-focus text-neutral-content flex items-center justify-center ${className}`}>
    <span>{children}</span>
  </div>
);



export const Badge = ({ children, className }) => (
  <div className={`badge ${className}`}>
    {children}
  </div>
);



export const Card = ({ className, children }) => (
  <div className={`card bg-base-100 shadow-xl ${className}`}>
    {children}
  </div>
);

export const CardContent = ({ className, children }) => (
  <div className={`card-body ${className}`}>
    {children}
  </div>
);



export const Separator = ({ className, ...props }) => (
  <div className={`divider ${className}`} {...props} />
);







