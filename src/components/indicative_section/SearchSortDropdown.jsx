import { useRef, useState } from "react";
import { FaSortAmountDown } from "react-icons/fa";
import { FaSortAmountDownAlt } from "react-icons/fa";
import { SlArrowDown } from "react-icons/sl";
import { useClickOutside } from "../../hooks/useClickOutside";

export function SearchSortDropdown(params) {
    const dropdownRef = useRef(null);
    useClickOutside(dropdownRef,()=>{
        if (isExpanded) {
            setTimeout(()=>setExpanded(false),101);
        }
    });
    const [sortType,getSortType]=useState("Number of ratings");
    const [sortMethod,setSortMethod]=useState("descending");
    const [isExpanded, setExpanded]=useState(false);
    return(
        <div>
            <div className=" text-lg inline-flex cursor-pointer m-1 p-1 rounded hover:bg-gray-400 hover:bg-opacity-20" onClick={()=>setExpanded(!isExpanded)}>
                <span className=" m-1 mr-2">{<FaSortAmountDownAlt/>}</span>
                <span>By {sortType.toLowerCase()}</span>
                <span className=" m-1 ml-2"><SlArrowDown/></span>
            </div>
            <div ref={dropdownRef} className={` absolute bg-white dark:bg-pupdbg dark:text-white rounded-md p-2 px-4 text-bl1 ${isExpanded ? "transition-all duration-100 opacity-100 translate-y-2 visible" : "transition-all duration-100 opacity-0 -translate-y-3 invisible"}`}>
                <span className=" m-1 text-gray-400">Sort by</span>
                <div className=" flex-col border-b mb-1 pb-2">
                    <label className=" block cursor-pointer p-[2px] rounded hover:bg-gray-400 hover:bg-opacity-20"><input className=" m-1" type="radio" name="sortType" value="Rating"></input>Rating</label>
                    <label className=" block cursor-pointer p-[2px] rounded hover:bg-gray-400 hover:bg-opacity-20"><input className=" m-1" type="radio" name="sortType" value="Number of ratings"></input>Number of ratings</label>
                    <label className=" block cursor-pointer p-[2px] rounded hover:bg-gray-400 hover:bg-opacity-20"><input className=" m-1" type="radio" name="sortType" value="Views"></input>Views</label>
                    <label className=" block cursor-pointer p-[2px] rounded hover:bg-gray-400 hover:bg-opacity-20"><input className=" m-1" type="radio" name="sortType" value="Upload date"></input>Upload date</label>
                    <label className=" block cursor-pointer p-[2px] rounded hover:bg-gray-400 hover:bg-opacity-20"><input className=" m-1" type="radio" name="sortType" value="Update date"></input>Update date</label>
                    <label className=" block cursor-pointer p-[2px] rounded hover:bg-gray-400 hover:bg-opacity-20"><input className=" m-1" type="radio" name="sortType" value="Number of epizodes"></input>Number of epizodes</label>
                </div>
                <div className=" flex-col mt-2">
                    <label className=" block cursor-pointer p-[2px] rounded hover:bg-gray-400 hover:bg-opacity-20"><input className=" m-1" type="radio" name="sortMethod" value="descending"></input>Descending</label>
                    <label className=" block cursor-pointer p-[2px] rounded hover:bg-gray-400 hover:bg-opacity-20"><input className=" m-1" type="radio" name="sortMethod" value="ascending"></input>Ascending</label>
                </div>
            </div>
        </div>
    );
}