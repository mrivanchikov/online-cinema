import { FilmsFeed } from "./FilmsFeed";
import { NewsSection } from "./NewsSection";
import { Showcase } from "./Showcase";
import { mockData } from "../../mockData";

//
const mock = await mockData();
//

export function IndicativeSection() {
    return(
        <div>
            <Showcase props={mock}></Showcase>
            <NewsSection></NewsSection>
            <FilmsFeed props={mock}></FilmsFeed>
        </div>);
}