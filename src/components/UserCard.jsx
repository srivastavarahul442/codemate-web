const UserCard = ({ user }) => {
    const {firstName, lastName, age, gender, photoUrl, about } = user;
  return (
    <div>
      <div className="card bg-base-300 w-96 shadow-sm">
        <figure>
          <img
            src={photoUrl}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{firstName+" "+lastName}</h2>
          <p>{age+", "+gender}</p>
          <p>{about}</p>
          <div className="card-actions justify-center">
            <button className="btn btn-primary w-[40%]">Ignore</button>
            <button className="btn btn-secondary w-[40%]">Interested</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
