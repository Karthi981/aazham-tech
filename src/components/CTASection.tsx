import { Button } from "@/components/ui/button"

interface CTASectionProps {
    title: string
    description: string
    primaryButtonText: string
    primaryButtonAction: () => void
    secondaryButtonText?: string
    secondaryButtonAction?: () => void
    image1?: string
    image2?: string
    variant?: "light" | "dark"
}

const CTASection = ({
    title,
    description,
    primaryButtonText,
    primaryButtonAction,
    secondaryButtonText,
    secondaryButtonAction,
    image1,
    image2,
    variant = "light"
}: CTASectionProps) => {
    return (
        <section className={`py-20 relative overflow-hidden  dark:from-teal-950/20 dark:via-cyan-950/10"}`}>
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* Content Side */}
                    <div className="flex-1 space-y-6 text-center lg:text-left">
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                            {title}
                        </h2>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
                            {description}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
                            <Button
                                size="lg"
                                className="bg-teal-600 hover:bg-teal-700 text-white text-lg h-14 px-8"
                                onClick={primaryButtonAction}
                            >
                                {primaryButtonText}
                            </Button>
                            {secondaryButtonText && secondaryButtonAction && (
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="text-lg h-14 px-8 border-teal-600 text-teal-600 hover:bg-teal-50 dark:hover:bg-teal-950"
                                    onClick={secondaryButtonAction}
                                >
                                    {secondaryButtonText}
                                </Button>
                            )}
                        </div>
                    </div>

                    {/* Overlapping Images Side */}
                    {image1 && image2 && (
                        <div className="flex-1 relative w-full max-w-md lg:max-w-lg h-[400px]">
                            {/* First Image - Bottom Left */}
                            <div className="absolute left-0 top-12 w-[70%] h-[280px] rounded-2xl overflow-hidden shadow-2xl border-4 border-background z-10 transform hover:scale-105 transition-transform duration-300">
                                <img
                                    src={image1}
                                    alt="CTA Visual 1"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Second Image - Top Right */}
                            <div className="absolute right-0 top-0 w-[70%] h-[280px] rounded-2xl overflow-hidden shadow-2xl border-4 border-background z-20 transform hover:scale-105 transition-transform duration-300">
                                <img
                                    src={image2}
                                    alt="CTA Visual 2"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-gradient-to-br from-teal-400/20 to-cyan-400/20 rounded-full blur-2xl -z-10"></div>
                            <div className="absolute -left-4 top-20 w-24 h-24 bg-gradient-to-br from-cyan-400/20 to-teal-400/20 rounded-full blur-2xl -z-10"></div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default CTASection;
