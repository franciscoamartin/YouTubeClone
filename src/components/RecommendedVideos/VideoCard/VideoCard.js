import React from "react";
import "./VideoCard.css";
import Avatar from "@material-ui/core/Avatar";

function VideoCard({ image, title, views, timestamp, channel, channelImage }) {
  return (
    <div className="videoCard">
      <img className="videoCard_thumbnail" src={image} alt="" />
      <div className="videoCard_info">
        <Avatar className="video_avatar" alt={channel} src={channelImage} />
        <div className="videoCard_text">
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
            {views} • {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
