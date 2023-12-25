import { createAction, createReducer } from '@reduxjs/toolkit';
import {ReactComponent as SearchIcon} from '../../assets/magnifying-glass.svg';
import {ReactComponent as CrossIcon} from '../../assets/x-mark.svg';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import { useClickOutside } from '../../hooks/useClickOutside';
import { SearchList } from './SearchList';
import { mockData } from '../../mockData';

const initialSearchState = {isActivated:false};
//
const mock = await mockData();
//
export const searchActivationAction = createAction("searchActivation");
export const searchReducer = createReducer(initialSearchState,(builder)=>{
    builder
    .addCase(searchActivationAction, (state, action)=>{
        state.isActivated=action.payload;
    })
});

export function SearchBar(props) {
    const [textInput, getTextInput] = useState("");
    const [currentPlaceholder, setPlaceholder] = useState();
    const dispatch = useDispatch();
    const currentSearchState = useSelector((state)=>state.isActivated);
    const searchBarRef = useRef(null);
    useClickOutside(searchBarRef,()=>{
        if (currentSearchState) {
            dispatch(searchActivationAction(false));
        }
    });
    const scrollLockHandler = (isLocked)=>{
        if (isLocked) {
            document.body.classList.add("overflow-hidden");
        }
        else{
            document.body.classList.remove("overflow-hidden");
        }
    }
    useEffect(()=>{
        scrollLockHandler(currentSearchState);
    },[currentSearchState]);
    useEffect(()=>{
        const defaultOption = document.querySelector("#opt1");
        defaultOption.checked=true;
        setPlaceholder(defaultOption.value);
    },[]);
        return(
                <div className={currentSearchState ? "transition-all duration-300 opacity-100 visible" : "transition-all duration-300 opacity-0 invisible"}>
                    <div className=" absolute left-0 top-0 w-full h-full bg-black opacity-60"></div>
                    <div className=" absolute top-2 max-w-[780px] px-[80px] " ref={searchBarRef}>
                        <div className=" ml-32 inline-flex p-2 bg-white rounded">
                            <button className=" text-black p-1"><SearchIcon/></button>
                            <input className=" dark:text-black outline-none w-[620px]" placeholder={currentPlaceholder} onChange={e=>getTextInput(e.target.value)}></input>
                            <button className=" text-black p-1" onClick={()=>dispatch(searchActivationAction(false))}><CrossIcon/></button>
                        </div>

                        <div className="ml-32">
                            <div className="my-1 py-1 inline-flex w-[620px]">
                                <input id="opt1" type="radio" name="searchButtons" value={"SearchOption 1"} onInput={e=>setPlaceholder(e.target.value)} className=" peer/opt1 hidden"/><label for="opt1" className="p-1 mr-1 rounded cursor-pointer bg-gr1 dark:bg-btndbg dark:text-white text-bl1 text-sm peer-checked/opt1:bg-or1 peer-checked/opt1:text-white dark:peer-checked/opt1:bg-or1">SearchOption 1</label>
                                <input id="opt2" type="radio" name="searchButtons" value={"SearchOption 2"} onInput={e=>setPlaceholder(e.target.value)} className=" peer/opt2 hidden"/><label for="opt2" className="p-1 mr-1 rounded cursor-pointer bg-gr1 dark:bg-btndbg dark:text-white text-bl1 text-sm peer-checked/opt2:bg-or1 peer-checked/opt2:text-white dark:peer-checked/opt2:bg-or1">SearchOption 2</label>
                                <input id="opt3" type="radio" name="searchButtons" value={"SearchOption 3"} onInput={e=>setPlaceholder(e.target.value)} className=" peer/opt3 hidden"/><label for="opt3" className="p-1 mr-1 rounded cursor-pointer bg-gr1 dark:bg-btndbg dark:text-white text-bl1 text-sm peer-checked/opt3:bg-or1 peer-checked/opt3:text-white dark:peer-checked/opt3:bg-or1">SearchOption 3</label>
                                <input id="opt4" type="radio" name="searchButtons" value={"SearchOption 4"} onInput={e=>setPlaceholder(e.target.value)} className=" peer/opt4 hidden"/><label for="opt4" className="p-1 mr-1 rounded cursor-pointer bg-gr1 dark:bg-btndbg dark:text-white text-bl1 text-sm peer-checked/opt4:bg-or1 peer-checked/opt4:text-white dark:peer-checked/opt4:bg-or1">SearchOption 4</label>
                                <input id="opt5" type="radio" name="searchButtons" value={"SearchOption 5"} onInput={e=>setPlaceholder(e.target.value)} className=" peer/opt5 hidden"/><label for="opt5" className="p-1 mr-1 rounded cursor-pointer bg-gr1 dark:bg-btndbg dark:text-white text-bl1 text-sm peer-checked/opt5:bg-or1 peer-checked/opt5:text-white dark:peer-checked/opt5:bg-or1">SearchOption 5</label>
                            </div>
                        <SearchList props={{mock,textInput}}/>                          
                        </div>
                    </div>
                </div>            
        );
}