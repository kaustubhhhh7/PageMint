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
        primary: "border-transparent text-white bg-teal-700 hover:bg-teal-600 hover:shadow-lg focus:ring-teal-500",
        secondary: "border-slate-200 text-slate-700 bg-white hover:bg-slate-50 hover:shadow-sm focus:ring-teal-500",
        outline: "border-teal-700 text-teal-700 bg-transparent hover:bg-teal-50 focus:ring-teal-500"
    };

    const combinedStyles = `${baseStyles} hover:scale-[1.02] active:scale-[0.98] ${variants[variant] || variants.primary} ${className}`;

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
