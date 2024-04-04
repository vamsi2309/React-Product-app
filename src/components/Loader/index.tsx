import { ComponentProps } from "react";
import { Loader1, Div } from "./loader.style";

function Loader(props: ComponentProps<"div">) {

    return (
        <Div {...props}>
            <Loader1 />
        </Div>
    )
}
export default Loader;