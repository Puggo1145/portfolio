import TextReveal from "@/components/magicui/text-reveal";

const RevealText: React.FC = () => {
    return (
        <div className="min-h-[300px] flex items-center justify-center">
            <TextReveal text="Standing on the shoulders of giants" />
        </div>
    );
};

export default RevealText;