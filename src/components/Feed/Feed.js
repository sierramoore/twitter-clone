import React from "react";
import { useSelector } from 'react-redux';
import { Card, CardContent, Typography } from '@mui/material';

export const Feed = () => {
    const tweets = useSelector((state) => state.tweets.tweets);

    return (
        <>
            <Typography variant="h6" textAlign="center" mt={3}>Feed</Typography>
            {tweets.map(tweet => {
                return <Card test-id='feed'>
                        <CardContent>
                            <div className="flex">
                                <Typography variant="h6">{tweet.username}</Typography>
                                <Typography>{tweet.time}</Typography>
                            </div>
                            <Typography textAlign="center">{tweet.text}</Typography>
                        </CardContent>
                    </Card>
            })}
        </>
    );
}