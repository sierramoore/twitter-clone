import React from "react";
import { Button, Card, CardContent, Typography } from '@mui/material';

export const List = ({users, action, title, ...props}) => {

    return (
        <>
            <Card {...props}>
                <Typography variant="h6">{title}</Typography>
                {users.map(person => {
                    return <CardContent key={person}>
                        <div className="flex">
                            <Typography>{person}</Typography>
                            <Button variant="outlined" size="small" onClick={() => action(person)}>Follow</Button>
                        </div>
                    </CardContent>
                    })
                }
            </Card>
        </>  
    );
}