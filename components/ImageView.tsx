"use client"
import { internalGroqTypeReferenceTo, SanityImageCrop, SanityImageHotspot } from "@/sanity.types";
import { AnimatePresence } from "framer-motion";
import React from "react";

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
    const [active, setActive] = React.useState([0]);

    return (
        <div className="w-full md:w-1/2 space-y-2 md:space-y-4">
            <AnimatePresence mode="wait">

            </AnimatePresence>
        </div>
    )
}

export default ImageView;