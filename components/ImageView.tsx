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
                className="group relative mx-auto aspect-square w-full min-w-[450px] overflow-hidden rounded-md border border-darkColor/10">
                    <Image src={urlFor(active).width(1000).height(1000).url()} 
                    alt="productImage"
                    width={700} 
                    height={700} 
                    priority className={`h-full w-full object-contain object-center transition-transform duration-300 ease-out group-hover:scale-[1.04] ${
                        isStock === 0 ? " opacity-50" : ""}`} />
                </motion.div>
            </AnimatePresence>

            <div className="mx-auto grid h-20 w-full max-w-[500px] grid-cols-5 gap-2 md:h-20">
                {images?.map((image) => (
                    <button key={image._key} type="button" onClick={() => setActive(image)}
                    className={`border rounded-md overflow-hidden ${active?._key === image?._key ? "border-darkColor opacity-100" : "opacity-80"}`}>

                        <Image src={urlFor(image).width(1000).height(1000).url()}
                        alt={`Thumbnail ${image._key}`}
                        width={100}
                        height={100} />
                    </button>
                ))}
            </div>

        </div>
    )
}

export default ImageView;
