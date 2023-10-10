import React, { useState } from "react"
import BasicDateCalendar from "../../components/Calender/Calendar";
import Header from "../../components/Header/Header";
import CardEventAndNews from "../../components/Card/CardEventAndNews";
import news from "../../assets/images/news.jpg";
import './Blog.css'
const Blog = () => {
    const [events, setEvent] = useState([
    { id:1 ,image: news, title: 'Color', date: 'Last updated 3 mins ago', body: 'it is a color party in school , price of ticket 200 pounds' },
    { id:2, image: news, title: 'Color', date: 'Last updated 3 mins ago', body: 'it is a color party in school , price of ticket 200 pounds' },
    { id:3, image: news, title: 'Color', date: 'Last updated 3 mins ago', body: 'it is a color party in school , price of ticket 200 pounds' },
    ])
    return (
    <div className="container mb-3">
      <div className="row">
        <div className="col-sm-12 col-md-9">
        <div className="row event">
           <Header headerTitle="Event of this month" btnName="Event" target="#Add-event-model"/>
           {events.map((event) => (
                 <CardEventAndNews 
                    img={event.image} 
                    title={event.title} 
                    date={event.date} 
                    body={event.body} 
                    key={event.id}
                 />
           ))}

        </div>
        <div className="row news">
           <Header headerTitle="News of this month" btnName="News"  target="#Add-new-model"/>
           {events.map((event) => (
                 <CardEventAndNews 
                    img={event.image} 
                    title={event.title} 
                    date={event.date} 
                    body={event.body} 
                    key={event.id}
                 />
           ))}
        </div>
        </div>
        <div className="col-sm-12 col-md-3">
          <BasicDateCalendar />
          <div className="card event mt-4 shadow">
            <h2 className="event-title">Events</h2>
            <div className="card-body">
              <h5 className="card-title event">Final Exams</h5>
              <h6 className="card-subtitle event mb-2 text-muted">
                Upcoming on 15th June
              </h6>
            </div>
            <div className="card-body">
              <h5 className="card-title event">School Trib</h5>
              <h6 className="card-subtitle event mb-2 text-muted">
                Class 6A on 30th June
              </h6>
            </div>
            <div className="card-body">
              <h5 className="card-title event">Tedx Speak</h5>
              <h6 className="card-subtitle event mb-2 text-muted">
                Upcoming on 15th June
              </h6>
            </div>
            <div className="card-body">
              <h5 className="card-title event">Summer Training</h5>
              <h6 className="card-subtitle event mb-2 text-muted">
                Upcoming on 15th June
              </h6>
            </div>
            <div className="card-body">
              <h5 className="card-title event">Tedx Speak</h5>
              <h6 className="card-subtitle event mb-2 text-muted">
                Upcoming on 15th June
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Blog
