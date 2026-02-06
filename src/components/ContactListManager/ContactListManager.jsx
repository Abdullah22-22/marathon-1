import React, { useState } from "react";
import "./ContactListManager.css";

function ContactListManager() {
  	const [contacts, setContacts] = useState([]);
  	const [name, setName] = useState("");
  	const [email, setEmail] = useState("");
  	const [jobTitle, setJobTitle] = useState("");
  	const [birthday, setBirthday] = useState("");
  	const [notes, setNotes] = useState("");
  	const [website, setWebsite] = useState("");
  	const [favorite, setFavorite] = useState(false);

  	// Handle input change for name
  	function handleNameChange(event) {
  	  	setName(event.target.value);
  	}

  	// Handle input change for email
  	function handleEmailChange(event) {
	  	  setEmail(event.target.value);
  	}
	function handleJobChange(event){
		setJobTitle(event.target.value);
	}
	
 	function handleNotesChange(event){
		setNotes(event.target.value);
	} 	      

	function handleWebsiteChange(event){
		setWebsite(event.target.value);
	}

	function handleFavorite(event){
		setFavorite(event.target.checked);
	}

	function handleBirthday(event){
		setBirthday(event.target.value);
	}

  	// Add a new contact to the list
  	function addContact() {
  	  	if (name.trim() !== "" && email.trim() !== "") {
  	    	setContacts((c) => [...c, { name, email, jobTitle, 
			birthday, notes, website, favorite}]);
  	    	setName("");
  	    	setEmail(""); // Clear the input fields
		setJobTitle("");
		setNotes("");
		setWebsite("");
		setBirthday("");
		setFavorite(false);
  	  	}
  	}

  // Delete a contact from the list
  	function deleteContact(index) {
  	  const updatedContacts = contacts.filter((_, i) => i !== index);
  	  setContacts(updatedContacts);
  	}

	const favorite_classes = "input-field favorite";

  	return (
  	  	<div className="app-container">
	  	    <h1>Contact List Manager</h1>
  	    
  			<div className="input-section">
  		      	<input
  		        type="text"
  		        placeholder="Name"
  		        value={name}
  		        onChange={handleNameChange}
  		        className="input-field"
  		      />
  		      <input
  		        type="email"
  		        placeholder="Email"
  		        value={email}
  		        onChange={handleEmailChange}
  		        className="input-field"
  		      />
  		      <input
  		        type="text"
  		        placeholder="Job Title"
  		        value={jobTitle}
  		        onChange={handleJobChange}
  		        className="input-field"
  		      />
			<label htmlFor="birthday">Birthday</label>
  		      <input
  		        type="date"
			id="birthday"
			name="birthday"
  		        value={birthday}
  		        onChange={handleBirthday}
  		        className="input-field"
  		      />
  		      <input
  		        type="text"
  		        placeholder="Additional Notes"
  		        value={notes}
  		        onChange={handleNotesChange}
  		        className="input-field"
  		      />
  		      <input
  		        type="text"
  		        placeholder="Website"
  		        value={website}
  		        onChange={handleWebsiteChange}
  		        className="input-field"
  		      />

  		      <label htmlFor="favorite" className="favorite">Favorite contact</label>
  		      <input
  		        type="checkbox"
  		        id="favorite"
  		        checked={favorite}
  		        onChange={handleFavorite}
  		        className={favorite_classes}
  		      />
  		      <button onClick={addContact} className="add-button">
  		        Add Contact
  		      </button>
  		    </div>
	
  		    <div className="contacts-section">
  		      <h2>Your Contacts ({contacts.length})</h2>
  		      {contacts.length === 0 ? (
  		        <p className="empty-message">No contacts yet. Add one to get started!</p>
  	      ) : (
  	        <ol className="contacts-list">

  	          {contacts.map((contact, index) => (
  	            <li key={index} className="contact-item">
  	              <div className="contact-info">
  	                <span className="contact-name">Name: {contact.name}</span>
  	                <span className="contact-email">Email: {contact.email}</span>
  	                <span className="contact-birthday">Birthday: {contact.birthday}</span>
  	                <span className="contact-job">Job Title: {contact.jobTitle}</span>
  	                <span className="contact-website">Website: {contact.website}</span>
  	                <span className="contact-notes">Additional notes:{contact.notes}</span>
  	                <span className="contact-favorite">Favorited:
			  {contact.favorite == true ? " Yes " : " No "}</span>
  	              </div>
  	              <button
  	                onClick={() => deleteContact(index)}
  	                className="delete-button"
  	              >
  	                Delete
  	              </button>
  	            </li>
  	          ))}
  	        </ol>
  	      )}
  	    </div>
  	  </div>
  	);
}

export default ContactListManager;
