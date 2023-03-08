import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import "./worktimeline.scss";
import SchoolIcon from '@mui/icons-material/School';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';

const WorkTimeLine = () => {
  return (
    <div className="about__me__second__fold">
    <h2>Work / Education</h2>
      <VerticalTimeline lineColor='#ff5757' visible="true">
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: '#f9f9eb', color: '#000' }}
        contentArrowStyle={{ borderRight: '7px solid  #f9f9eb' }}
        date="Sep'22 - Present"
        iconStyle={{ background: '#ff5757', color: '#fff' }}
        icon={<WorkOutlineIcon />}>
        <h5 className="vertical-timeline-element-title">London, UK </h5>
        <h3 className="vertical-timeline-element-subtitle"> Buyer </h3>
        <p>Smythson of Bond Street</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Sep'21 - Sep'22"
        iconStyle={{ background: '#ff5757', color: '#fff' }}
        icon={<SchoolIcon />}>

        <h5 className="vertical-timeline-element-title">Nottingham, UK</h5>
        <h3 className="vertical-timeline-element-subtitle">Nottingham Trent University</h3>
        <p>Masters In Fashion Communication & Promotion</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="May’18-July’21"
        iconStyle={{ background: '#ff5757', color: '#fff' }}
        icon={<SchoolIcon />}>
        <h5 className="vertical-timeline-element-title">London, UK</h5>
        <h3 className="vertical-timeline-element-subtitle">University of Arts</h3>
        <p>Short Term Course in Fashion Trend Forecasting</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="May’18-July’21"
        iconStyle={{ background: '#ff5757', color: '#fff' }}
        icon={<WorkOutlineIcon />}>
        <h5 className="vertical-timeline-element-title">Bangalore, India</h5>
        <h3 className="vertical-timeline-element-subtitle">Assistant Buyer</h3>
        <p>Calvin Klein Jeans & Tommy Hilfiger</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Oct’16-May’18"
        iconStyle={{ background: '#ff5757', color: '#fff' }}
        icon={<WorkOutlineIcon />}>
        <h5 className="vertical-timeline-element-title">Mumbai, India</h5>
        <h3 className="vertical-timeline-element-subtitle">Buying Admin Assistant</h3>
        <p>Diesel S.P.A</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Oct’16-May’18"
        iconStyle={{ background: '#ff5757', color: '#fff' }}
        icon={<SchoolIcon />}>
        <h5 className="vertical-timeline-element-title">Paris, France</h5>
        <h3 className="vertical-timeline-element-subtitle">Mod’Art International</h3>
        <p>Luxury brand Management (Semester Exchange Programme)</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="July’14-May’16"
        iconStyle={{ background: '#ff5757', color: '#fff' }}
        icon={<SchoolIcon />}>
        <h5 className="vertical-timeline-element-title">Gandhinagar, India</h5>
        <h3 className="vertical-timeline-element-subtitle">National Institute of Fashion Technology</h3>
        <p>Masters in Fashion Management</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="July’13 - July'09"
        iconStyle={{ background: '#ff5757', color: '#fff' }}
        icon={<SchoolIcon />}>
        <h5 className="vertical-timeline-element-title">Nagpur, India</h5>
        <h3 className="vertical-timeline-element-subtitle">Nagpur University</h3>
        <p>Bachelor of Engineering in Industrial Engineering</p>
      </VerticalTimelineElement>


</VerticalTimeline>
    </div>
  )
}

export default WorkTimeLine