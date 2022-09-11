import React, { useState } from "react";
import classes from "./Chats.module.css";
import person1 from "../../assets/person2influx.png";
import person2 from "../../assets/person3influx.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
function Chats() {
  const [enteredText, setEnteredText] = useState("");
  // list of chat messages
  const [chats, setChats] = useState([
    {
      text: "Smiling is definitely one of the best beauty remedies. If you have a good sense of humor and a good approach to life, that’s beautiful",
      personName: "John Wick",
      personType: "Receiver",
      time: "11:00 AM",
      day: "Yesterday",
      pic: person2,
      onLineStatus: "online",
      id: 4,
    },
    {
      text: "Life is short. Smile while you still have teeth, Share your smile with the world ",
      personName: "Viggo",
      personType: "Sender",
      time: "11:00 AM",
      day: "Yesterday",
      pic: person1,
      onLineStatus: "online",
      id: 1,
    },
    {
      text: "There is fear when frowning. There is love when smiling,Share your smile with the world ",
      personName: "John Wick",
      personType: "Receiver",
      time: "11:00 AM",
      day: "Yesterday",
      pic: person2,
      onLineStatus: "online",
      id: 2,
    },
    {
      text: "Share your smile with the world. It’s a symbol of friendship and peace",
      personName: "Viggo",
      personType: "Sender",
      time: "11:00 AM",
      day: "Yesterday",
      pic: person1,
      onLineStatus: "online",
      id: 3,
    },
  ]);
  const handleChange = (e) => {
    setEnteredText(e.target.value);
  };
  const addChat = (e) => {
    e.preventDefault();

    // to get the current time when the message is sent
    const todayDate = new Date();
    let amORpm = "AM";
    let hr = todayDate.getHours();
    if (hr >= 12) {
      hr = hr - 12;
      amORpm = "PM";
    }
    const min = todayDate.getMinutes();
    // adding the new message sent by john wick to the array
    let newChatadded = {
      text: enteredText,
      personName: "Viggo",
      personType: "Receiver",
      time: `${hr}:${min} ${amORpm}`,
      day: "Today",
      pic: person2,
      onLineStatus: "online",
      id: Math.random(),
    };
    let chatsNew = [...chats];
    chatsNew.unshift(newChatadded);
    setChats(chatsNew);
    setEnteredText("");
  };
  return (
    <div>
      <header className={classes.header}>
        <div className={classes.chatLogo}></div>
        <div>Chat Box</div>
      </header>
      <main className={classes.main}>
        {chats.map((chat) => (
          <div
            className={
              chat.personType === "Sender"
                ? classes.messageSender
                : classes.messageReceiver
            }
            key={chat.id}
          >
            <div className={classes.personDetails}>
              <img src={chat.pic} alt="image"></img>
              {chat.onLineStatus === "online" ? (
                <p className={classes.status}></p>
              ) : null}
            </div>
            <div className={classes.messageDetails}>
              <p className={classes.messageText}>{chat.text}</p>
              <div className={classes.messageTiming} style={{ color: "grey" }}>
                <FontAwesomeIcon
                  style={{ color: "grey" }}
                  icon={faCalendarDays}
                />
                {chat.time} | {chat.day}
              </div>
            </div>
          </div>
        ))}
      </main>
      <div className={classes.footer}>
        <input
          onChange={handleChange}
          type="text"
          value={enteredText}
          placeholder="Write here and hit enter to send"
        ></input>
        <button onClick={addChat}>Send</button>
      </div>
    </div>
  );
}

export default Chats;
