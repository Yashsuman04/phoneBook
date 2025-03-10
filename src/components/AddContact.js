// import React, { useState } from "react";

// const UserForm = () => {
//   const [users, setUsers] = useState([]);
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [city, setCity] = useState("");
//   const [profilePic, setProfilePic] = useState(null);
//   const [idCounter, setIdCounter] = useState(1);

//   const handleImageUpload = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setProfilePic(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (name && email && city) {
//       const newUser = {
//         id: idCounter,
//         name,
//         email,
//         city,
//         profilePic,
//       };
//       setUsers([...users, newUser]);
//       setIdCounter(idCounter + 1);

//       // Clear form fields
//       setName("");
//       setEmail("");
//       setCity("");
//       setProfilePic(null);
//     } else {
//       alert("Please fill in all fields.");
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <h2 className="text-center mb-4">User Registration Form</h2>
//       <div className="card p-4 shadow-lg">
//         <form onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <label className="form-label">Name</label>
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Enter name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//             />
//           </div>

//           <div className="mb-3">
//             <label className="form-label">Email</label>
//             <input
//               type="email"
//               className="form-control"
//               placeholder="Enter email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>

//           <div className="mb-3">
//             <label className="form-label">City</label>
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Enter city"
//               value={city}
//               onChange={(e) => setCity(e.target.value)}
//               required
//             />
//           </div>

//           <div className="mb-3">
//             <label className="form-label">Profile Picture</label>
//             <input
//               type="file"
//               className="form-control"
//               accept="image/*"
//               onChange={handleImageUpload}
//             />
//             {profilePic && (
//               <img
//                 src={profilePic}
//                 alt="Profile Preview"
//                 className="mt-3 rounded"
//                 style={{ width: "100px", height: "100px" }}
//               />
//             )}
//           </div>

//           <button type="submit" className="btn btn-primary w-100">
//             Submit
//           </button>
//         </form>
//       </div>

//       {/* User Table */}
//       <h3 className="mt-5">Users List</h3>
//       <div className="table-responsive">
//         <table className="table table-bordered table-hover mt-3">
//           <thead className="table-dark">
//             <tr>
//               <th>ID</th>
//               <th>Name</th>
//               <th>Email</th>
//               <th>City</th>
//               <th>Profile Pic</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map((user) => (
//               <tr key={user.id}>
//                 <td>{user.id}</td>
//                 <td>{user.name}</td>
//                 <td>{user.email}</td>
//                 <td>{user.city}</td>
//                 <td>
//                   {user.profilePic ? (
//                     <img
//                       src={user.profilePic}
//                       alt="Profile"
//                       className="rounded"
//                       style={{ width: "50px", height: "50px" }}
//                     />
//                   ) : (
//                     "No Image"
//                   )}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default UserForm;

import React, { useState } from "react";

const AddContact = ({ addNewContact }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [avatar, setAvatar] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name && email && city) {
      const newUser = {
        name,
        email,
        city,
        avatar,
      };

      addNewContact(newUser); 

      setName("");
      setEmail("");
      setCity("");
      setAvatar(null);
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="card p-4 ">
      <form onSubmit={handleSubmit}>
        <label className="form-label">Name</label>
        <input
          autoFocus
          type="text"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">City</label>
          <input
            type="text"
            className="form-control"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Profile Picture</label>
          <input
            type="file"
            className="form-control"
            accept="image/*"
            onChange={handleImageUpload}
          />
          {avatar && (
            <img
              src={avatar}
              alt="Preview"
              className="mt-3 rounded"
              style={{ width: "50px", height: "50px" }}
            />
          )}
        </div>

        <button type="submit" className="btn btn-dark">
          Add Contact
        </button>
      </form>
    </div>
  );
};

export default AddContact;
