import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SparkleIcon } from "lucide-react";

export const NewProject = () => {
    return (
        <section className="flex flex-col gap-y-8 items-end">
            <div className="relative h-16 flex flex-col justify-center items-end">
                <h2 className="relative z-10 text-5xl font-bold font-playfair
                bg-gradient-to-r from-primary/65 to-primary text-transparent bg-clip-text">
                    Puzzle Fact Check
                </h2>
                <p className="text-muted-foreground text-lg">
                    Debunk fake news with confidence
                </p>
                <SparkleIcon
                    fill="currentColor"
                    strokeWidth={0}
                    className="z-0 absolute bottom-2 right-0 size-28 rotate-[24deg] text-gray-500"
                />
            </div>
            <div className="relative">
                <Badge className="absolute -top-4 -right-4 bg-primary">New Project</Badge>
                <Button
                    asChild
                    className="w-fit rounded-full"
                    size="lg"
                    variant="outline"
                >
                    <Link 
                        href="https://www.puzzle-fact-check.com"
                        target="_blank"
                    >
                        Have a look
                    </Link>
                </Button>
            </div>
        </section>
    );
};
