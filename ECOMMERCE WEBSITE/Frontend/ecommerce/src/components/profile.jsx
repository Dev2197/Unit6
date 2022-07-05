import {  useSelector } from "react-redux";
import './profile.css'
export const Profile = ()=>{
    const profile = useSelector(store=>store.Profile.profile)
    console.log(profile)
    return(
        <div className="profileContainer">
            <div className="profilePic">
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="" />
            </div>
            <div className="userDetails">
                <h2>My Account</h2>
                  <p className="userTitle">Your Name</p>
                    <div className="detailsBox">{profile.name}</div>
                    <p className="userTitle">Email</p>
                    <div className="detailsBox">{profile.email}</div>
                    <p className="userTitle">Mobile Number</p>
                    <div className="detailsBox">{profile.mobileNo}</div>
                </div>
        </div>
    )
}