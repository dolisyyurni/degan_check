import React from "react";
import { MapPin, Clock, Mail } from "lucide-react";

interface ContactItemData {
    title: string;
    subtitle: string;
    icon: React.ReactNode;
}

const data: ContactItemData[] = [
    {
        title: "Visit Us",
        subtitle: "Lampung, Indonesia",
        icon: (
            <MapPin className="h-6 w-6 text-gray-600 group-hover:text-primary transition-colors" />
        ),
    },
    {
        title: "Working Hours",
        subtitle: "Mon, Wed - Sun: 08:00 AM - 06:00 PM",
        icon: (
            <Clock className="h-6 w-6 text-gray-600 group-hover:text-primary transition-colors" />
        ),
    },
    {
        title: "Email Us",
        subtitle: "degancheck@gmail.com",
        icon: (
            <Mail className="h-6 w-6 text-gray-600 group-hover:text-primary transition-colors" />
        ),
    },
];

const FooterTop = () => {
    return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 border-b">
        {data?.map((item, index) => (
            <div key={index} className="flex items-center gap3 group hover:bg-gray-50 p-4 transition-colors hoverEffect">{item?.icon}
                <div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-black hoverEffect"> {item?.title} </h3>
                    <p className="text-grap-600 text-sm mt-1 group-hover:text-gray-900 hoverEffect"> {item?.subtitle} </p>
                </div>
            </div>
        ))}
    </div>
    );
};

export default FooterTop;