import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./Components/Navbar/NavBar";
import MainSection from "./Components/MainSection/MainSection";

function App() {


  
  const [inputValue, setInputValue] = useState("");
  const [isBookError, setIsBookError] = useState("")
  const [isBookLoading, setIsBookLoading] = useState(false)
  const [books, setBooks] = useState([]);
  const endPoint = "https://epibooks.onrender.com/"
  const [allBooks, setAllBooks] = useState([])

  const getBooksFromApi = async () => {
    
    setIsBookLoading(true)
     try {
      const response = await fetch(endPoint) 
      const data = await response.json()
      setBooks(data)
      setIsBookLoading(false)
      setAllBooks(data)
      


    } catch (error) {
     
      setIsBookError(error.message)
      console.log(error);

    }
    finally{
      setIsBookLoading(false)
    }
  };

  const searchBooks = () => {
    if (inputValue === "") {
      setBooks(allBooks); 
    } else {
      const searchedBooks = allBooks.filter((book) => {
        return book.title.toLowerCase().includes(inputValue.toLowerCase());
      });
      setBooks(searchedBooks); 
    }
  };
  


  
  



  useEffect(() => {
    getBooksFromApi()
  },[])

  return (
    <>
      <NavBar
      books= {books}
      setBooks= {setBooks}
      allBooks={allBooks}
      searchBooks={searchBooks} 
      inputValue={inputValue}
      setInputValue={setInputValue}/>
      <MainSection 
      books={books}
      setBooks={setBooks}
      isLoading = {isBookLoading}
      isError = {isBookError}
      />
    </>
  );
}

export default App;
