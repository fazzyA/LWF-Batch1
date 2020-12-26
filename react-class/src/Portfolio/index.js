import React,{useState} from 'react'
import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';
import MyCard from './MyCard';
import MyTable from './MyTable';

function Portfolio() {
    const [html, sethtml] = useState(
        {
            title: 'HTML',
        desc: 'V5'
    })
    const [JS, setJS] = useState({
        title:'JavaSript',
        desc: 'ES6,ES7,hello world,hello world,hello world'
    })
    return (
        <>
            
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Grid item md={6}><h1><Paper>Faiza Aziz Khan</Paper></h1></Grid>
            </Grid>
            <Grid container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Grid item md={12}><MyTable/></Grid>
            </Grid>

            <Grid container direction="row" spacing={3}>

                <Grid item lg={6} md={6} xs={12}><h1>First column</h1></Grid>
                <Grid item lg={6} md={6} xs={12}><h1>second column</h1></Grid>
            </Grid>
            <Grid container direction="row">
                <Grid item md={3} xs={6}><MyCard data={html}/></Grid>
                <Grid item md={3} xs={8}><MyCard data={JS}/></Grid>
                <Grid item md={3} xs={6}><MyCard  data={html}/></Grid>
                <Grid item md={3} xs={6}><MyCard  data={html}/></Grid>
            </Grid>



            {/*  */}
        </>
    )
}

export default Portfolio
