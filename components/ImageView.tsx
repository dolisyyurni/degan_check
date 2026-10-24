"use client"

import React from "react";
import { urlFor } from "@/sanity/lib/image";
import { internalGroqTypeReferenceTo, SanityImageCrop, SanityImageHotspot } from "@/sanity.types";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";

interface Props {
    images?: Array<{
        asset?: {
            _ref: string;
            _type: "reference";
            _weak?: boolean;
            [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
        }
        hotspot?: SanityImageHotspot;
        crop?: SanityImageCrop;
        _type: "image";
        _key: string;
    }>
    isStock?: number;
}

const ImageView = ({images=[], isStock}: Props) => {
    const [active, setActive] = React.useState(images[0]);

    return (
        <div className="w-full md:w-1/2 space-y-2 md:space-y-4">
            <AnimatePresence mode="wait">
                <motion.div key={active?._key} 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-h-[500px] min-h-[450px] border border-darkColor/10 rounded-md group overflow-hidden">
                    <Image src={urlFor(active).url()} 
                    alt="productImage" 
                    width={700} 
                    height={700} 
                    priority className={`w-full h-96 max-h-[500px] object-contain group-hover:scale-110 hoverEffect rounded-md ${
                        isStock === 0 ? "opacity-50" : ""}`} />
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

export default ImageView;