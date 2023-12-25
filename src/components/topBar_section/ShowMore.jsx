import { ReactComponent as News } from "../../assets/newspaper.svg";
import { ReactComponent as Mail } from "../../assets/envelope.svg";
import { ReactComponent as Random } from "../../assets/shuffle.svg";

export function ShowMore(props) {
    return (
        <div className={` bg-white dark:bg-pupdbg p-1 rounded text-bl1 dark:text-white font-normal shadow absolute mt-8 ${props.state ? "transition-all duration-200 opacity-100 translate-y-2 visible" : "transition-all duration-200 opacity-0 -translate-y-3 invisible"}`}>
            <div>            
                <div className=" m-1 p-1 rounded hover:bg-gr1 dark:hover:bg-drkhwr"><News/>News</div>
                <div className=" m-1 p-1 rounded hover:bg-gr1 dark:hover:bg-drkhwr"><Mail/>Mail</div>
                <div className=" m-1 p-1 rounded hover:bg-gr1 dark:hover:bg-drkhwr"><Random/>Random</div>
            </div>
        </div>
    );
}