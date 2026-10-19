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
        <div className="mb-10 lg:pb-10 bg-shop_light_bg p-5 lg:p-7 rounded-md">
            <div className="flex items-center gap-5 justify-between mb-5">
                <Title>Customer Service</Title>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 gap-2.5 p-2 shadow-sm hover:shadow-shop_light_green/20 py-5">
                {extraData?.map((item, index) =>(
                    <div key={index} className="flex items-center gap-3 group text-lightColor hover:text-shop_light_green">
                        <span className="inLine-flex scale-100 group-hover:scale-90 hoverEffect">
                            {item?.icon}
                        </span>

                        <div className="text-sm">
                            <p className="text-darkColor/80 font-bold capitalize">
                                {item?.title}
                            </p>
                            <p className="text-lightColor">
                                {item?.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CustomerService