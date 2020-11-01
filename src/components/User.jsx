import React, { useState, useEffect } from 'react'
import Styled from 'styled-components'
import SkeletonProfile from '../skeletons/SkeletonProfile'

const Profile = Styled.div`

`

export default function User() {

    const [profile, setProfile] = useState(null)

    useEffect(() => {
        setTimeout(async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/users/1')
            const data = await res.json()
            setProfile(data)
        }, 5000);
    })

    return (
        <div>
            <h2>User Details</h2>

            {profile && (
                <Profile>
                    <h3>{profile.username}</h3>
                    <p>{profile.email}</p>
                    <a href={profile.website}>{profile.website}</a>
                </Profile>
            )}

            {!profile && (
                <SkeletonProfile></SkeletonProfile>
            )}
        </div>


    )
}
