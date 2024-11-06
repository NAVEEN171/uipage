import React, { useState } from 'react';
import { Fragment } from 'react'
import "./landing.css"
import Context from './Context'
import upskillSvg from "../assets/svgs/upskill.svg"
import DashboardSvg from "../assets/svgs/dashboard.svg"
import StarSvg from "../assets/svgs/star.svg"
import ContentSvg from "../assets/svgs/content.svg"
import BulbSvg from "../assets/svgs/bulb.svg"
import FormsSvg from "../assets/svgs/forms.svg"
import NotifySvg from "../assets/svgs/notify.svg"
import InfoSvg from "../assets/svgs/info.svg"
import Jobsvg from "../assets/svgs/job.svg"
import MentorSvg from "../assets/svgs/mentor.svg"
import ClockSvg from "../assets/svgs/clock.svg"
import VarClockSvg from "../assets/svgs/variantclock.svg"
import VarContentSvg from "../assets/svgs/variantcontent.svg"
import ArrowSvg from "../assets/svgs/arrow.svg"
import { nanoid } from 'nanoid';



import BClockSvg from "../assets/svgs/blackclk.svg"
import CodeSvg from "../assets/svgs/code.svg"
import VideoSvg from "../assets/svgs/video.svg"
import QuestionSvg from "../assets/svgs/question.svg"
import CopySvg from "../assets/svgs/copy.svg"
import Play from "../assets/svgs/play.svg"





const contents1=[
    {
        logo:VideoSvg,
        name:"Video 1",
        display:BClockSvg,
        duration:"10:00"
    },
    {
        logo:QuestionSvg,
        name:"Article 1",
        display:BClockSvg,
        duration:"10:00"
    },
    {
        logo:QuestionSvg,
        name:"Quiz 1",
        display:BClockSvg,
        duration:"10:00"
    },
    {
        logo:CodeSvg,
        name:"Coding Exercise 1",
        display:ClockSvg,
        duration:"10:00"
    },
    {
        logo:CopySvg,
        name:"Combined Resource 1",
        display:ClockSvg,
        duration:"10:00"
    }
]


const contents2=[
    {
        logo:VideoSvg,
        name:"Video 2",
        display:BClockSvg,
        duration:"19:00"
    },
    {
        logo:QuestionSvg,
        name:"Article 2",
        display:BClockSvg,
        duration:"15:00"
    },
    {
        logo:QuestionSvg,
        name:"Quiz 2",
        display:BClockSvg,
        duration:"10:00"
    },
   
]

const contents3=[
    {
        logo:VideoSvg,
        name:"Video 3",
        display:BClockSvg,
        duration:"10:00"
    },
    {
        logo:QuestionSvg,
        name:"Article 3",
        display:BClockSvg,
        duration:"10:00"
    },
    {
        logo:QuestionSvg,
        name:"Quiz 3",
        display:BClockSvg,
        duration:"17:00"
    },
    {
        logo:CodeSvg,
        name:"Coding Exercise 3",
        display:BClockSvg,
        duration:"15:00"
    },
    {
        logo:CopySvg,
        name:"Combined Resource 3",
        display:BClockSvg,
        duration:"12:00"
    }
]

const chapters = [
    { name: "Chapter 1", time: "05:00:00", class: "chapter1" },
    { name: "Chapter 2", time: "03:00:00", class: "chapter2" },
    { name: "Chapter 3", time: "12:00:00", class: "chapter3" },
    { name: "Chapter 4", time: "02:23:00", class: "chapter4" },
    { name: "Chapter 5", time: "03:34:00", class: "chapter5" }
]



const parts = [
    {
        name: "Part 1",
        status: 45
    },
    {
        name: "Part 2",
        status: 20
    },
    {
        name: "Part 3",
        status: 0
    }
]
const contents = [contents1, contents2, contents3];


const Landing = () => {
    const [activediv, setactivediv] = useState("material");
    const [sidebardiv, setsidebardiv] = useState("upskill");
    const [activechapter, setactivechapter] = useState("chapter1");
    const arrowhandler = (num) => {
        let arrowselect="arrow "+num;
        let item = "desc-contents "+num;
        let selectedarrow=document.getElementById(arrowselect);
        if(selectedarrow.classList.contains("rotated")){
            selectedarrow.classList.remove("rotated");
        }
        else{
            selectedarrow.classList.add("rotated")
        }
        let ele = document.getElementById(item);
        if (ele.style.display === "block") {
            ele.style.display = "none";
        }
        else {
            ele.style.display = "block";
        }

    }
    return (
        <div className='container'>
            <div className='container-left'>
                <div className='side-bar'>
                    <div className='menu-wrapper'>
                        <div className='bar-wrapper'>
                        <div className='menu'>
                            <div className='bar'></div>
                            <div className='bar'></div>
                            <div className='bar'></div>
                        </div>
                        </div>
                        <div className='heading'>AlgoZenith</div>
                    </div>
                    <div className='side-bottom-container'>
                        <div className={`each-item ${sidebardiv === "dashboard" ? "active-side" : ""}`} onClick={() => { setsidebardiv("dashboard") }}>
                            <div className='img-wrapper'>
                                <img src={DashboardSvg} alt="dashboard"></img>
                            </div>
                            <div className='side-name'>Dashboard</div>
                        </div>
                        <div className={`each-item ${sidebardiv === "learn" ? "active-side" : ""}`} onClick={() => { setsidebardiv("learn") }}>
                            <div className='img-wrapper'>
                                <img src={BulbSvg} alt="Learn"></img>
                            </div>
                            <div className='side-name'>Learn</div>

                        </div>
                        <div className={`each-item ${sidebardiv === "forums" ? "active-side" : ""}`} onClick={() => { setsidebardiv("forums") }}>
                            <div className='img-wrapper'>
                                <img src={FormsSvg} alt="Forums"></img>
                            </div>
                            <div className='side-name'>Forums</div>

                        </div>
                        <div className={`each-item ${sidebardiv === "upskill" ? "active-side" : ""}`} onClick={() => { setsidebardiv("upskill") }}>
                            <div className='img-wrapper'>

                                <img src={upskillSvg} alt="Upskill"></img>
                            </div>
                            <div className='side-name'>Upskill</div>

                        </div>
                        <div className={`each-item ${sidebardiv === "contest" ? "active-side" : ""}`} onClick={() => { setsidebardiv("contest") }}>
                            <div className='img-wrapper'>
                                <img src={ContentSvg} alt="Contest"></img>
                            </div>
                            <div className='side-name'>Contest</div>
                        </div>
                        <div className={`each-item ${sidebardiv === "leader" ? "active-side" : ""}`} onClick={() => { setsidebardiv("leader") }}>
                            <div className='img-wrapper'>
                                <img src={StarSvg} alt="LeaderBoard"></img>
                            </div>
                            <div className='side-name'>Leaderboard</div>


                        </div>

                    </div>
                </div>

            </div>
            <div className='container-right'>
                <div className='inner-container'>
                    <div className='top-part'>
                        <div className='notify-container'>
                            <img src={NotifySvg} alt="notification" />
                        </div>
                        <div className='user'></div>
                    </div>
                    <div className='bottom-container'>
                        <div className='bottom-top-cont'>
                            <div className='bottom-left-wrapper'>
                                <div onClick={() => { setactivediv('mentor') }} className={`mentor-sessions ${activediv === 'mentor' ? "active" : ""}`}>
                                    <img className='info' alt="mentor" src={MentorSvg}></img>
                                    <div className='content'>Mentor Sessions</div>
                                </div>
                                <div onClick={() => { setactivediv('material') }} className={`learning-material ${activediv === 'material' ? "active" : ""}`}>
                                    <img className='info' alt="info" src={Jobsvg}></img>
                                    <div className='content'>Learning Material</div>
                                </div>
                            </div>
                            <div className='bottom-right'>
                                <img className='info' alt="info" src={InfoSvg}></img>
                                <div className='work-name'>How it works</div>
                            </div>
                        </div>
                        <hr />
                        <div className='learning-container'>
                            <div className='learning-chapters'>
                                {
                                    chapters.map((chapter, idx) => (
                                        <div key={`chapter ${nanoid()}`} className={`chapter-desc  ${activechapter === chapter.class ? "active-chapter removeborder" : ""}`}
                                            onClick={() => { setactivechapter(chapter.class) }}>
                                            <div className={chapter.class}>{chapter.name}</div>
                                            {activechapter === chapter.class && <div className='time'>
                                                <img className='clock' src={ClockSvg} alt="clock" />
                                                <div className='duration'>{chapter.time}</div>
                                            </div>}
                                        </div>
                                    ))
                                }
                            </div>
                            <div className='learning-content'>
                                {parts.map((part,idx) => (
                                    <Fragment key={`part-${idx}`}>
                                        <div className='each-partwrapper' 
                                         key={`each ${idx}`}>
                                        <div className='each-part'>
                                            <div className='each-part-container'>
                                                <div className='left-part'>
                                                    <div className='left-part-desc'>{part.name}</div>
                                                    <div className='main-heading'>Lorem ipsum dolor sit amet</div>
                                                </div>
                                                <div className='right-part'>
                                                    <div className='right-up-part'>
                                                        <div className='right-element1'>
                                                            <img className='ele1' src={VarClockSvg} alt="clock" />
                                                            <div className='timing'>2:00:00</div>
                                                        </div>
                                                        <div className='right-element1'>
                                                            <img className='ele1' src={VarContentSvg} alt="clock" />
                                                            <div className='timing'>Medium</div>
                                                        </div>
                                                        <div className='right-element1'>
                                                            <img className='ele1' src={CopySvg} alt="clock" />
                                                            <div className='timing'>{`${contents[idx].length}`}</div>
                                                        </div>
                                                        <img className={`arrow `} id={`arrow ${idx+1}`}   onClick={() => { arrowhandler(idx+1) }} alt="arrow" src={ArrowSvg}></img>
                                                    </div>
                                                    <div className='completion'>
                                                        {part.status + "% completed"}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='progress-bar-container'>
                                                <div style={{width:`${part.status}%`}} className='progress-bar'></div>
                                            </div>
                                        </div>
                                        <Context contents={idx===0?contents1:idx===1?contents2:contents3} num={idx+1} />
                                        </div>
                                    </Fragment>

                                ))}
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Landing
