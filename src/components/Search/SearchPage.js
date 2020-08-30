import React from "react";
import ChannelRow from "./../Channel/ChannelRow";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import VideoRow from "./../VideoRow/VideoRow";
import "./SearchPage.css";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage_filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        image="https://i.ytimg.com/vi/r5iFrxi9-hY/maxresdefault.jpg"
        channel="Tech Lead"
        verified
        subs="600K"
        noOfVideos={380}
        description="You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your codding skills to the ..."
      />
      <hr />
      <VideoRow
        views="1.4M"
        subs="600K"
        description="You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your codding skills to the ..."
        timestamp="59 seconds ago"
        channel="Tech Lead"
        title="Let's Build a Youtube Clone with React JS"
        image="https://i.ytimg.com/vi/r5iFrxi9-hY/maxresdefault.jpg"
      />
      <VideoRow
        views="1.4M"
        subs="600K"
        description="You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your codding skills to the ..."
        timestamp="59 seconds ago"
        channel="Tech Lead"
        title="Let's Build a Youtube Clone with React JS"
        image="https://i.ytimg.com/vi/r5iFrxi9-hY/maxresdefault.jpg"
      />
      <VideoRow
        views="1.4M"
        subs="600K"
        description="You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your codding skills to the ..."
        timestamp="59 seconds ago"
        channel="Tech Lead"
        title="Let's Build a Youtube Clone with React JS"
        image="https://i.ytimg.com/vi/r5iFrxi9-hY/maxresdefault.jpg"
      />
      <VideoRow
        views="1.4M"
        subs="600K"
        description="You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your codding skills to the ..."
        timestamp="59 seconds ago"
        channel="Tech Lead"
        title="Let's Build a Youtube Clone with React JS"
        image="https://i.ytimg.com/vi/r5iFrxi9-hY/maxresdefault.jpg"
      />
    </div>
  );
}

export default SearchPage;
