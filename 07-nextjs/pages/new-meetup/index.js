import NewMeetupForm from "@/components/meetups/NewMeetupForm";
import React from "react";

export default function index() {
  const addMeetupHandler = (data) => {
    console.log(data);
  };
  return <NewMeetupForm onAddMeetup={addMeetupHandler}></NewMeetupForm>;
}
