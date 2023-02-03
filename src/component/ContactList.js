import React , {useState} from 'react' 


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
              <input type="text" className='input_C' value={newName} onChange={e => setNewName(e.target.value)} placeholder={"Name"}/> 

              <input type="text" className='input_C' value={newPhone} onChange={e => setNewPhone(e.target.value)} placeholder={"phone number"}/> 

              <input type="text" className='input_C' value={newCity} onChange={e => setNewCity(e.target.value)} placeholder={"city"}/> 

            <button className='btn1' type="submit" id='add'>Add
            <span></span><span></span><span></span><span></span>
            </button> 
          </form> 
          <div className='CL'>
          <h1 className='title'>Contact list</h1> 

            <input type="text" className='input-search' value={searchTerm} onChange={handleSearch} placeholder={"Search"} /> 
            <i id={"search-icon"} class="fa-solid fa-magnifying-glass"></i>

            <button className='btn-sort' onClick={() => handleSort('name')}>Sorted
            <span></span><span></span><span></span><span></span>
            </button> 
            </div>
          <ul>
        {sortedContacts.map((contact, index) => ( 
          <li key={index}> 
            <b type="button" className='btn2'>{contact.name}</b> 
            <p className='info1'>{contact.phone}</p>
            <p className='info2'>{contact.ville}</p> 
            <button className='btn-delete' onClick={() => handleDelete(index)}>Delete</button> 
          </li>
        ))} 
      </ul> 
    </div> 
  ); 
}; 
 
export default ContactList;