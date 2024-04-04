import { useQuery } from "react-query";
import axiosInstance from "../../services"
import "./style.css"

function userManagement() {

    const fetchApi = async () => {
        const responce = await axiosInstance.get("https://fakestoreapi.com/users/1");
        const data = await responce.data;
        return data;
    }

    const { data } = useQuery(["user-management"], fetchApi)

    return (
        <div className="parent">
            <div className="child">
                {data?.id}
            </div>
            <div className="child">
                {data?.email}
            </div>
            <div className="child">
                {data?.username}
            </div>
            <div className="child">
                {data?.password}
            </div>
            <div className="child">
                {data?.name?.firstname}
            </div>
            <div className="child">
                {data?.name?.lastname}
            </div>
        </div>

    )
}
export default userManagement