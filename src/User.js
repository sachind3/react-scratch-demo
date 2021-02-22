import { useParams } from "react-router-dom";

function User() {
  let { name } = useParams();

  return <>hello {name}</>;
}

export default User;
