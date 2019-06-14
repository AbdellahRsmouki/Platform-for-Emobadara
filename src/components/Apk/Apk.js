import React, { Component } from 'react'
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';
//import logo from '../../assets/img/apk.png'

//This is the app that we will be showing inside of each Table.
//TODO: Make the logo in the props
export class Apk extends Component {
    render() {
        return (
            <Card style={{ display: 'flex', flexDirection: 'row',width:'100%'}}>
                <CardMedia
                    image={require("../../assets/img/apk.png")}
                    style={{height:100,width:100}}
                />
                <CardContent>
                    <Typography component="h5" variant="h5">Apk Title</Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        Description of the app
                    </Typography>
                </CardContent>
            </Card>
        )
    }
}

export default Apk
