function ReviewBox() {
  return (
    <div className="ReviewBox">
      <h2>Reviews</h2>
      <ReviewItems />
    </div>
  );
}

function ReviewItems() {
  // mempersiapkan 3 data dummy
  const data = [
    {
      name: "Budi",
      review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam"
    },
    {
      name: "Budi",
      review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam"
    },
    {
      name: "Budi",
      review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam"
    }
  ];
  // list data
  const listReview = data.map((item, index) => {
    return (
      <div className="Item" key={index}>
        <img
          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt=""
        />
        <div className="User">
          <h3>{item.name}</h3>
          <p>{item.review}</p>
        </div>
      </div>
    );
  });
  return <div className="ReviewItems">{listReview}</div>;
}

export default ReviewBox;
