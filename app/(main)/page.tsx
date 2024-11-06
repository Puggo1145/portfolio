// components
import Heading from "./_components/heading";
import Bento from "./_components/bento";
import MyProducts from "./_components/products/my-products";
import RevealText from "./_components/reveal-text";
import Blogs from "./_components/blogs";

// Constain is used to constrain the width of some of the content
const Constrain = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-[1200px] w-full px-8 flex flex-col items-center gap-y-20">
      {children}
    </div>
  )
}

const Page: React.FC = () => {
  return (
    <main className="w-full flex flex-col items-center gap-y-20 pt-[120px]">
      <Constrain>
        <Heading />
        <Bento />
      </Constrain>

      <MyProducts />

      <Constrain>
        <RevealText />
      </Constrain>

      <Constrain>
        <Blogs />
      </Constrain>
    </main>
  );
};

export default Page;