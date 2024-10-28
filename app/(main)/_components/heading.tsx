import Image from "next/image";
// components
import BoxReveal from "@/components/magicui/box-reveal";
import { Button } from "@/components/ui/button";
import Link from "next/link";
// images
import avatar from "@/assets/images/avatar.jpeg";
// icons
import { FileTextIcon } from "lucide-react";

const Heading: React.FC = () => {
  return (
    <section className="relative w-full flex flex-col gap-y-8">
      <div className="relative z-10 w-full max-w-[800px] flex flex-col items-start gap-y-4">
        <BoxReveal boxColor="#000000" duration={0.5}>
          <div className="size-24 rounded-full bg-slate-200 overflow-hidden">
            <Image src={avatar} alt="avatar" className="size-full" />
          </div>
        </BoxReveal>

        <BoxReveal boxColor="#000000" duration={0.75}>
          <h1 className="h-[56px] text-5xl font-bold">
            Hi! I&apos;m Puggo 👋
          </h1>
        </BoxReveal>

        <div>
          <BoxReveal boxColor="#000000" duration={1}>
            <p className="text-xl">
              Fullstack
              <span className="font-bold"> Web Developer</span> and
              <span className="font-bold"> Product Designer</span>.
            </p>
          </BoxReveal>
          <BoxReveal boxColor="#000000" duration={1.25}>
            <p className="text-xl">
              I love creating beautiful and amazing products.
            </p>
          </BoxReveal>
        </div>
      </div>
      <div className="absolute right-0 top-[120px] z-0">
        <h2 className="text-[128px] font-bold text-gray-200/50 dark:text-gray-700/30">
          Puggo
        </h2>
      </div>
      <div className="mt-8 flex gap-x-4">
        <Button
          asChild
          className="rounded-full"
          size="lg"
        >
          <Link href="/resume.pdf">
            <FileTextIcon className="mr-2" size={20} />
            My Resume
          </Link>
        </Button>
        <Button
          asChild
          className="rounded-full"
          size="lg"
          variant="outline"
        >
          <Link href="https://github.com/Puggo1145">
            Github
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default Heading;