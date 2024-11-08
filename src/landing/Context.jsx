import React from 'react'
import "./landing.css"
import Jobsvg from "../assets/svgs/job.svg"
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
        display:BClockSvg,
        duration:"10:00"
    },
    {
        logo:CopySvg,
        name:"Combined Resource 1",
        display:BClockSvg,
        duration:"10:00"
    }
]
const Context = ({num,contents}) => {
  return (
    <div className='desc-contents' id={`desc-contents ${num}`} style={{ display: "none"}} >
                                {
                                    contents.map((content,idx)=>(
                                        <div className='content-details' style={{borderBottom:idx+1===contents.length?"none":"1px solid"}} id={`content ${idx}`} key={idx}>
                                            
                                            <div className='contents-left'>
                                                <div className='image-wrapper'>
                                            <img className='left' src={content.logo} alt="logo" />
                                            {
                                                (content.name==="Video 1"||content.name==="Video 2"||content.name==="Video 3")?<img className='play' src={Play} alt="play"/>:""
                                            }
                                            </div>
                                            <div className='content-name'>{content.name}</div>
                                            </div>
                                            <div className='contents-right'>
                                            <img src={content.display} alt="logo" />
                                            <div className='content-clock-name'>{content.duration}</div>
                                            </div>
                                        </div>
                                    ))
                                }
                             </div>
  )
}

export default Context
