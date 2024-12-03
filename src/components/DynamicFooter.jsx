import React from 'react';

const DynamicFooter = () => {
    const currentYear = new Date().getFullYear(); // Dynamically gets the current year

    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className=" mx-auto text-center">
                <p className="text-sm md:text-base">
                    © {currentYear} EduSkills Foundation – All Rights Reserved
                </p>
            </div>
        </footer>
    );
};

export default DynamicFooter;
