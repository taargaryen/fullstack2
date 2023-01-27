import React , {useState} from 'react' 
import "./style.css" 
 
function ContactList() { 
    const [contacts, setContacts] = useState([ 
        
      ]); 
     
      const [newName, setNewName] = useState(''); 
      const [newPhone, setNewPhone] = useState(''); 
      const [newCity, setNewCity] = useState(''); 
      const [sortBy, setSortBy] = useState(''); 
      const [searchTerm, setSearchTerm] = useState(''); 
     
      const handleSubmit = (e) => { 
        e.preventDefault(); 
        setContacts([...contacts, { name: newName, phone: newPhone, ville: newCity}]); 
        setNewName(''); 
        setNewPhone(''); 
        setNewCity(''); 
      } 
     
      const handleDelete = (index) => { 
        setContacts(contacts.filter((contact, i) => i !== index)); 
      } 
     
      const handleSort = (sortType) => { 
        setSortBy(sortType); 
      } 
     
      const handleSearch = (e) => { 
        setSearchTerm(e.target.value); 
      } 
     
      const filteredContacts = contacts.filter(contact => 
        contact.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        contact.phone.includes(searchTerm) || 
        contact.ville.toLowerCase().includes(searchTerm.toLowerCase()) 
      ); 
     
      const sortedContacts = filteredContacts.sort((a, b) => { 
        if (sortBy === 'name') { 
          return a.name.localeCompare(b.name); 
        }  
      }); 
     
      return ( 
        <div className='context'> 
          <h1 className='title'>Contacts</h1> 
          <form onSubmit={handleSubmit}> 
            <label> 
              Name: 
              <input type="text" className='input_C' value={newName} onChange={e => setNewName(e.target.value)} /> 
            </label> 
            <label> 
              Phone: 
              <input type="text" className='input_C' value={newPhone} onChange={e => setNewPhone(e.target.value)} /> 
            </label> 
            <label> 
              City: 
              <input type="text" className='input_C' value={newCity} onChange={e => setNewCity(e.target.value)} /> 
            </label> 
            <button className='button-29' type="submit" id='add'>Add</button> 
          </form> 
            <label> 
              Search:   
            <input type="text" className='input_C' value={searchTerm} onChange={handleSearch} /> 
            </label> 
          <div className='sort-buttons'> 
            <button className='button-31' onClick={() => handleSort('name')}>Sorted by name</button> 
          </div> 
          <h1 className='title'>Contact list</h1> 
          <ul> 
        {sortedContacts.map((contact, index) => ( 
          <li key={index}> 
            <b>{contact.name}</b> - {contact.phone} - {contact.ville} 
            <button className='button-30' onClick={() => handleDelete(index)}>Delete</button> 
          </li> 
        ))} 
      </ul> 
    </div> 
  ); 
}; 
 
export default ContactList;