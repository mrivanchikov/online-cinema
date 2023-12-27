import { NewsBlock } from "./NewsBlock";

export function NewsSection(params) {
    return(
        <div className=" inline-flex justify-between w-full">
            <div className="w-1/2 mr-2">
                <NewsBlock newsType="News" newsList={["Test news 1","Test news 2","Test news 3"]}/>
            </div>
            <div className="w-1/2 ml-2">
            <NewsBlock newsType="Forum news" newsList={["Test news 4","Test news 5","Test news 6"]}/>
            </div>
        </div>
    );
}