import { useState, useEffect } from 'react';
import '../App.css';
import { Post } from '../Interfaces/Post';
import TotalComments from './TotalComments';

const UserPosts = () => {
  // State to store the posts
  const [posts, setData] = useState();

  // useEffect to make the API call when the component mounts
  useEffect(() => {
    // Async function to fetch data from the API
    const fetchData = async () => {
      try {
        // Make the API call with a hardcoded userId
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?userId=1');
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


  return (
    <div className='offset-4'>
        {posts ? (
            <>
            <h1 className='py-4'>Posts: </h1>
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <div className='name-container'>
                            {/* mapping the object to get each post */}
                            {posts.map((item: Post) => (
                            <div key={item.id} className="card">
                                <div className="card-header">
                                <h5 className='my-3'><strong>{item.title}</strong></h5>
                                </div>
                                <div className="card-body">
                                    <p className="card-text">{item.body}</p>
                                    <div className="interactions">
                                    <a className="btn btn-primary">Like</a>
                                    {/* calling the TotalComments component to display the total comments */}
                                    <TotalComments commentId={item.id} /> 
                                    </div>
                                </div>
                          </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            </>
        ): 
        (
            <></>
        )}

      
    </div>
  );
};

export default UserPosts
