import { useState, useEffect } from 'react';
import { User } from '../Interfaces/User';
import userImage  from '../assets/userProfile.jpg'
import '../App.css';

const UserInfo = () => {
    // State to store the user information
    const [data, setData] = useState<User>();

    // useEffect to make the API call when the component mounts
  useEffect(() => {
    // Async function to fetch data from the API
    const fetchUser = async () => {
      try {
        // Make the API call with a hardcoded userId
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const result = await response.json();
        // Update the state with the fetched data
        setData(result);
      } catch (error) {
        setData(undefined);
        throw new Error('Error fetching data:');
      }
    };

    fetchUser();
  }, []);


  return (
    <>
        {/* if there are thata in the data object then display the user info */}
        {data ? (
            <>
            <h1 className='py-4 text-center'>Profile</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 user-imamge-card">
                        <div className="image-container">
                            <img className="image" width="200px" height="200px" src={userImage} alt={data.name} />
                        </div>
                        <div className='name-container text-center'>
                            <h2>{data.name}</h2>
                        </div>
                    </div>
                    <div className="col-sm user-info" >
                        <div className="info-container">
                            <h4>Email: {data.email}</h4>
                            <h4>Phone: {data.phone}</h4>
                            <h4>Website: {data.website}</h4>
                        </div>
                    </div>
                </div>
            </div>
            </>
        ): 
        //  else display the loader
        (
            <div className="loader"></div>
        )}

      
    </>
  );
};

export default UserInfo
