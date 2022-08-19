import React, { useEffect, useState } from 'react'
import './../../css/instagramposts.css'

function InstagramPosts() {
    const [igPostsId, setIgPostsId] = useState()
    const [errData, setErrData] = useState()
    const [data, setData] = useState([])


    const token = 'IGQVJXd0xjV3FQUEhxTnkyYzRXMEQ2ZAWZApTGZAOLTh2X1dSOXpjWVMtLTZAJa2ZA3RjV2X0w0Sk1KdVFWVkc0cF82QUZABUzR1Y3hJb2tDM3RoRFhxa1NBUVhzQVlJcG9YRFNSTE9Jb2Vn'
    const uri = 'https://graph.instagram.com/me/media?fields=id,username&access_token=' + token;
    


    useEffect(() => {
        async function getIds() {

            try{
                const response = await fetch(uri)
                const data = await response.json()

                if(data.error){
                    setErrData("error")
                }
                else{
                    setIgPostsId(data)
                }
            }
            catch(e){
                console.log(`error is: ${e}`)
                setErrData("error")
            }


        }
        getIds()
    }, [])

    useEffect(() => {
            function getPostInfo() {
                let posts = [];

                if(igPostsId){
                    try{
                        igPostsId.data.forEach(async element => {
                            const postId = element.id;
                            const postUri = `https://graph.instagram.com/${postId}?fields=id,media_type,media_url,username,timestamp&access_token=${token}`;
        
                            const postRes = await fetch(postUri)
                            const postData = await postRes.json()
        
                            posts.push(postData)
        
        
                        });
            
                        setData(posts)
                        console.log(data)
                    }
                    catch(e){
                        console.log(`error is: ${e}`)
                    }

                }

            }

            getPostInfo()
    }, [igPostsId])


      return (
          <div className='instagramPostsMain'>

            <div className='postSection'>
                {
                    data ?
                    <>
                        {
                            errData ?
                            <h1>Api has reached his limitations, please try later</h1> :
                            <h1>data</h1>
                        }
                    </>     :
                    <div>Loading...</div>
                }
            </div>

          </div>
      )
  }


export default InstagramPosts;