import { useEffect, useState } from "react";
import classes from "./MeetupDetail.module.css";

function MeetupDetail(props) {
  const [meetupData, setMeetupData] = useState(props.meetupData);

  return (
    <section className={classes.detail}>
      <img src={meetupData?.image} alt={meetupData?.title} />{" "}
      <h1> {meetupData?.title}</h1>
      <address> {meetupData?.address}</address>{" "}
      <p> {meetupData?.description}</p>
    </section>
  );
}

export default MeetupDetail;
