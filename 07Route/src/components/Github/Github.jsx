import {React, useEffect, useState} from 'react'

function Github() {
    const [follower, setFollower] = useState(0)
    useEffect(() => {
        fetch('https://api.github.com/users/engrhasnain')
        .then(res => res.json())
        .then(follower => setFollower(follower))
        console.log(follower);
    }, [])
  return (
    <div>
      GitHub Followers: {follower.followers}
    </div>
  )
}

export default Github
