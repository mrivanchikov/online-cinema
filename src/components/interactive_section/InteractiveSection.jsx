import { SwitchBox } from "./SwitchBox";

export function InteractiveSection() {
    //
    const switchesFiller = ["button1","button2","button3","button4","button5"];
    //

    return(
        <div>
            <SwitchBox switches={switchesFiller} name="Janres"></SwitchBox>
            <SwitchBox switches={switchesFiller} name="Categories"></SwitchBox>
        </div>
    );
}