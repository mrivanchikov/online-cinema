//component not needed now

import {ReactComponent as Arrow} from '../../assets/arrow-left.svg';

export function Sidebar({props}) {
    return(
        <div className=" fixed w-[300px] h-[94vh] flex-col rounded bg-white dark:bg-drkbg  font-sans">
            <div className=" w-full max-w-[284px] mx-2 mt-1 px-2 pb-1 pt-2 inline-flex justify-between rounded">
                <div className=" cursor-pointer font-semibold inline-flex">
                    <span className=" m-1"><Arrow/></span>
                    <span className=" mx-1">{props.name}</span>
                </div>
                <button className=" mx-1 text-gray-500 hover:text-gray-700 text-sm font-normal">reset</button>
            </div>
        </div>
    );
}