import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const SearchForm = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    if(searchTerm.trim() !== ''){
        setErrorMsg('');
        props.handleSearch(searchTerm);
    }
    else{
        setErrorMsg('Please search what you want')
    }
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicEmail">
        {errorMsg && <p className="errorMsg">{errorMsg}</p>}
        <Form.Label>Find your album, artist or playlist</Form.Label>
        <Form.Control
          type="search"
          name="search"
          placeholder="Search"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </Form.Group>
      <Button variant="success" type="submit">
        Search
      </Button>
    </Form>
  );
};
export default SearchForm;
