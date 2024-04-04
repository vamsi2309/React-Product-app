import { ReactNode } from "react";
import { RootState, useSelector } from "../../store";
import Menu from "../menu"
import "./style.css"

interface Props {
    children: ReactNode;
}
function Layout({ children }: Props) {


    return <>{
        <>
            <div className="entry">
                <div className="menu12"><Menu /></div>
                <div className="child">{children}</div>
            </div>
        </>
    }</>;
}

export default Layout;
