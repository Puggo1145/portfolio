// components
import CatAvatar from "./cat-avatar";
import BoxReveal from "@/components/magicui/box-reveal";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FlipWords } from "@/components/ui/flip-words";
import { NewProject } from "./new-project";
// icons
import { FileTextIcon } from "lucide-react";

const Heading: React.FC = () => {
  const flipingWords = ["products", "user experience", "design"];

  return (
    <section className="relative w-full flex flex-col gap-y-8">
      <div className="relative z-10 w-full max-w-[800px] flex flex-col items-start gap-y-4">
        <BoxReveal boxColor="#000000" width="100%" duration={0.5} className="h-28 flex items-center pl-2">
          <CatAvatar />
        </BoxReveal>

        <BoxReveal boxColor="#000000" duration={0.75}>
          <h1 className="text-4xl font-bold lg:text-5xl h-[56px] font-sans">
            Hi! I&apos;m Puggo 👋
          </h1>
        </BoxReveal>

        <div>
          <BoxReveal boxColor="#000000" duration={1}>
            <p className="text-xl">
              <span className="font-bold">Fullstack</span> Web Developer and
              <span className="font-bold"> Product Designer</span>.
            </p>
          </BoxReveal>
          <BoxReveal boxColor="#000000" duration={1.25}>
            <>
              <span className="text-xl">
                I love creating beautiful and amazing
              </span>
              <FlipWords words={flipingWords} className="font-bold text-xl lg:text-3xl" />.
            </>
          </BoxReveal>
        </div>
      </div>
      <div className="absolute right-0 top-[120px] z-0">
        <NewProject />
      </div>
      <div className="flex gap-x-4">
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
          <Link 
            href="https://github.com/Puggo1145"
            target="_blank"
          >
            Github
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default Heading;