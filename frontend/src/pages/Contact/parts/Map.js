import React from 'react'
import './../../../css/contact.css'
import useWindowSizeOnce from './../../../hooks/useWindowSizeOnce'

function Map() {

    const {width, height} = useWindowSizeOnce();
    console.log(width)

    const url = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3005.640697441635!2d20.7953594!3d41.1205375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa5a4b863f48d2798!2s8GH24QCW%2B649!5e0!3m2!1str!2smk!4v1660828936698!5m2!1str!2smk"

      return (
          <div className='contactContainer map'>
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3005.6964307603307!2d20.795080215215453!3d41.11932047928961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1350dc9874d1e6ed%3A0x6d2f695bb76ad70e!2sKoshishta%2C%20Ohri!5e0!3m2!1str!2smk!4v1659181052756!5m2!1str!2smk" width={`${width}`} height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> */}
            <iframe src={url} width={`${width}`} height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
      )
  }


export default Map;