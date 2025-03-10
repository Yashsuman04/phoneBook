// import React, { useState } from "react";

// const initialContacts = [
//   {
//     id: 1,
//     name: "Yash",
//     email: "yashsuman@4.com",
//     city: "Banglore",
//     avatar: null,
//   },
//   { id: 2, name: "John", email: "John@xmpl.com", city: "Dallas", avatar: null },
//   {
//     id: 3,
//     name: "Jane",
//     email: "jane@xmpl.com",
//     city: "New York",
//     avatar: null,
//   },
//   { id: 4, name: "Shyam", email: "shyam.com", city: "Jaipur", avatar: null },
// ];

// const ContactList = () => {
//   const [contacts, setContacts] = useState(initialContacts);

//   const deleteContact = (id) => {
//     if (!window.confirm("Are you sure?")) return;

//     const remainingContacts = contacts.filter((c) => c.id !== id);
//     setContacts(remainingContacts);
//   };

//   const contactsJsx = contacts.map((c) => (
//     <tr className="contactRow" key={c.id}>
//       <td>{c.id}</td>
//       <td>
//         <img
//           style={{ height: "50px", width: "50px", borderRadius: "50%" }}
//           src={c.avatar ? c.avatar : "/default-profile.png"}
//           alt={c.name}
//           title={c.name}
//           className="img-thumbnail"
//         />
//         {"   "}
//         {c.name}
//       </td>
//       <td>{c.email}</td>
//       <td>{c.city}</td>
//       <td>
//         <button
//           onClick={() => deleteContact(c.id)}
//           className="btnDeleteContact btn btn-link text-danger bi bi-person-x-fill"
//         ></button>
//       </td>
//     </tr>
//   ));

//   return (
//     <div>
//       <table className="table">
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Email</th>
//             <th>City</th>
//           </tr>
//         </thead>
//         <tbody>{contactsJsx}</tbody>
//       </table>
//     </div>
//   );
// };

// export default ContactList;


import React from "react";

const ContactList = ({ contacts, setContacts }) => {
  const deleteContact = (id) => {
    if (!window.confirm("Are you sure you want to delete this contact?"))
      return;
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  return (
        <table className="table">
          <thead className="table">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>City</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {contacts.length > 0 ? (
              contacts.map((contact) => (
                <tr className="contactRow" key={contact.id}>
                  <td>{contact.id}</td>
                  <td>
                    <img
                      src={
                        contact.avatar ? contact.avatar : "/default-profile.png"
                      }
                      alt={contact.name}
                      className="img-thumbnail"
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                      }}
                    />
                    {contact.name}
                  </td>
                  <td>{contact.email}</td>
                  <td>{contact.city}</td>
                  <td>
                    <button
                      onClick={() => deleteContact(contact.id)}
                      className="btnDeleteContact btn btn-link text-danger bi bi-person-x-fill"
                    ></button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
  );
};

export default ContactList;
