import React from "react";
import { List } from "./List";
import { useSelector, useDispatch } from 'react-redux';
import './Sidebar.css'

export const Sidebar = () => {
    const dispatch = useDispatch();
    const recomendedFollowers = useSelector((state) => state.tweets.recomendedFollowers);
    const following = useSelector((state) => state.tweets.following);

    const followPerson = (person) => {
        dispatch({ type: 'FOLLOW_USER', payload: person })
    }
    const unFollowPerson = (person) => {
        dispatch({ type: 'UNFOLLOW_USER', payload: person })
    }
    return (
        <>
            <div className="sidebarCol">
                <List
                    test-id='following'
                    users={following}
                    title='Following'
                    action={unFollowPerson}
                />
                <List
                    test-id='follow'
                    users={recomendedFollowers}
                    title='Follow'
                    action={followPerson}
                />
            </div>
        </>
    );
}