"use client";

import React from "react";
import { siteContent } from "@/content/site-content";

const App = () => {
    const [openIndex, setOpenIndex] = React.useState(null);
    const faqSection = siteContent.faqSection;

    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
            <div
                className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-center gap-8 px-6">
                {faqSection.image && (
                    <img
                        className="max-w-sm w-full rounded-xl h-auto"
                        src={faqSection.image.src}
                        alt={faqSection.image.alt}
                    />
                )}
                <div className="flex-1">
                    <p className="text-indigo-600 dark:text-indigo-400 text-sm font-medium">{faqSection.eyebrow}</p>
                    <h1 className="text-3xl font-semibold">{faqSection.title}</h1>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 pb-4">
                        {faqSection.description}
                    </p>
                    {faqSection.items.map((faq, index) => (
                        <div
                            className="border-b border-slate-200 dark:border-slate-700 py-4 cursor-pointer"
                            key={index}
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}>
                            <div className="flex items-center justify-between">
                                <h3 className="text-base font-medium">
                                    {faq.question}
                                </h3>
                                <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 18 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={`${openIndex === index ? "rotate-180" : ""} transition-all duration-500 ease-in-out`}>
                                    <path
                                        d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round" />
                                </svg>
                            </div>
                            <p
                                className={`text-sm text-slate-500 dark:text-slate-400 transition-all duration-500 ease-in-out max-w-2xl ${openIndex === index ? "opacity-100 max-h-96 translate-y-0 pt-4" : "opacity-0 max-h-0 -translate-y-2"}`}>
                                {faq.answer}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default App;
