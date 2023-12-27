import { Footer } from "../components/footer/Footer";
import { FilmsFeed } from "../components/indicative_section/FilmsFeed";
import { NewsSection } from "../components/indicative_section/NewsSection";
import { Showcase } from "../components/indicative_section/Showcase";
import { SwitchBox } from "../components/interactive_section/SwitchBox";
import { TopBar } from "../components/topBar_section/TopBar";
import { mockData } from "../mockData";

const mock = await mockData();
const switchesFiller = ["button1","button2","button3","button4","button5"];

export function HomePage() {
    return (
        <div className="w-full h-full dark:text-white">
        <TopBar></TopBar>
            <div className=" flex justify-center">
                <div className=" inline-flex my-2 overflow-hidden">
                    <div className="w-[900px]">
                        <div>
                            <Showcase props={mock}/>
                            <NewsSection/>
                            <FilmsFeed props={mock}/>
                        </div>                   
                    </div>
                    <div className="w-[300px] ">
                    <div>
                        <SwitchBox switches={switchesFiller} name="Janres"/>
                        <SwitchBox switches={switchesFiller} name="Categories"/>
                    </div>                    
                    </div>
                </div>
            </div>
        <Footer/>
        </div>
    );
}