"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
// images
import DouDou1 from "@/assets/images/doudou-1.jpeg";
import DouDou2 from "@/assets/images/doudou-2.jpg";
import DouDou3 from "@/assets/images/doudou-3.png";


const CatAvatar = () => {
    const images = [DouDou1, DouDou2, DouDou3];
    const [currentImageIndex, setCurrentImageIndex] = useState(1);

    const handleClick = () => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
    };

    return (
        <div className="relative">
            {/* 手绘箭头和文字 */}
            <div className="absolute left-[92px] top-1/2 -translate-y-1/2 flex items-center gap-2">
                <svg width="60" height="20">
                    <path
                        d="M60,10 Q35,0 15,10 L18,5 M15,10 L20,15"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    />
                </svg>
                <div className="flex flex-col items-start whitespace-nowrap">
                    <span className="whitespace-nowrap">
                        Check my cat
                    </span>
                    <span className="text-sm">Cute right? Click!</span>
                </div>
            </div>

            <motion.div
                className="size-24 rounded-full bg-slate-200 cursor-pointer"
                onClick={handleClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <motion.div
                    initial={false}
                    animate={{
                        rotateY: currentImageIndex * 360,
                    }}
                    transition={{
                        duration: 0.6,
                        type: "spring",
                        stiffness: 260,
                        damping: 20
                    }}
                >
                    <Image
                        src={images[currentImageIndex]}
                        alt="avatar"
                        className="size-full object-cover overflow-hidden rounded-full"
                    />
                </motion.div>
            </motion.div>
        </div>
    );
};

export default CatAvatar;