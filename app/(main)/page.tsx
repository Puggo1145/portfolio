import Image from "next/image";
// components
import Heading from "./_components/heading";
import { Button } from "@/components/ui/button";
// images
import avatar from "@/assets/images/avatar.jpeg";
// icons
import { FileTextIcon } from "lucide-react";

const Page: React.FC = () => {
  return (
    <main className="w-full h-full flex flex-col items-center pt-[120px]">
      <section className="w-full flex flex-col gap-y-8">
        <div className="size-24 rounded-full bg-slate-200 overflow-hidden">
          <Image src={avatar} alt="avatar" className="size-full" />
        </div>
        <Heading />
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
    </main>
  );
};

export default Page;