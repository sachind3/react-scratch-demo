import { useParams } from "react-router-dom";

function User() {
  let { name } = useParams();
  console.log(name);
  return <div>hello user {name}</div>;
}

export default User;
