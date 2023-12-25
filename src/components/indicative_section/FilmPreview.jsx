import { PreviewImageTexted } from "./PreviewImageTexted";

export function FilmPreview({props}) {
    return(
        <div className=" m-1">
            <div className=" w-[140px] h-[200px]"><PreviewImageTexted props={props}/></div>
            <a id="previewAnchor" className=" decoration-current text-sm text-bl1 dark:text-slate-100 mt-2 pr-1 dark:hover:text-or1 dark:hover:underline hover:text-or1 hover:underline" href={props.href} title={props.eng_name}>{props.eng_name}</a>        
        </div>
    );
}