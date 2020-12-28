import React from 'react'
// import Navbar from './Navbar'
import Grid from "@material-ui/core/Grid";
import { useSpring, animated } from 'react-spring'
import './style.css'
import MyCard from "./MyCard";
// import "fontsource-roboto";

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`


export default function Project() {
    const [myprops, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))

    return (
        <div>
            {/* <Navbar/> */}
          
     

      <Grid container direction="row" spacing={2} alignItems="center">
        <Grid item xs={12} md={4} >
        <animated.div
                class="card"
                onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                onMouseLeave={() => set({ xys: [0, 0, 1] })}
                style={{ transform: myprops.xys.interpolate(trans) }}
            >
                <MyCard
            title="Portfolio Project"
            desc="i use React, React router and Material UI and Firebase in this project"
            imgSrc="/Users/umairalikhan/Downloads/hdd git/lwf-batch1-portfolio-app/src/images/pro.png"
            git="https://github.com/khan110/lwf-batch1-portfolio-app"
            url="https://port-app-83470.web.app"
          />
          </animated.div>
        </Grid>

        <Grid item xs={12} md={4}>
        <animated.div
                class="card"
                onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                onMouseLeave={() => set({ xys: [0, 0, 1] })}
                style={{ transform: myprops.xys.interpolate(trans) }}
            >

          <MyCard
            title="JavaScript ES6"
            desc="knowledge of ES6 syntax let, const , spread operator, loops, destrucuring(array, object), arrow functions, array and object extensions, Fetch API"
            imgSrc="https://www.avibeweb.com/images/blog/javascript-logo-thembnail.jpg"
          />          </animated.div>

        </Grid>

        <Grid item xs={12} md={4}>
        <animated.div
                class="card"
                onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                onMouseLeave={() => set({ xys: [0, 0, 1] })}
                style={{ transform: myprops.xys.interpolate(trans) }}
            >

          <MyCard
            title="React.JS"
            desc="kowledge of React Functional components, React Hooks,Api Requests, React Router"
            imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3G-JuvtI8fUHeCfyH4g8d3Lxuyt3QMMmcFg&usqp=CAU"
          />
                    </animated.div>

        </Grid>
      </Grid>
        </div>
    )
}