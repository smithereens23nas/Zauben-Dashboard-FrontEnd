import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Editpost(props) {
  const navigate = useNavigate();
  const params = useParams();
  const id = params.id;
  const [post, setPost] = useState(null);
  const [editForm, setEditForm] = useState(null);

  const getPost = async () => {
    const response = await fetch(`${props.URL}locations/${id}`, {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
    });
    const data = await response.json();
    setEditForm(data);
    setPost(data);
  };

  const handleChange = (event) => {
    setEditForm({ ...editForm, [event.target.name]: event.target.value });
  };

  const editPost = async (post) => {
    await fetch(`${props.URL}locations/${id}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    });
    getPost();
  };

  useEffect(() => getPost(), []);

  const handleSubmit = (event) => {
    event.preventDefault();
    editPost(editForm);
    setEditForm({
      StreetAddress: "",
      City: "",
      State: "",
      ZipCode: "",
    });
    navigate("/locations");
  };

  const deletePost = async (post) => {
    await fetch(`${props.URL}locations/edit/${id}`, {
      method: "delete",
    });
    navigate("/locations");
  };

  const loaded = () => {
    return (
      <div className="post">
        <h1>{post.StreetAddress}</h1>
        <h2>{post.City}</h2>
        <h3>{post.State}</h3>
        <h3>{post.ZipCode}</h3>
        <button id="delete" onClick={deletePost}>
          DELETE
        </button>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={editForm.StreetAddress}
            name="StreetAddress"
            placeholder="Street Address"
            onChange={handleChange}
          />
          <input
            type="text"
            value={editForm.City}
            name="City"
            placeholder="City"
            onChange={handleChange}
          />
          <input
            type="text"
            value={editForm.State}
            name="State"
            placeholder="State"
            onChange={handleChange}
          />
          <input
            type="text"
            value={editForm.ZipCode}
            name="ZipCode"
            placeholder="ZipCode"
            onChange={handleChange}
          />
          <input type="submit" value="Edit Post" />
        </form>
      </div>
    );
  };
  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return post ? loaded() : loading();
}

export default Editpost;
