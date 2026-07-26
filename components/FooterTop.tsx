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
    <div className="flex items-center gap-3 group">
        {data?.map((item, index) => (
            <div key={index}>{item?.icon}</div>
        ))}
    </div>
    );
};

export default FooterTop;