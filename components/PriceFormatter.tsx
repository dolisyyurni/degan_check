import { cn } from "@/lib/utils";

interface Props {
    amount: number | undefined;
    className?: string;
}

const PriceFormatter = ({amount, className}: Props) => {
    const formattedPrice = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    })
    .format(amount ?? 0);

    console.log("Price formatter input/output:", { amount, formattedPrice });

    return (
        <span className={cn("text-sm dont-semibold text-darkColor", className)}>{formattedPrice}</span>
    )
}

export default PriceFormatter;
