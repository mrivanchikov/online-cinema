import { IndicativeSection } from "../components/indicative_section/IndicativeSection";
import { InteractiveSection } from "../components/interactive_section/InteractiveSection";
import { TopBar } from "../components/topBar_section/TopBar";

export function HomePage() {
    return (
        <div className="w-full h-full dark:text-white">
        <TopBar></TopBar>
            <div className=" flex justify-center">
                <div className=" inline-flex my-2 overflow-hidden">
                    <div className="w-[900px]">
                        <IndicativeSection></IndicativeSection>                    
                    </div>
                    <div className="w-[300px] ">
                       <InteractiveSection></InteractiveSection>                    
                    </div>
                </div>
            </div>
        </div>
    );
}