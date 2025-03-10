// import Header from "./components/Header";
// import Footer from "./components/Footer";
// // import ClickCounter from "./components/ClickCounter"
// import ContactList from "./components/ContactList";
// // import { useState } from "react";
// import AddContact from "./components/AddContact"


// function App() {
//   // const [showClickCounter, SetShowClickCounter] = useState(true)
//   return (
//     <div>
//       <Header></Header>
//       <div
//         className="container"
//         style={{
//           minHeight: "500px",
//         }}
//       >
//         {/* <div> */}
//         {/* <label>
//               <input 
//               type="checkbox"
//               onClick={() => SetShowClickCounter(!showClickCounter)}
//               checked={showClickCounter} /> Show "Click Counter" Component
//             </label>
//           </div>
//          {showClickCounter && <ClickCounter/>} */}
//         <div className="row">
//           <div className="col-6">
//             <ContactList />
//           </div>
//           <div className="col-6">
//             <h3>Add Contact</h3>
//             <AddContact />
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }


// export default App;


import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ContactList from "./components/ContactList";
import AddContact from "./components/AddContact";

function App() {
  const [contacts, setContacts] = useState([]);
  const [idCounter, setIdCounter] = useState(1); 

  const addNewContact = (newContact) => {
    newContact.id = idCounter; 
    setContacts([...contacts, newContact]); 
    setIdCounter(idCounter + 1); 
  };

  return (
    <div>
      <Header />

      <div className="container" style={{ minHeight: "500px" }}>
        <div className="row">
          <div className="col-md-6">
            <ContactList contacts={contacts} setContacts={setContacts} />
          </div>

          <div className="col-md-6">
            <h3>Add Contact</h3>
            <AddContact addNewContact={addNewContact} />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
