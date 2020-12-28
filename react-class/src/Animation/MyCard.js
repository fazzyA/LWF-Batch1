import React from 'react';
import { makeStyles, CardActions, Button } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import HttpIcon from '@material-ui/icons/Http';
// import { useSpring, animated } from 'react-spring'

const useStyles = makeStyles({
    root: {
        maxWidth: 450,
        maxHeight: 350,

    },
    media: {
        height: 160,


    },
});
// const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
// const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

export default function MyCard(props) {
    const classes = useStyles();
    // const [myprops, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))


    return (
        <>
            {/* <animated.div
                class="card"
                onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                onMouseLeave={() => set({ xys: [0, 0, 1] })}
                style={{ transform: myprops.xys.interpolate(trans) }}
            >
 */}
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={props.imgSrc}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {props.title}
                        </Typography>
                        <Typography variant="body1" color="textSecondary" component="p">
                            {props.desc}
                        </Typography>
                    </CardContent>
                </CardActionArea>

                <CardActions>
                    <Button size="small" color="primary" href={props.git}>
                        Git Repo <GitHubIcon />
                    </Button>
                    <Button size="small" color="primary" href={props.url}>
                        Project URL  <HttpIcon fontSize="large" />
                    </Button>
                </CardActions>

            </Card>
            {/* </animated.div> */}
        </>
    );
}