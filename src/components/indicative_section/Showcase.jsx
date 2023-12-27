import { FilmPreview } from "./FilmPreview";

export function Showcase({props}) {
    let showcase = [];
    for (let i = 0; i < 6; i++) {
        const element = <FilmPreview props={props.data[i]}/>;
        showcase.push(element);
    }
    return(
        <div className="p-1 bg-white dark:bg-drkbg rounded overflow-hidden">
            <div className="p-1 text-lg font-semibold font-sans">Header</div>
            <div className=" inline-flex">{showcase}</div>
        </div>
    );
}