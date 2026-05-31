import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addRequests, removeRequest } from "../utils/requestSlice";
import { useState } from "react";

const Requests = () => {
  const dispatch = useDispatch();
  const requests = useSelector((store) => store.requests);

  const reviewRequest = async (_id, status) => {
    const res = await axios.post(
      BASE_URL + `/request/review/${status}/${_id}`,
      {},
      { withCredentials: true },
    );
    dispatch(removeRequest(_id));
  };

  const fetchRequests = async () => {
    const res = await axios.get(BASE_URL + "/user/requests/received", {
      withCredentials: true,
    });
    dispatch(addRequests(res?.data?.data));
  };

  useState(() => {
    fetchRequests();
  }, []);

  if (!requests)
    return (
      <h1 className="flex justify-center my-10 font-bold">No Request Found</h1>
    );

  if (requests.length === 0)
    return (
      <h1 className="flex justify-center my-10 font-bold">No Request Found</h1>
    );

  return (
    <div className="text-center my-5">
      <h1 className="text-bold text-white text-xl">Connection Requests</h1>
      {requests.map((request) => {
        const { firstName, lastName, about, photoUrl } = request.fromUserId;
        return (
          <div
            key={request._id}
            className="flex  rounded-xl p-2 my-4 mx-auto w-1/2 items-center bg-base-300 "
          >
            <div className="w-1/6">
              <img className="w-[100px] rounded-[35%]" src={photoUrl} />
            </div>
            <div className="w-3/6">
              <h1 className="font-bold text-lg">
                {firstName + " " + lastName}
              </h1>
              <p>{about}</p>
            </div>
            <div className="w-2/6 flex justify-evenly">
              <button
                className="btn btn-primary  text-lg"
                onClick={() => reviewRequest(request._id, "rejected")}
              >
                Reject
              </button>
              <button
                className="btn btn-secondary text-lg"
                onClick={() => reviewRequest(request._id, "accepted")}
              >
                Accept
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Requests;
