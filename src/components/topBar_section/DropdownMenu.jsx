export function DropdownMenu(props) {
    return (
        <div className={` bg-white dark:bg-pupdbg p-1 rounded text-bl1 dark:text-white font-normal shadow absolute -ml-[90px] mt-8 ${props.state ? "transition-all duration-200 opacity-100 translate-y-2 visible" : "transition-all duration-200 opacity-0 -translate-y-3 invisible"}`}>
            <div className=" border-b">            
                <a href={"Catalog"}><div className=" m-1 p-1 rounded hover:bg-gr1 dark:hover:bg-drkhwr">Option 1</div></a>
                <div className=" m-1 p-1 rounded hover:bg-gr1 dark:hover:bg-drkhwr">Option 2</div>
                <div className=" m-1 p-1 rounded hover:bg-gr1 dark:hover:bg-drkhwr">Option 3</div>
                <div className=" m-1 p-1 rounded hover:bg-gr1 dark:hover:bg-drkhwr">Option 4</div>
                <div className=" m-1 p-1 rounded hover:bg-gr1 dark:hover:bg-drkhwr">Option 5</div>
            </div>

            <div>
                <div className=" m-1 p-1 rounded hover:bg-gr1 dark:hover:bg-drkhwr">Option 1</div>
                <div className=" m-1 p-1 rounded hover:bg-gr1 dark:hover:bg-drkhwr">Option 2</div>
            </div>
        </div>
    );
}