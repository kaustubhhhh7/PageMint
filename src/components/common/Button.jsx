import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({
    children,
    variant = 'primary',
    to = null,
    className = '',
    onClick,
    ...props
}) => {
    const baseStyles = "inline-flex items-center justify-center px-6 py-3 border text-base font-medium rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

    const variants = {
        primary: "border-transparent text-white bg-indigo-600 hover:bg-indigo-700 hover:shadow-lg focus:ring-indigo-500",
        secondary: "border-gray-300 text-gray-700 bg-white hover:bg-gray-50 hover:shadow-sm focus:ring-indigo-500",
        outline: "border-indigo-600 text-indigo-600 bg-transparent hover:bg-indigo-50 focus:ring-indigo-500"
    };

    const combinedStyles = `${baseStyles} ${variants[variant] || variants.primary} ${className}`;

    if (to) {
        return (
            <Link to={to} className={combinedStyles} {...props}>
                {children}
            </Link>
        );
    }

    return (
        <button className={combinedStyles} onClick={onClick} {...props}>
            {children}
        </button>
    );
};

export default Button;
