import Image from "next/image";
import MultiCursor from "../components/ui/multiCursor";

export default function Hero() {
    return (
        <section className="relative w-full min-h-[1000px] py-30 overflow-hidden bg-black">
            <div className="absolute inset-0">
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px, transparent 49px, rgba(255,255,255,0.3) 50px),linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px, transparent 49px, rgba(255,255,255,0.3) 50px)", backgroundSize: "50px 50px", transform: "rotateX(-10deg)", transformStyle: "preserve-3d" }} />
                <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at center, transparent 0%, rgba(0, 0, 0, 0.7) 45%, rgba(0, 0, 0, 1) 100%)` }} />
                <div className="absolute inset-0 flex justify-center items-center mt-25"><Image src="/zisty.svg" alt="Zisty" width={500} height={500} className="w-70 h-70 drop-shadow-[0_0_1px_rgba(255,255,255,0.5)]" /></div>
            </div>

            <div className="relative container px-4 mx-auto text-center">
                <div className="max-w-3xl mx-auto space-y-6">
                    <h1 className="text-6xl text-neutral-50 font-bold tracking-tight">
                        Build The Amazing Product
                    </h1>
                    <p className="text-lg text-muted-foreground">
                        We are a community team of mainly Japanese students who love programming
                    </p>

                    <div className="flex justify-center items-center mt-25 gap-160 hide-cursor">
                        <div className="relative w-[200px] h-[500px]">
                            <div className="absolute top-0 right-0">
                                <MultiCursor cursors={[{ id: 1, name: "Rion", color: "202, 138, 4 ", side: "left" }]} />
                            </div>
                            <div className="absolute top-[85px] right-2">
                                <MultiCursor cursors={[{ id: 3, name: "tanahiro2010", color: "22, 163, 74 ", side: "left" }]} />
                            </div>
                            <div className="absolute top-[180px] right-4">
                                <MultiCursor cursors={[{ id: 5, name: "Sigma", color: "8, 145, 178 ", side: "left" }]} />
                            </div>
                            <div className="absolute top-[260px] right-[10px]">
                                <MultiCursor cursors={[{ id: 7, name: "Yunai", color: "147, 51, 234 ", side: "left" }]} />
                            </div>
                            <div className="absolute top-[340px] right-[0px]">
                                <MultiCursor cursors={[{ id: 9, name: "h_ypi", color: "202, 138, 4 ", side: "left" }]} />
                            </div>
                            <div className="absolute top-[420px] right-[-30px]">
                                <MultiCursor cursors={[{ id: 11, name: "tom", color: "22, 163, 74 ", side: "left" }]} />
                            </div>
                        </div>

                        <div className="relative w-[200px] h-[500px]">
                            <div className="absolute top-0 left-0">
                                <MultiCursor cursors={[{ id: 2, name: "kazu", color: "22, 163, 74 ", side: "right" }]} />
                            </div>
                            <div className="absolute top-[85px] left-2">
                                <MultiCursor cursors={[{ id: 4, name: "Syobosyobonn", color: "8, 145, 178 ", side: "right" }]} />
                            </div>
                            <div className="absolute top-[190px] left-4">
                                <MultiCursor cursors={[{ id: 6, name: "umaidango", color: "147, 51, 234 ", side: "right" }]} />
                            </div>
                            <div className="absolute top-[290px] left-[-10px]">
                                <MultiCursor cursors={[{ id: 8, name: "takoyaki", color: "22, 163, 74 ", side: "right" }]} />
                            </div>
                            <div className="absolute top-[380px] left-[-40px]">
                                <MultiCursor cursors={[{ id: 10, name: "rai", color: "202, 138, 4 ", side: "right" }]} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
        @media (max-width: 1050px) {
          .hide-cursor {
            display: none !important;
          }
        }
      `}</style>
        </section>
    )
}