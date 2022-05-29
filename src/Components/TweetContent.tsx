import React, { useContext } from "react";
import { followingContext } from "../Components/FollowingProvider";
import CreateTweet from "./CreateTweet";
import Navbar from "./NavBar/Nav";
import Tweet from "./Tweet/Tweet";
import styles from "../styles/Tweeting_style/TweetController.module.css";
import Trending_Follow from "./Trending_Follow";
import { CirclesWithBar } from "react-loader-spinner";

// interface iTweet {
//   commentCount: number;
// }
function TweetContent() {
  const { followerTweet, followerCondition, isLoading,isScrolling } = useContext(followingContext);

  return (
    <>
      <Navbar />
      <div className={styles["tweet-wrapper"]}>
        <>
          <div>
            <CreateTweet />

            {isLoading ?  <CirclesWithBar
                    color="#2F80ED"
                    height={70}
                    width={70}
                    wrapperStyle={{ justifyContent: "center",marginTop:"30px" }}
                  />:""}

            <div className={styles["tweet-body"]}>
              {followerCondition.map((val: any, index: number) => {
                return (
                  <Tweet
                    key={index}
                    isLiked={val.isLiked}
                    isRetweeted={val.isRetweeted}
                    isBookmarked={val.isBookmarked}
                    tweetImage={followerTweet[index].tweetImage}
                    commentCount={followerTweet[index].commentCount}
                    retweetCount={followerTweet[index].retweetCount}
                    messageBody={followerTweet[index].messageBody}
                    userId={followerTweet[index].userId}
                    createdAt={followerTweet[index].createdAt}
                    noOfLikes={followerTweet[index].noOfLikes}
                    _id={followerTweet[index]._id}
                    bookmarkCount={followerTweet[index].bookmarkCount}
                  />
                );
              })}
                  {isScrolling ?  <CirclesWithBar
                    color="#2F80ED"
                    height={50}
                    width={50}
                    wrapperStyle={{ justifyContent: "center",marginTop:"30px" }}
                  />:""}
            </div>
          </div>

          <Trending_Follow />
        </>

        {/*  Fix your component here => 
          Tweet, retweet body */}
      </div>
    </>
  );
}

export default TweetContent;
