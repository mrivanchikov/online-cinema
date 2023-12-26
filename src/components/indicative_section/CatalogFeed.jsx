import { PreviewImageTexted } from "./PreviewImageTexted";

export function CatalogFeed({props}) {
    let feed =[];
    for (let i = 0; i < props.mock.data.length; i++) {
        const element = <div className=" min-w-[140px] min-h-[200px]"><PreviewImageTexted props={props.mock.data[i]}/></div>
        feed.push(element);
    }
    return(
        <div className=" mt-5 grid grid-cols-5 gap-4">
            {feed}
        </div>
    );
}