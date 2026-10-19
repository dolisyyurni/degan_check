import { GitCompareArrows, Headset, ShieldCheck, Truck } from "lucide-react";
import { Title } from './ui/text';

const extraData = [
    {
        title: "Free Delivery",
        description: "Free shipping over Rp 121.000",
        icon: <Truck size={45} />,
    },
    {
        title: "Free Return",
        description: "Free shipping over Rp 121.000",
        icon: <GitCompareArrows size={45}/>,
    },
    {
        title: "Customer Support",
        description: "Friendly 24/7 customer support",
        icon: <Headset size={45}/>,
    },
    {
        title: "Money Back Guarantee",
        description: "Quality checked by our team",
        icon: <ShieldCheck size={45}/>,
    },
]

const CustomerService = async () => {
    return (
        <div className="mb-10 lg:pb-20 bg-shop_light_bg p-5 lg:p-7 rounded-md">
            <div className="flex items-center gap-5 justify-between mb-10">
                <Title>Customer Service</Title>
            </div>
            
        </div>
    )
}

export default CustomerService