import { useContext } from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
    let { user } = useContext(UserContext);

    if (!user) {
        return <div className="mt-4 p-4 bg-yellow-100 border border-yellow-400 text-yellow-700 rounded">
            No user logged in
        </div>;
    }

    return <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
        Welcome! {user.firstName}
    </div>;
};

export default Profile;
