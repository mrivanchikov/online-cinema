import { PreviewImageTexted } from "./PreviewImageTexted";

export function CatalogFeed({props}) {
    let feed = props.mock.data.map((feed, i)=><div className=" min-w-[140px] min-h-[200px]"><PreviewImageTexted props={props.mock.data[i]}/></div>)
    return(
        <div className=" mt-5 grid grid-cols-5 gap-4">
            {feed}
        </div>
    );
}