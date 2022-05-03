import React from "react";
import { Sidebar } from "../Sidebar/Sidebar";
import { Feed } from "../Feed/Feed";
import { TweetBox } from "../TweetBox/TweetBox";
import './Homepage.css';

export const Homepage = () => {
    return (
        <div className="container">
            <Sidebar />
            <div className="main">
                <TweetBox />
                <Feed />
            </div>
        </div>
    );
}
