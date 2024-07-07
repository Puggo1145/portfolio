import LinearGradient from "@/components/magicui/linear-gradient";

const GradientBackground: React.FC = () => {
    return (
        <div className="fixed -z-10 w-screen h-screen">
            <LinearGradient
                className="-z-10 dark:hidden"
                from="#ffffff"
                to="#f8f8f8"
            />
            <LinearGradient
                className="-z-10 hidden dark:block"
                from="#222222"
                to="#01030a"
            />
        </div>
    );
};

export default GradientBackground;