import { PreviewImageTexted } from "./PreviewImageTexted";

export function FilmsFeed({props}) {
    let feed =[];
    for (let i = 0; i < props.data.length; i++) {
        const element = 
            <div className=" px-2 dark:shadow-sm bg-white dark:bg-drkbg rounded">
                <div className="flex p-1 py-3 w-full border-b dark:border-b-gray-600 ">
                    <div className=" min-w-[140px] w-[140px] h-[200px]"><PreviewImageTexted props={props.data[i]}/></div>
                    <div className="w-full  mx-1 ml-4">
                        <div className=" border-b border-b-or1 mx-1 mb-1"> <a className=" font-sans font-semibold text-base hover:text-or1 hover:underline" href={props.data[i].href}>{props.data[i].eng_name}</a></div>
                        <div className=" rounded-sm mx-1 mb-1 text-sm font-bold bg-gr1 dark:bg-btndbg"> {props.data[i].eng_name}</div>                        
                    </div>
                </div>
            </div>;
        feed.push(element);
    }
    return(
        <div>
            <div className="bg-white border-b dark:border-b-gray-600 dark:bg-drkbg py-3 px-6 rounded-t text-lg font-semibold font-sans">Feed</div>
            <div>{feed}</div>          
        </div>
    );
}