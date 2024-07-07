import Link from "next/link";
// components
import { Button } from "@/components/ui/button";
// icons
import { FileJsonIcon } from "lucide-react";

const Blogs: React.FC = () => {
    return (
        <div className="w-full space-y-12">
            <div className="space-y-2 w-full lg:max-w-[50%]">
                <FileJsonIcon className="text-foreground" size={72} />
                <h1 className="text-4xl font-bold text-foreground">
                    Blogs
                </h1>
                <p className="text-xl">
                    I am currently translating some excellent learning materials including math and coding into chinese.
                </p>
                <p className="text-xl">
                    I want to share them with my fellows.
                </p>
            </div>

            <section className="w-full flex flex-col gap-4 items-center lg:flex-row">
                <BlogCard
                    image="https://www.notion.so/images/page-cover/rijksmuseum_jansz_1637.jpg"
                    title="交互线性代数（进行中...）"
                    description="佐治亚理工学院《Interactive Linear Algebra》中文翻译版"
                    github="https://github.com/Puggo1145/Interactive-Linear-Algebra-CN"
                    />
                <BlogCard
                    image="https://tinted-galette-9e6.notion.site/image/https%3A%2F%2Fmiro.medium.com%2Fv2%2Fresize%3Afit%3A2000%2F1*y6C4nSvy2Woe0m7bWEn4BA.png?table=block&id=9cb6f85e-4185-4521-bdff-6ed7ce9d806f&spaceId=da1a9f2b-1125-4084-ab58-0d786d068870&width=2000&userId=&cache=v2"
                    title="Oh My React（进行中...）"
                    description="著名博客 Build your own react 的中文翻译 + 个人精修"
                    link="https://tinted-galette-9e6.notion.site/Oh-My-React-React-Deep-Dive-9cb6f85e41854521bdff6ed7ce9d806f?pvs=74"
                    github="https://github.com/Puggo1145/oh-my-react"
                />
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
                                link
                            </Link>
                        </Button>
                    }
                </div>
            </div>
        </div>
    );
}

export default Blogs;