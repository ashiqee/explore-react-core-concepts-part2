export default function Friend({ friend }) {
  const { name, email, website } = friend;
  const { city, street, suite, zipcode } = friend.address;
  return (
    <div className="box">
      <h4>Name: {name}</h4>
      <p>Email: {email}</p>
      <p>Web: {website}</p>
      <p>
        Address:{city},{street},{suite},{zipcode}
      </p>
    </div>
  );
}
