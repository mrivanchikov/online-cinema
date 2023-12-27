export function Footer(params) {
    return (
        <footer className=" mt-5 bg-white dark:bg-drkbg dark:text-white">
            <div className=" max-w-[1200px] mx-auto pb-1">
                <div className=" mt-3 inline-flex">
                    <span className="m-1 text-lg font-semibold">Theme</span>
                    <div className="">
                        <div className=" hidden">light</div>
                        <button className=" border-2 rounded w-6 h-6 mt-2 mx-1 bg-white text-bl1 ">A</button>
                    </div>
                    <div className="">
                        <div className=" hidden">dark</div>
                        <button className=" border-2 border-gray-700 rounded w-6 h-6 mt-2 mx-1 bg-drkfill text-white ">A</button>
                    </div>
                </div>
                <div className=" p-1">Disclaimer</div>
                <div className=" my-1 p-1 inline-flex w-full justify-between">
                    <ul className=" inline-flex">
                        <li className=" mr-2 "><a className=" text-or1 hover:underline" href="/">Source 1</a></li>
                        <li className=" ml-1 mr-2 list-disc list-inside"><a className=" text-or1 hover:underline" href="/">Source 2</a></li>
                        <li className=" ml-1 mr-2 list-disc list-inside"><a className=" text-or1 hover:underline" href="/">Source 3</a></li>
                        <li className=" ml-1 mr-2 list-disc list-inside"><a className=" text-or1 hover:underline" href="/">Source 4</a></li>
                        <li className=" ml-1 mr-2 list-disc list-inside"><a className=" text-or1 hover:underline" href="/">Source 5</a></li>
                        <li className=" ml-1 mr-2 list-disc list-inside"><a className=" text-or1 hover:underline" href="/">Source 6</a></li>
                    </ul>
                    <span className=" mx-3"><a className=" text-or1 hover:underline" href="/">Name</a></span>
                </div>
            </div>            
        </footer>
    );
}