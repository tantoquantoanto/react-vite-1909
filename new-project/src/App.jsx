import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./Components/Navbar/NavBar";
import MainSection from "./Components/MainSection/MainSection";

function App() {

  const [isBookError, setIsBookError] = useState("")
  const [isBookLoading, setIsBookLoading] = useState(false)
  const [books, setBooks] = useState([]);
  const endPoint = "https://epibooks.onrender.com/"

  const getBooksFromApi = async () => {
    
    setIsBookLoading(true)
     try {
      const response = await fetch(endPoint) 
      const data = await response.json()
      setBooks(data)
      setIsBookLoading(false)


    } catch (error) {
     
      setIsBookError(error.message)
      console.log(error);

    }
    finally{
      setIsBookLoading(false)
    }
  };
  console.log(isBookError)

  useEffect(() => {
    getBooksFromApi()
  },[])

  return (
    <>
      <NavBar />
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
