import { CatalogInteractions } from "../components/interactive_section/CatalogInteractions";
import { TopBar } from "../components/topBar_section/TopBar";

export function CatalogPage(params) {
    return (
        <div className="w-full h-full dark:text-white">
            <TopBar/>
            <div className=" flex justify-center">
                <div className=" inline-flex my-2 mx-auto overflow-hidden">
                    <div className=" w-[900px]">Placeholder</div>
                    <div className=" w-[300px] "> 
                        <CatalogInteractions/>                         
                    </div>              
                </div>                
            </div>

        </div>
    );
}