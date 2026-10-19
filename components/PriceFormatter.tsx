import { twMerge } from "tailwind-merge";

interface Props {
    amount: number | undefined;
    className?: string;
}

const PriceFormatter = ({amount, className}: Props) => {
    const formattedPrice = new Number(amount).toLocaleString("en-US", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
    });
    return (
        <span className={twMerge("text-sm dont-semibold text-darkColor", className)}>{formattedPrice}</span>
    )
}