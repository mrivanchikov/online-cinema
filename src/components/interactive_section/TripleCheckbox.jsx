import { useState } from "react";

export function TripleCheckbox({props}) {
    const initialState={checkboxValue:null,checkboxColor:"checked:bg-green-600 checked:border-none checked:hover:bg-opacity-90 checked:hover:bg-green-700",checkboxIcon:"checked:after:content-check"};
    const [isChecked, setChecked]=useState(false);
    const [checkboxState, setValue]=useState(initialState);
    const checkboxHandler = ()=>{
        switch (checkboxState.checkboxValue) {
            case null:
                setChecked(true);                
                setValue(checkboxState=>({
                    ...checkboxState,
                    ...{
                        checkboxValue:true,
                        checkboxColor:"checked:bg-green-600 checked:border-none checked:hover:bg-opacity-90 checked:hover:bg-green-700",
                        checkboxIcon:"checked:after:content-check"
                    }
                }));
                break;
            case true:
                setChecked(true);
                setValue(checkboxState=>({
                    ...checkboxState,
                    ...{
                        checkboxValue:false,
                        checkboxColor:"checked:bg-red-600 checked:border-none checked:hover:bg-opacity-90 checked:hover:bg-red-700",
                        checkboxIcon:"checked:after:content-cross"
                    }
                }));
                break;
            case false:
                setChecked(false);
                setValue(checkboxState=>({
                    ...checkboxState,
                    ...initialState
                }));
                break;
            default:
                break;
        }
    }
    return(
        <div className=" flex w-4 h-4 m-1 cursor-pointer rounded" onClick={()=>{checkboxHandler();console.log(checkboxState);}}>
            <input className={` appearance-none cursor-pointer w-4 h-4 rounded-sm border-[1.5px] border-neutral-500 hover:border-neutral-600 text-center text-white text-[0px] ${checkboxState.checkboxColor} ${checkboxState.checkboxIcon} `} name={props.name} checked={isChecked} type="checkbox" value={checkboxState.checkboxValue}/>                 
        </div>
    );
}