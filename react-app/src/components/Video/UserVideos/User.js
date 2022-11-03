import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import VideoCard from '../VideoList/VideoCard';
import './UserVidsList.css'
import NotFound from '../../NotFound/NotFound';

function User() {
  const [user, setUser] = useState({});
  const [isLoaded, setIsLoaded] = useState(false)
  const { userId }  = useParams();

  const vidList = (user.videos)
  // console.log(vidList)
  // console.log(videos)

  useEffect(() => {
    if (!userId) {
      return;
    }
    (async () => {
      const response = await fetch(`/api/users/${userId}`);
      // console.log(response)
      // if(response.status === 404) return <>404 not found</>
      const user = await response.json();
      // console.log(user)
      setUser(user);
      await setIsLoaded(true)
    })();
  }, [userId]);

  // console.log(user)

  if(user.statusCode === 404){
    return <NotFound />
  }

  if (!user) {
    // console.log("hi");
    return (
      <div>
        404 not found
      </div>
    );
  }

  if(!user.videos){
    return null
  }
  // console.log(user)
  

  return isLoaded && (
      <div className="user-video-list-page">
        <h3>{user.videos.length ? `${user.username}'s videos` : `${user.username} has no videos available`}</h3>
        {/* {!user.videos.length && <div><i class="fa-solid fa-face-sad-tear fa-10x fa-flip fa-animation-timing sad-face"></i></div>} */}
        <div className="user-videos">
          {vidList.map((video, i) => (
            <VideoCard key={i} video={video} />
          ))}
        </div>
      </div>
      // <>hi
      // </>
    )

}
export default User;
