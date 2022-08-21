import React, { useEffect, useState } from 'react'
import './../../css/instagramposts.css'



function InstagramPosts() {
    const [errData, setErrData] = useState()
    const [data, setData] = useState()

    const [fetchUsersOnce, setFetchUsersOnce] = useState(true)


    // const token = process.env.REACT_APP_TOKEN;
    const token = process.env.REACT_APP_TOKEN_ORRIGINAL;
    const uri = `https://graph.instagram.com/me/media?fields=id,username,media_url,media_type,caption,permalink,timestamp&access_token=${token}`;


    useEffect(() => {
        async function getIds() {

            try{
                const response = await fetch(uri)
                const data = await response.json()

                if(data.error){
                    setErrData("error")
                }
                else{
                    setData(data)
                    console.log(data)
                }
            }
            catch(e){
                console.log(`error is: ${e}`)
                setErrData("error")
            }

            setFetchUsersOnce(false)

        }
        if(fetchUsersOnce){
            getIds()
        }
    }, [])


      return (
          <div className='instagramPostsMain'>

            <div className='postSection'>
                {
                    data ?
                    <>
                        {
                            errData ?
                            <h1>Api has reached his limitations, please try later</h1> :
                            <>
                            {
                                data.data.map(e => 
                                <div key={`${e.id}${Math.random()}`} style={{minWidth: "300px"}}>
                                    <a href={e.permalink} target="_blank" >
                                    {
                                        (e.media_type == 'IMAGE' || e.media_type == "CAROUSEL_ALBUM") ?
                                        <img src={e.media_url} style={{width:"300px", background: "rgb(220, 222, 220)"}} /> :
                                        <video height={"300px"} controls style={{width:"300px", background: "rgb(220, 222, 220)"}}>
                                            <source src={e.media_url} type="video/mp4" />
                                        </video>
                                    
                                    }
                                    </a>
                                </div>
                                )
                            }
                            </>
                        }
                    </>     :
                    <div>Loading...</div>
                }
            </div>

          </div>
      )
  }


export default InstagramPosts;