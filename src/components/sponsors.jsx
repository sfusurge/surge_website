const TextSection = () => {
    return (
        <>
            <section
                className="flex flex-col gap-4">
                <h6
                    className="font-GeistMono text-brand-primary text-center
                    text-s font-semibold">
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    SPONSOR US
                </h6>
                <h2
                    className="text-center title-1 emphasized">
                    Pls sponsor our hackathons, we need the money &#129402;
                </h2>
                <p className="text-center text-text-secondary">
                    The organizers of Simon Fraser University's largest hackathon, SFU Surge provides an inclusive space
                    for students to explore their passions, connect with industry professionals.
                </p>
                <a
                    className="button-link md primary text-center text-text-primary to-brand-primary"

                >
                    Read our lore
                </a>
            
            </section>
        </>
    );
};

const Sponsors = () => {
    return (
        <>
            <TextSection />
        </>
    );
};

export default Sponsors