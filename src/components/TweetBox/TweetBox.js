import React, {useState} from "react";
import { useDispatch } from 'react-redux';
import { TextField, Button, Card } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

export const TweetBox = () => {
    const dispatch = useDispatch();
    const [tweetText, setTweetText] = useState('');

    const postTweet = () => {
        dispatch({ type: 'POST_TWEET', payload: { text: tweetText, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), username: 'Me' }})
        setTweetText('')
    }
    return (
        <>
            <Card>
                <div className="col">
                    <TextField test-id='input-tweet' multiline minRows={3} placeholder="Tweet something" onChange={(e) => setTweetText(e.target.value)} value={tweetText} />
                    <Button style={{margin: '8px 10px ', alignSelf: 'flex-end'}} test-id='submit-tweet' variant="contained" onClick={postTweet} endIcon={<SendIcon />}>Tweet</Button>
                </div>
            </Card>
        </>
    );
}