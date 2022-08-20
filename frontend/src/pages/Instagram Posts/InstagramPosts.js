import React, { useEffect, useState } from 'react'
import './../../css/instagramposts.css'

function InstagramPosts() {
    const [igPostsId, setIgPostsId] = useState()
    const [errData, setErrData] = useState()
    const [data, setData] = useState()
    const [postArr, setPostArr] = useState([])


    const token = 'IGQVJWRmVZAR0Nkek1uakhpTldXZAkg1RWFHUlZAjbDNsUmI2bEhtQW5IejFNVkRLNFhtZAXJ3c3RBYVhkZAnYxc2o1QzNuRnRkdXdmRW9SbkRkUmJ1VUJpM0NvTldsZAHZAoNXZAjQjdGYW1oQ05FYXFqYWoxMwZDZD'
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
                setPostArr([])

                    try{
                        igPostsId.data.forEach(async element => {
                            const postId = element.id;
                            const postUri = `https://graph.instagram.com/${postId}?fields=id,media_type,media_url,username,timestamp&access_token=${token}`;
        
                            const postRes = await fetch(postUri)
                            const postData = await postRes.json()
        
                            posts.push(postData)
                            console.log(postData)
                            setPostArr(current => [...current, postData])
        
        
                        });
            
                        setData(posts)
                        // console.log(data)
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
                            <>
                            {
                                postArr.map(e => 
                                        <img key={`${e.id}${Math.random()}`} src={e.media_url} style={{height:"100px"}} />
                                        // <div key={e.id}>hi</div>
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