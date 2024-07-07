import BoxReveal from "@/components/magicui/box-reveal";

const Heading: React.FC = () => {
  return (
    <div className="w-full max-w-[800px] 
    flex flex-col items-start gap-y-4">
      <BoxReveal boxColor="#000000" duration={0.5}>
        <h1 className="h-[56px] text-5xl font-bold">
          Hi! I&apos;m Puggo 👋
        </h1>
      </BoxReveal>

      <BoxReveal boxColor="#000000" duration={0.5}>
        <div>
          <p className="text-lg">
            Fullstack Web Developer and Designer.
          </p>
          <p className="text-lg">
            I love creating beautiful and functional products.
          </p>
        </div>
      </BoxReveal>
    </div>
  );
};

export default Heading;