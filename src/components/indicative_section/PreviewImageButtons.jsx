import { FaExclamationTriangle, FaPencilAlt, FaPlusSquare, FaRss } from "react-icons/fa";


export function PreviewImageButtons({props}) {
    const url = `linear-gradient(180deg, rgba(255,255,255,0.0) 40%, rgba(0,0,0,0.87) 100%), url(${props.coverImage})`;
    return(
        <a href={props.href} title={props.eng_name}>
            <div style={{
                backgroundImage: url,
                width:"100%",
                height:"100%",
                aspectRatio:"3/4",
                backgroundSize:"cover",
                display:"flex",
                flexDirection:"column-reverse",
                alignItems:"end",
                marginTop:"4px",
                marginBottom:"4px",
                borderRadius:"4px",
                boxShadow:"4px 4px 8px 0px rgba(34, 60, 80, 0.2)"
            }}>
                <div className=" w-full inline-flex justify-between text-gray-300">
                    <button className=" my-2 mx-auto"><FaRss/></button>
                    <button className=" my-2 mx-auto"><FaExclamationTriangle/></button>
                    <button className=" my-2 mx-auto"><FaPlusSquare/></button>
                    <button className=" my-2 mx-auto"><FaPencilAlt/></button>
                </div>       
        </div>
        </a>
    );
}