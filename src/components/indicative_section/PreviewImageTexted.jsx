export function PreviewImageTexted({props}) {
    const url = `linear-gradient(180deg, rgba(255,255,255,0.0) 40%, rgba(0,0,0,0.87) 100%), url(${props.coverImage})`;
    return(
        <a href={props.href} title={props.eng_name}>
            <div style={{
                backgroundImage: url,
                width:"100%",
                height:"0",
                paddingBottom:"135%",
                backgroundSize:"cover",
                display:"flex",
                flexDirection:"column-reverse",
                alignItems:"end",
                marginTop:"4px",
                marginBottom:"4px",
                borderRadius:"4px",
                boxShadow:"4px 4px 8px 0px rgba(34, 60, 80, 0.2)"
            }}>
                <div id="preview" className=" rounded-b w-full max-h-16 py-1 px-2 mb-[-130%] text-sm ">
                    <div>{props.modelType}</div>
                    <div>{props.eng_name}</div>
                </div>       
        </div>
        </a>
    );
}