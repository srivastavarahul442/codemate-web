import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import UserCard from "./UserCard";
const Feed = () => {
  const dispatch = useDispatch();
  const feed = useSelector((store) => store.feed);

  const getFeed = async () => {
    try {
      const res = await axios.get(BASE_URL + "/feed", {
        withCredentials: true,
      });
      dispatch(addFeed(res?.data?.data));
      // console.log(res);
    } catch (err) {
      console.err(err);
    }
  };

  useEffect(() => {
    getFeed();
  }, []);

  if(!feed) return 
  if(feed.length === 0) return (
    <div className="flex justify-center my-5">
      <h1 className="text-2xl font-bold">No more users in feed</h1>
    </div>
  )

  return (
    <div className="flex justify-center my-5">
      {feed && <UserCard user={feed[0]} />}
    </div>
  );
};

export default Feed;
