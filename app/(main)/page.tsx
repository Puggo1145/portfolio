// components
import Heading from "./_components/heading";
import Bento from "./_components/bento";
import MyProducts from "./_components/products/my-products";
import RevealText from "./_components/reveal-text";
import Blogs from "./_components/blogs";

const Page: React.FC = () => {
  return (
    <main className="w-full flex flex-col items-center 
    gap-y-16 pt-[120px] px-8">
      <Heading />
      <Bento />
      <MyProducts />
      <RevealText />
      <Blogs />
    </main>
  );
};

export default Page;