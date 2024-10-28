import Link from "next/link";
// components
import { Button } from "@/components/ui/button";
// icons
import { FileJsonIcon } from "lucide-react";
// constants
import { blogs } from "@/constants/blogs";

const Blogs: React.FC = () => {
    return (
        <div className="w-full space-y-12">
            <div className="space-y-2 w-full lg:max-w-[80%]">
                <FileJsonIcon className="text-foreground" size={72} />
                <h1 className="text-4xl font-bold text-foreground">
                    Blogs
                </h1>
                <p className="text-xl">
                    Here are some of my articles which recorded my learning journey. Hope they can help you.
                </p>
                <p className="text-xl">
                    I am currently translating some excellent learning materials including math and coding into chinese.
                </p>
            </div>

            <section className="w-full grid gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                {blogs.map((blog, index) => (
                    <BlogCard key={index} {...blog} />
                ))}
            </section>
        </div>
    );
};

const BlogCard = ({
    image,
    title,
    description,
    github,
    link
}: {
    image: string,
    title: string,
    description: string,
    github?: string
    link?: string
}) => {
    return (
        <div className="w-full max-w-[500px] rounded-xl border overflow-hidden">
            <img src={image} className="w-full h-[200px] object-cover" alt="" />
            <div className="p-4">
                <h1 className="text-2xl font-bold">
                    {title}
                </h1>
                <p className="text-[16px] text-gray-400">
                    {description}
                </p>
                <div className="space-x-2">
                    {
                        github &&
                        <Button
                            size="sm"
                            className="rounded-full mt-4"
                        >
                            <Link href={github}>
                                github
                            </Link>
                        </Button>
                    }
                    {
                        link &&
                        <Button
                            size="sm"
                            className="rounded-full mt-4"
                        >
                            <Link href={link}>
                                Read More
                            </Link>
                        </Button>
                    }
                </div>
            </div>
        </div>
    );
}

export default Blogs;