import React from "react";

const FooterItems = ({ heading, items }) => {
    return (
        <section className="px-20 pt-8 w-auto">
            <h4 className="text-slate-200">{heading}</h4>
            <ul className="text-gray-400 text-sm pt-2">
                {items.map((fsub, index) => (
                    <li key={index} className="pt-1">
                        <a href={fsub.link} className="hover:underline flex ">
                            {fsub.icon && (
                                <span className="text-xl text-gray-400 hover:text-blue-500 pr-1 ">{fsub.icon}</span>
                            )}
                            {fsub.label}
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default FooterItems;
