export function PreviewImage({props}) {
    const url = `url(${props.coverImage})`;
    return(
        <a href={props.href} title={props.eng_name}>
            <div style={{
                backgroundImage: url,
                width:"100%",
                height:"100%",
                aspectRatio:"3/4",
                backgroundSize:"contain",
                marginTop:"4px",
                marginBottom:"4px",
                borderRadius:"4px",
                boxShadow:"4px 4px 8px 0px rgba(34, 60, 80, 0.2)"
            }}> 
        </div>
        </a>
    );
}