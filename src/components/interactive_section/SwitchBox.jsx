export function SwitchBox(props) {
    let switches =props.switches.map((switches,i)=><button className="border bg-gr1 dark:bg-btndbg rounded p-1 m-1 text-bl1 dark:text-white text-sm font-sans hover:text-or1 dark:hover:text-or1">{props.switches[i]}</button>)
    return(
        <div className="mx-4 mb-4 py-5 px-4 rounded bg-white dark:bg-drkbg">
            <div className="p-1 font-semibold text-lg border-b-2 border-b-or1">{props.name}</div>
            <div className="py-1">{switches}</div>            
        </div>
    );
}