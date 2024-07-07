// components
import Heading from "./_components/heading";
import Bento from "./_components/bento";
import { Button } from "@/components/ui/button";

// icons
import { FileTextIcon } from "lucide-react";

const Page: React.FC = () => {
  return (
    <main className="w-full h-full flex flex-col items-center pt-[120px] px-8">
      <section className="relative w-full flex flex-col gap-y-8">
        <Heading />
        <div className="absolute right-0 top-[100px] z-0">
          <h2 className="text-[128px] font-bold text-gray-200/50 dark:text-gray-700/30">
            Puggo
          </h2>
        </div>
        <div className="mt-8 flex gap-x-4">
          <Button
            className="rounded-full"
            size="lg"
          >
            <FileTextIcon className="mr-2" size={20} />
            My Resume
          </Button>
          <Button
            className="rounded-full"
            size="lg"
            variant="outline"
          >
            Github
          </Button>
        </div>
      </section>

      <section className="mt-[100px]">
        <Bento />
      </section>
    </main>
  );
};

export default Page;