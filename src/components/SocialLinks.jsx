import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function SocialLinks() {
    const socialLinks = [
        { icon: <FaLinkedin className="text-white hover:text-[#0A66C2]" />, url: 'https://www.linkedin.com/in/your-linkedin-id/' }, // LinkedIn Blue
        { icon: <FaGithub className="text-white hover:text-[#171515]" />, url: 'https://github.com/Rushali8' }, // GitHub Black
    ];

    return (
        <section id="social-links" className="py-10 bg-gray-800">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-2xl sm:text-3xl font-bold mb-6">Connect with Me</h2>
                <div className="flex justify-center space-x-6">
                    {socialLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.url}
                            className="text-2xl sm:text-3xl transition-colors duration-300"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {link.icon}
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default SocialLinks;
