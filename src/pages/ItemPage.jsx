import { Footer } from "../components/footer/Footer";
import { PreviewImageButtons } from "../components/indicative_section/PreviewImageButtons";
import { TopBar } from "../components/topBar_section/TopBar";

export function ItemPage({props}) {
    return (
        <div className="">

            <div className=" min-h-screen flex flex-col">
                <TopBar/>
                <div>
                    <div className=" w-[250px]"><PreviewImageButtons props={props}/></div>                     
                    <button type="button" class=" w-[250px] focus:outline-none text-white font-semibold bg-or1 hover:bg-orange-500 rounded text-sm px-5 py-1 me-2 my-4">Open</button>                   
                </div>                
                <div className=" mt-auto"><Footer/></div>                
            </div>

        </div>
    );
}