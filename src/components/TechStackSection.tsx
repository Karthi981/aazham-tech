import React from 'react'


const TechStackSection = () => {
    return (
        <section className="py-14 bg-gradient-to-b from-background via-muted/30 to-background">
            <div className="max-w-7xl mx-auto px-6">
                <div className=" h-full text-left mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                        Technologies We Master
                    </h2>
                    <p className="text-lg text-left text-muted-foreground max-w-3xl">
                        Leveraging cutting-edge technologies to build robust, scalable, and future-proof solutions.
                    </p>
                </div>

                <div className="w-full h-full flex items-center justify-center">
                    <img className='w-full max-w-7xl h-auto' src="https://skillicons.dev/icons?i=html,js,css,tailwind,mysql,nodejs,django,python,flask,net,flutter,ts,react,redux,angular,vue,webpack,aws,postgres,mongodb,linux,vscode,rabbitmq,idea,jenkins,gitlab,github,ps,xd,tailwind" alt="tech-stack" />
                </div>
            </div>
        </section>
    )
}


export default TechStackSection;