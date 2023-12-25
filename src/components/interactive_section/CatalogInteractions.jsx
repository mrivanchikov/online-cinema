import {ReactComponent as Arrow} from "../../assets/chevron-right.svg"
import { Sidebar } from "./Sidebar";
import { TripleCheckbox } from "./TripleCheckbox";

export function CatalogInteractions(params) {
    return (
        <form name="searchProperties" action="http://localhost:3000/Catalog" className=" font-sans font-semibold text-base text-bl1">
            <Sidebar props={{name:"Janres"}}></Sidebar>
            <div className=" py-1 h-[94vh] w-[300px] flex-col content-between rounded bg-white dark:bg-drkbg">
                <div className=" w-full h-[95%]">
                    <div className=" cursor-pointer w-full justify-between max-w-[284px] mx-2 mt-1 px-2 py-1 inline-flex rounded hover:bg-opacity-10 hover:bg-slate-400">
                        <span className=" font-sans font-semibold text-base text-bl1">Janres</span>
                        <span className=" mt-1 text-gray-500"><Arrow/></span>
                    </div>
                    <div className=" cursor-pointer w-full justify-between max-w-[284px] mx-2 mt-1 px-2 py-1 inline-flex rounded hover:bg-opacity-10 hover:bg-slate-400">
                        <span className=" font-sans font-semibold text-base text-bl1">Tags</span>
                        <span className=" mt-1 text-gray-500"><Arrow/></span>
                    </div>
                    <div>
                        <div>
                            <div className="mx-2 my-1 px-2 py-1">Number of epizodes</div>
                            <div className="inline-flex font-normal text-sm">    
                                <input placeholder="From" className=" outline-none border focus:border-gray-400 rounded ml-3 mr-1 p-1 w-[125px]"/>
                                <hr className="w-4 mt-3 border-1 border-bl1"/>
                                <input placeholder="To" className=" outline-none border focus:border-gray-400 rounded ml-1 mr-3 p-1 w-[125px]"/>
                            </div>
                            <div className="mx-2 my-1 px-2 py-1">Years</div>
                            <div className="inline-flex font-normal text-sm">    
                                <input placeholder="From" className=" outline-none border focus:border-gray-400 rounded ml-3 mr-1 p-1 w-[125px]"/>
                                <hr className="w-4 mt-3 border-1 border-bl1"/>
                                <input placeholder="To" className=" outline-none border focus:border-gray-400 rounded ml-1 mr-3 p-1 w-[125px]"/>
                            </div>
                            <div className="mx-2 my-1 px-2 py-1">Rating</div>          
                            <div className="inline-flex font-normal text-sm">    
                                <input placeholder="From" className=" outline-none border focus:border-gray-400 rounded ml-3 mr-1 p-1 w-[125px]"/>
                                <hr className="w-4 mt-3 border-1 border-bl1"/>
                                <input placeholder="To" className=" outline-none border focus:border-gray-400 rounded ml-1 mr-3 p-1 w-[125px]"/>
                            </div>          
                        </div>
                        <div>
                            <div className="mx-2 my-1 px-2 py-1">Type</div>
                            <div className=" my-1 px-2 py-1 text-sm font-normal">
                                <span className=" inline-flex m-1"><TripleCheckbox props={{name:"Option1"}}/>Option1</span>
                                <span className=" inline-flex m-1"><TripleCheckbox props={{name:"Option2"}}/>Option2</span>
                                <span className=" inline-flex m-1"><TripleCheckbox props={{name:"Option3"}}/>Option3</span>
                                <span className=" inline-flex m-1"><TripleCheckbox props={{name:"Option4"}}/>Option4</span>
                                <span className=" inline-flex m-1"><TripleCheckbox props={{name:"Option5"}}/>Option5</span>
                                <span className=" inline-flex m-1"><TripleCheckbox props={{name:"Option6"}}/>Option6</span>
                            </div>
                            <div className="mx-2 my-1 px-2 py-1">Format</div>
                            <div className=" my-1 px-2 py-1 text-sm font-normal">
                                <span className=" inline-flex m-1"><TripleCheckbox props={{name:"Option1"}}/>Option1</span>
                                <span className=" inline-flex m-1"><TripleCheckbox props={{name:"Option2"}}/>Option2</span>
                                <span className=" inline-flex m-1"><TripleCheckbox props={{name:"Option3"}}/>Option3</span>
                                <span className=" inline-flex m-1"><TripleCheckbox props={{name:"Option4"}}/>Option4</span>
                                <span className=" inline-flex m-1"><TripleCheckbox props={{name:"Option5"}}/>Option5</span>
                                <span className=" inline-flex m-1"><TripleCheckbox props={{name:"Option6"}}/>Option6</span>
                            </div>
                            <div className="mx-2 my-1 px-2 py-1">Translation status</div>
                            <div className=" my-1 px-2 py-1 text-sm font-normal">
                                <span className=" inline-flex m-1"><TripleCheckbox props={{name:"Option1"}}/>Option1</span>
                                <span className=" inline-flex m-1"><TripleCheckbox props={{name:"Option2"}}/>Option2</span>
                                <span className=" inline-flex m-1"><TripleCheckbox props={{name:"Option3"}}/>Option3</span>
                                <span className=" inline-flex m-1"><TripleCheckbox props={{name:"Option4"}}/>Option4</span>
                                <span className=" inline-flex m-1"><TripleCheckbox props={{name:"Option5"}}/>Option5</span>
                                <span className=" inline-flex m-1"><TripleCheckbox props={{name:"Option6"}}/>Option6</span>
                            </div>
                            <div className="mx-2 my-1 px-2 py-1">Title status</div>
                            <div className=" my-1 px-2 py-1 text-sm font-normal">
                                <span className=" inline-flex m-1"><TripleCheckbox props={{name:"Option1"}}/>Option1</span>
                                <span className=" inline-flex m-1"><TripleCheckbox props={{name:"Option2"}}/>Option2</span>
                                <span className=" inline-flex m-1"><TripleCheckbox props={{name:"Option3"}}/>Option3</span>
                                <span className=" inline-flex m-1"><TripleCheckbox props={{name:"Option4"}}/>Option4</span>
                                <span className=" inline-flex m-1"><TripleCheckbox props={{name:"Option5"}}/>Option5</span>
                                <span className=" inline-flex m-1"><TripleCheckbox props={{name:"Option6"}}/>Option6</span>
                            </div>                    
                        </div>
                    </div>
                </div>
                <div className=" my-4 px-2 py-1 inline-flex w-full justify-between">
                    <button type="button" class="mx-2 w-1/2 px-6 py-1 text-base font-medium text-center text-gray-600 bg-gray-300 rounded hover:bg-gray-400 hover:bg-opacity-75 dark:bg-btndbg dark:hover:bg-opacity-75">Reset</button>
                    <button type="button" class="mx-2 w-1/2 px-6 py-1 text-base font-medium text-center text-white bg-green-500 rounded hover:bg-green-600 hover:bg-opacity-75">Submit</button>
                </div>
            </div>
        </form>

    );
}