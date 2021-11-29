import ProfileImage from "./ProfileImage";
import Timestamps from "./Timestamp";
import Message from "./Message";
import User from "./User";
import Actions from "./Actions";

function Tweet(props) {
  return (
    <div className="tweet">

      <ProfileImage image={props.tweet.user.image} />

      <div className="body">
        <div className="top">
          <User name={props.tweet.user.name} handle={props.tweet.user.handle} />
          <Timestamps time={props.tweet.timestamp} />
        </div>



        <Message message={props.tweet.message} />

        <Actions actions={props.tweet.actions} />

      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
