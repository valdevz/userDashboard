import { useState, useEffect } from 'react';
import { User } from '../Interfaces/User';
import '../App.css';

// Functional component that displays the total comments for a specific post
const TotalComments = (commentId: number) => {
  // State to store the comments
  const [comments, setData] = useState<User>();

  // useEffect to make the API call when the component mounts
  useEffect(() => {
    // Async function to fetch data from the API
    const fetchData = async () => {
      try {
        // Make the API call with the provided commentId
        const response = await fetch('https://jsonplaceholder.typicode.com/comments?postId='+ commentId.commentId);
        const result = await response.json();
        // Update the state with the fetched data
        setData(result);
      } catch (error) {
        // Error handling in case the API call fails
        throw new Error('Error fetching data:');
      }
    };

    // Call the fetchData function
    fetchData();
  }, []);

  // Render the component
  return (
    <>
      {comments ? (
        <>
          {/* Display the number of comments if they exist */}
          <p className='d-inline' style={{margin: '0 0 0 12px'}}>Comments: {comments.length}</p>
        </>
      ) : (
        // Render an empty fragment if there are no comments
        <></>
      )}
    </>
  );
};

export default TotalComments;