import Image from "next/image";
// components
import BoxReveal from "@/components/magicui/box-reveal";
// images
import avatar from "@/assets/images/avatar.jpeg";


const Heading: React.FC = () => {
  return (
    <div className="relative z-10 w-full max-w-[800px] 
    flex flex-col items-start gap-y-4">
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
  );
};

export default Heading;