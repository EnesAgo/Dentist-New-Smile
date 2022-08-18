import React, { useEffect, useState } from 'react'
import './../../css/instagramposts.css'

function InstagramPosts() {
    const [data, setData] = useState()
    // const uri = 'https://v1.nocodeapi.com/newsmile/instagram/tIugTwbjFNSQTlBM'
    const uri = 'https://www.instagram.com/newsmileohrid/?__a=1'


    useEffect(() => {
        async function getPosts() {
            const response = await fetch(uri)
            // const data = await response.json()
            console.log(response)
            // setData(data)
        }
        getPosts();
    }, [])

      return (
          <div className='instagramPostsMain'>
            <ul>
                {data ? 
                data.data.map(e => {
                    return (
                        <li className='postSection' key={e.id}>
                            <img src={e.media_url} alt={e.id} height="200px" />
                        </li>
                    )
                }) :
                <div>Loading...</div>
                }
            </ul>
          </div>
      )
  }


export default InstagramPosts;