import React, {useState, useEffect} from 'react'
import { Button, Fab, FormControl, Input, InputLabel } from '@material-ui/core'
import Message from "./Message";
import db from './firebase';
import firebase from 'firebase'
import Flipmove from "react-flip-move";
import { useParams } from 'react-router-dom';
import SendIcon from '@material-ui/icons/Send';

export default function Chat({ match },props ) {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, Setusername] = useState("");

  let { id } = useParams();


  useEffect(() => {
    // run code
    // if its blank inside [], this code runs once when the app component loads
    Setusername(prompt("Please Enter Username"));
  }, []); // condition

  useEffect(() => {
    db.collection(id)
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
      
  }, [id]);

  const sendMessage = (event) => {
    // logic for sending

    db.collection(id).add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    // setMessages([...messages, { username: username, message: input }]);
    setInput("");
    event.preventDefault();
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", paddingTop:'50px' }}>Hello {username}</h1>
      <p style={{textAlign:"center"}}>{id} Chat Room</p>
      <form onSubmit={sendMessage} style={{ display: "flex", padding:'10px' }}>
        {" "}
        <FormControl style={{ flex: "6" }}>
          <InputLabel>Enter Message</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </FormControl>
        <Fab
          color="primary"
          aria-label="add"
          disabled={!input}
          variant="contained"
          type="submit"
          style={{ flex: "0" }}
        >
          <SendIcon />
        </Fab>
      </form>
      <Flipmove>
        {messages.map(({ message, id }) => (
          <Message key={id} username={username} message={message} />
        ))}
      </Flipmove>
    </div>
  );
}
