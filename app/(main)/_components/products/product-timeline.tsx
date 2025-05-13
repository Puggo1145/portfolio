import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Timeline } from "@/components/ui/timeline";
// constants
import { productTimeline } from "@/constants/product-timeline";

export function ProductTimeline() {
    const data = productTimeline.map((item) => ({
        title: item.time,
        content: (
            <div>
                <h1 className="text-neutral-800 dark:text-neutral-200 text-2xl md:text-3xl font-bold mb-2">
                    {item.heading}
                </h1>
                <p className="text-neutral-800 dark:text-neutral-200 font-normal mb-8">
                    {item.desc}
                </p>
                {item.buttonText && item.link && (
                    <Button asChild className="rounded-full">
                        <Link href={item.link} target="_blank">
                            {item.buttonText}
                        </Link>
                    </Button>
                )}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {item.image.map((image, index) => (
                        <Image
                            key={index}
                            src={image}
                            alt="startup template"
                            width={400}
                            height={300}
                            className="rounded-lg object-cover dark:brightness-90 h-full
                            shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    ))}
                </div>
            </div>
        ),
    }));
    return (
        <div className="w-full">
            <Timeline data={data} />
            <p className="text-center text-neutral-800 dark:text-neutral-200 font-bold mb-2">
                The journey has only just begun.
            </p>
        </div>
    );
}
