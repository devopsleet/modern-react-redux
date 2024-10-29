import {useState} from 'react'

function SearchBar({onSubmit}) {
  //   const handleClick = () => {
  //     onSubmit('cars')
  //   };

  const [term, setTerm] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
    // console.log('I need to tell the parent about some data');
  };

  const handleChange = (event) => {
    //console.log(event.target.value);
    setTerm(event.target.value)
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input value = {term} onChange= {handleChange}/>
      </form>
      {/* <button onClick={handleClick}>Click Me!</button> */}
    </div>
  );
}

export default SearchBar;
