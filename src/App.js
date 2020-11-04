import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'

const Animation = () => {
    const boxRef = useRef()

    useEffect(() => {
        gsap.to([boxRef.current], {
            x: '300px',
            duration: 5
        })
    })

    return (

      <div ref={boxRef} style={{
        width: '160px',
        height: '160px',
        background: 'salmon'
        }} />
      )
    }
      export default Animation;
