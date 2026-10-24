import { internalGroqTypeReferenceTo, SanityImageCrop, SanityImageHotspot } from "@/sanity.types";
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

const ImageView = () => {
    return (
        <div className="w-full md:w-1/2 space-y-2 md:space-y-4">
            Product Page
        </div>
    )
}

export default ImageView;