import { configureStore } from '@reduxjs/toolkit';
import tweetsReducer from '../state';
 
export const store = configureStore({
    reducer: {
        tweets: tweetsReducer
    }
});