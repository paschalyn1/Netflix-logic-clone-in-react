import "./styles.css";
import React from "react";
import MovieBox from "./MovieBox.js";
import Display from "./Display";
export default function App() {
  const [show, setShow] = React.useState(0);

  const file = [
    {
      img:
        "https://images.pexels.com/photos/2601021/pexels-photo-2601021.jpeg?auto=compress&cs=tinysrgb&w=400",
      text: "My film",
      id: 0,
      video:
        "https://player.vimeo.com/external/605691735.hd.mp4?s=c30ece0d66d2ef49313969ad0b2eb48a8fe6a83b&profile_id=174&oauth2_token_id=57447761"
    },
    {
      img:
        "https://images.pexels.com/photos/3756861/pexels-photo-3756861.jpeg?auto=compress&cs=tinysrgb&w=400",
      text: "My film two",
      id: 1,
      video:
        "https://player.vimeo.com/external/479899815.hd.mp4?s=b42ea72f4128f3d00d9e1b565ab66259959a0ec3&profile_id=174&oauth2_token_id=57447761"
    },
    {
      img:
        "https://images.pexels.com/photos/14685740/pexels-photo-14685740.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
      text: "My film three",
      id: 2,
      video:
        "https://player.vimeo.com/external/655305103.sd.mp4?s=f5fdd3d6b7914f6ea5da4168786a9557e2ad67e7&profile_id=164&oauth_token_id=57447761"
    },
    {
      img:
        "https://images.pexels.com/photos/16085458/pexels-photo-16085458.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
      text: "My film four",
      id: 3,
      video:
        "https://player.vimeo.com/external/446538855.sd.mp4?s=ecfc7446ea0391848007b2697ec82fae1e6e5759&profile_id=164&oauth2_token_id=57447761"
    },
    {
      img:
        "https://images.pexels.com/photos/12296890/pexels-photo-12296890.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
      text: "My film five",
      id: 4,
      video:
        "https://player.vimeo.com/progressive_redirect/playback/716706676/rendition/360p/file.mp4?loc=external&oauth2_token_id=57447761&signature=b9b1fc5b6e678e6bc37de5db67536760c1719fd6685df75c7f0ecb3f10f8b9cd"
    },
    {
      img:
        "https://images.pexels.com/photos/15957023/pexels-photo-15957023.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
      text: "My film six",
      id: 5,
      video:
        "https://player.vimeo.com/progressive_redirect/playback/694124248/rendition/360p?loc=external&oauth2_token_id=57447761&signature=1563b3933cb900218850d211ea9f8a88eb0ccd40c50ee18e5b512db65f91aee7"
    }
  ];

  const styles = {
    color: "white",
    fontFamily: "Helvetica",
    padding: "20px"
  };

  return (
    <>
      <h1 style={styles}>PAXIWOOD</h1>
      {/* text={file[show].text} */}
      <Display video={file[show].video} />
      {/* {console.log(file[show].text)} */}
      <h3 style={styles}>Latest Release</h3>
      <div className="App">
        {file.map((f) => (
          <MovieBox
            onclick={() => setShow((prev) => f.id)}
            img={f.img}
            text={f.text}
          />
        ))}
      </div>
    </>
  );
}
