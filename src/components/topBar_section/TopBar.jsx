import {ReactComponent as Icon} from '../../assets/moon.svg';
import {ReactComponent as SearchIcon} from '../../assets/magnifying-glass.svg';
import {ReactComponent as MenuIcon} from '../../assets/bars3.svg';
import {ReactComponent as ForumIcon} from '../../assets/chat-bubbles.svg';
import {ReactComponent as FaqIcon} from '../../assets/question-mark.svg';
import {ReactComponent as ShowMoreIcon} from '../../assets/ellipsis-horizontal.svg';
import { DropdownMenu } from './DropdownMenu';
import { useState, useRef } from 'react';
import { ShowMore } from './ShowMore';
import { useClickOutside } from '../../hooks/useClickOutside';
import { SearchBar } from './SearchBar';

export function TopBar() {
    const [currentSearchState, setSearchState]=useState(false);
    const menuRef = useRef(null);
    const showMoreRef = useRef(null);
    useClickOutside(menuRef,()=>{
        if (isOpen) {
            setTimeout(()=>setOpen(false),210);
        }
    });
    useClickOutside(showMoreRef,()=>{
        if (isShowed) {
            setTimeout(()=>setShowed(false),210);
        }
    });
    const [isOpen, setOpen] = useState(false);
    const [isShowed, setShowed] = useState(false);
    const dropdownHandler = ()=>{
        setOpen(!isOpen);
    }
    const showMoreHandler = ()=>{
        setShowed(!isShowed);
    }
    const searchHandler =()=>{
        setSearchState(true);
    }
    const [isDark, switchTheme] = useState();
    const darkModeHandler = (isDark)=>{
        if (!isDark) {
            document.documentElement.classList.add("dark");
            switchTheme(true);
        }
        else{
            document.documentElement.classList.remove("dark");
            switchTheme(false);
        }
    }
    return(
        <nav className="sticky top-0 w-full m-0">
            <div className=" flex bg-or1 dark:bg-drkbg justify-center mx-auto">
                <div className="w-[1200px]">
                    <div className="  mx-auto my-2 min-w-[900px] max-w-[1200px] w-full inline-flex justify-between text-white text-base">

                        <a href={"/"}><div className="py-1" >Name/Logo</div></a>
                        <div className="px-3 inline-flex font-bold font-sans">
                            <button className="mx-1 p-1 inline-flex rounded hover:bg-opacity-10 hover:bg-slate-100" onClick={()=>dropdownHandler()}><div className="pt-1 pr-1"><MenuIcon/></div>Catalog</button><div ref={menuRef}><DropdownMenu state={isOpen}/></div>
                            <button className="mx-1 p-1 inline-flex rounded hover:bg-opacity-10 hover:bg-slate-100" onClick={()=>searchHandler()}><div className="pt-1 pr-1"><SearchIcon/></div>Search</button>
                            <button className="mx-1 p-1 inline-flex rounded hover:bg-opacity-10 hover:bg-slate-100"><div className="pt-1 pr-1"><ForumIcon/></div>Forum</button>
                            <button className="mx-1 p-1 inline-flex rounded hover:bg-opacity-10 hover:bg-slate-100"><div className="pt-1 pr-1"><FaqIcon/></div>FAQ</button>
                            <button className="mx-1 p-1 rounded hover:bg-opacity-10 hover:bg-slate-100" onClick={()=>showMoreHandler()}><ShowMoreIcon/></button><div ref={showMoreRef}><ShowMore state={isShowed}/></div>
                        </div>
                        <div className=" px-9 inline-flex">
                            <button className="mx-1 p-1 rounded hover:bg-opacity-10 hover:bg-slate-100">Sign In</button>
                            <button className="mx-1 p-1 border rounded hover:bg-opacity-10 hover:bg-slate-100">Sign Up</button>
                            <button className="mx-1 p-1 rounded hover:bg-opacity-10 hover:bg-slate-100" onClick={()=>darkModeHandler(isDark)}><Icon/></button>
                        </div>
                    </div>
                <SearchBar props={{currentSearchState:currentSearchState,setSearchState:setSearchState}}/>            
                </div>
            </div>
        </nav>    
    );
}