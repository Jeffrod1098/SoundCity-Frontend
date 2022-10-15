import React from "react";
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useLocation } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import ErrorMessage from "../components/ErrorMessage";
import Loader from "../components/Loader";
import { getUserDetails } from "../actions/userActions";

const ProfilePage = () => {
    return (
        <div>
            <h3>User Profile</h3>
        </div>
    )
}

export default ProfilePage