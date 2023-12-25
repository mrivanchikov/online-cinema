export function NewsBlock(props) {
    let newsList = [];
    for (let i = 0; i < props.newsList.length; i++) {
        const element = <div>{props.newsList[i]}</div>;
        newsList.push(element);
    }

    return(
        <div className="my-5 px-5 rounded bg-white dark:bg-drkbg">
            <div className="p-1 text-lg font-semibold font-sans">{props.newsType}</div>
            <div className="p-1 text-base text-bl1 dark:text-white">{newsList}</div>
            <div className="p-1 text-base text-bl1 dark:text-white">View more</div>
        </div>
    );
}