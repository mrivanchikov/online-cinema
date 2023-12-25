export function PreviewImageTexted({props}) {
    const url = `url(${props.coverImage})`;
    return(
        <a href={props.href} title={props.eng_name}>
            <div style={{
                backgroundImage: url,
                width:"100%",
                height:"100%",
                backgroundSize:"contain",
                display:"flex",
                flexDirection:"column-reverse",
                alignItems:"end",
                marginTop:"4px",
                marginBottom:"4px",
                borderRadius:"4px",
                boxShadow:"4px 4px 8px 0px rgba(34, 60, 80, 0.2)"
            }}>
                <div id="preview" className=" rounded-b w-full max-h-16 p-1 text-sm bg-gradient-to-b from-black/0 to-black/90">
                    <div>{props.modelType}</div>
                    <div>{props.eng_name}</div>
                </div>       
        </div>
        </a>
    );
}