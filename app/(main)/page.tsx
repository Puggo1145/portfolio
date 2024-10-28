// components
import Heading from "./_components/heading";
import Bento from "./_components/bento";
import RevealText from "./_components/reveal-text";
import Blogs from "./_components/blogs";


const Page: React.FC = () => {
  return (
    <main className="w-full h-full flex flex-col items-center pt-[120px] px-8">
      <section className="relative w-full flex flex-col gap-y-8">
        <Heading />
      </section>

      <section className="mt-[100px]">
        <Bento />
      </section>

      <RevealText />

      <section className="w-full mt-[100px]">
        <Blogs />
      </section>
    </main>
  );
};

export default Page;