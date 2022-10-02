import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import VideoCard from '../VideoList/VideoCard';
import './UserVidsList.css'

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
      const user = await response.json();
      setUser(user);
      await setIsLoaded(true)
    })();
  }, [userId]);

  if (!user) {
    return null;
  }

  if(!user.videos){
    return null
  }
  console.log(user)
  

  return isLoaded && (
      <div className="user-video-list-page">
        <h3>{user.videos.length ? `${user.username}'s videos` : `${user.username} has no videos availablee`}</h3>
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
