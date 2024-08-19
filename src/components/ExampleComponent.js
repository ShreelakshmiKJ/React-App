import { useEffect, useState } from "react";

const ExampleComponent = () =>{

    const [data, setData] = useState(null); //data is the posts
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    //To populate the data, make a network call asynchronously using sideEffeect code
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts') //'fetch' from Axios library
        .then(response => response.json()) //response data in then()
        .then(data => {
         setData(data); //setting state variable to error
         setLoading(false); // set loading indicator to false once data populated
        })
        .catch(error => {
            console.log('Error fetching data:', error);
            setError(error); //setting state variable to error
            setLoading(false); // set loading indicator to false once error populated
        })
    }, []); // [] = returns func only once

    if(loading){
        return(
            <div> loading... </div>
        )
    }
    

    if(error){
        return(
            <div> Error fetching data: {error.message} </div>
        )
    }

    return(
        <div>
            <h2>:: Post Sample Data ::</h2>
            <pre> {JSON.stringify(data)} </pre>
        </div>
    )

}

export default ExampleComponent;