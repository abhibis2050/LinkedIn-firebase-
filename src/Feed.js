import React, { useState, useEffect } from "react";
import "./Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import InputOptions from "./InputOptions";
import Post from "./Post";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";

function Feed() {
  const [post, setPost] = useState([]);

  //Firebase Collection Reference
  const postCollectionRef = collection(db, "posts");

  useEffect(() => {
    // db.collection("posts").onSnapshot(snapshot=>(
    //   setPost(snapshot.docs.map(doc=>(
    //     {
    //       id:doc.id,
    //       data:doc.data()
    //     }
    //   )))
    // ))

    const getDocuments = async () => {
      const data = await getDocs(postCollectionRef);
      setPost(data.docs.map((doc) => ({ id: doc.id,data: doc.data() })));
    };

    getDocuments();
  }, []);

  const sendPost = (event) => {
    event.preventDefault();
    // db.collection("posts").add({
    //   name:"abhi",
    //   description:"this is a test",
    //   message:""
    // })
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input type="text" />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>

        <div className="feed__inputOptions">
          {/* input Option Component */}
          <InputOptions Icon={ImageIcon} title="Photo" color="#70B5F9" />
          <InputOptions
            Icon={SubscriptionsIcon}
            title="Video"
            color="#E7A33E"
          />
          <InputOptions Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
          <InputOptions
            Icon={CalendarViewDayIcon}
            title="Write Article"
            color="#7FC15E"
          />
        </div>
      </div>

      {/*Posts*/}
      {post.map((post) => {})}
      <Post
        name="Abhisek Biswas"
        description="test"
        message="Wow This Worked"
      />
    </div>
  );
}

export default Feed;
