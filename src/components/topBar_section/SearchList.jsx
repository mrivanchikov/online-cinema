import { PreviewImage } from "../indicative_section/PreviewImage";

export function SearchList({props}) {
    const previewFiller = ()=>{
        if (props.textInput.length>1) {
            let filler = props.mock.data.map((filler,i)=>{
                return(
                        <div className="inline-flex p-2 py-4 w-full max-w-[680px] border-t first:border-t-transparent hover:bg-opacity-10 hover:bg-slate-400">
                            <a className=" w-full" href={props.mock.data[i].href}>  
                                <div className=" inline-flex w-full">
                                    <div className=" w-[70px] h-[100px] min-w-[70px] "><PreviewImage props={props.mock.data[i]}></PreviewImage></div>
                                    <div id="searchLine" className="ml-3 mt-1 text-sm font-semibold max-h-[40px]">
                                        {props.mock.data[i].eng_name}
                                        <text className=" ml-1 text-sm text-gray-500">/ {props.mock.data[i].name}</text>
                                    </div>                    
                                </div>
                            </a>                    
                        </div>                
                )
            })
        return filler;            
        }
        
    }
    return(
        <div id="" className="scrollList ">
            {previewFiller()}
        </div>
    );
}