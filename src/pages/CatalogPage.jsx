import { SearchSortDropdown } from "../components/indicative_section/SearchSortDropdown";
import { TopBar } from "../components/topBar_section/TopBar";
import { CatalogFeed } from "../components/indicative_section/CatalogFeed";


export function CatalogPage({props}) {
    return (
        <div className="w-full h-full dark:text-white">
            <TopBar/>
            <div className=" mt-2 w-full h-full flex justify-center">
                <div className="p-4 w-[1200px] h-full rounded bg-white dark:bg-drkbg">
                    <div className=" inline-flex w-full justify-between">
                        <span className=" text-[1.5em] font-bold">{props.name}</span>
                        <SearchSortDropdown/>
                        
                    </div>
                    <div className=" mt-3 mb-2 ">
                        <form action="">
                            <input type="text" placeholder="Search" className=" h-10 w-full py-2 px-4 rounded border border-gray-300 focus:border-gray-400 dark:border-gray-400 dark:focus:border-gray-300 outline-none dark:bg-drkfill"></input>
                        </form>
                    </div>
                    <CatalogFeed props={props}/>
                </div>                    
            </div>
        </div>
    );
}