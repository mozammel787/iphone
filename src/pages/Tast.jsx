import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import { useRef } from "react"

gsap.registerPlugin(ScrollTrigger)

export default function Tast() {

  const scrollRef = useRef()


  useGSAP(() => {
    gsap.to("#btn-green", {
      x: 900,
      repeat: -1,
      yoyo: true,
      rotate: 360,
      duration: 2,
      ease: "elastic",
    }
    )

    gsap.from("#btn-blue", {
      x: 900,
      repeat: -1,
      yoyo: true,
      rotate: 360,
      duration: 2,
      ease: "elastic",
    }
    )
    gsap.fromTo("#btn-red", {
      x: 0,
      rotate: 0,
      borderRadius: "0%"

    }, {
      x: 900,
      repeat: -1,
      yoyo: true,
      rotate: 360,
      borderRadius: "100%",
      duration: 2,
      ease: "bounce.out",
    }
    )
    gsap.fromTo(".btn", {
      opacity: 0,
      y: 20,

    }, {
      opacity: 1,
      y: 1,
      delay: 1,
      stagger: 0.1
    }
    )
  }, [])


  const timeLine = gsap.timeline({
    repeat: -1,
    repeatDelay: 1,
    yoyo: true,
  })

  useGSAP(() => {
    timeLine.to("#btn-yellow", {
      x: 250,
      rotate: 360,
      borderRadius: "100%",
      duration: 2,
      ease: "back,inOut"

    })

    timeLine.to("#btn-yellow", {
      x: 500,
      rotate: 360,
      borderRadius: "0%",
      scale: 2,
      duration: 2,
      ease: "back,inOut"

    })
    timeLine.to("#btn-yellow", {
      x: 750,
      rotate: 360,
      borderRadius: "100%",
      scale: 1,
      duration: 2,
      ease: "back,inOut"

    })
  }, [])


  useGSAP(() => {
    gsap.to('#btn-purple', {
      y: 250,
      rotate: 360,
      borderRadius: "100%",
      repeat: -1,
      yoyo: true,
      stagger: {
        amount: 1.5,
        grid: [2, 1],
        axis: "y",
        ease: "circ.inOut",
        from: "center"
      }
    })
  }, [])


  useGSAP(() => {
    const boxes = gsap.utils.toArray(scrollRef.current.children);
    boxes.forEach((box) => {
      gsap.to(box, {
        x: 150 * (boxes.indexOf(box) + 5),
        rotate: 360,
        borderRadius: "100%",
        scale: 1.5,
        scrollTrigger: {
          trigger: box,
          start: "bottom bottom",
          end: "top 10%",
          scrub: true,
        },
        ease: "power1.inOut"
      })
    })
  }, { scope: scrollRef })

  return (
    <div className="bg-black h-full py-20 overflow-hidden" >
      <h1 className="text-3xl font-bold underline text-white ">
        Hello world!
      </h1>

      <button id="btn-green" className=" m-10 btn p-10  rounded bg-gradient-to-r from-green-900 to-green-400 text-white font-semibold"></button>
      <br />
      <button id="btn-blue" className="btn m-10 btn p-10  rounded bg-gradient-to-r from-blue-900 to-blue-400 text-white font-semibold"></button>
      <br />
      <button id="btn-red" className="btn m-10 btn p-10  bg-gradient-to-r from-red-900 to-red-400 text-white font-semibold"></button>
      <br />
      <button id="btn-yellow" className="btn m-10 btn p-10  bg-gradient-to-r from-yellow-900 to-yellow-400 text-white font-semibold"></button>
      <br />
      <button onClick={() => {
        if (timeLine.paused()) {
          timeLine.play()
        }
        else {
          timeLine.pause()
        }
      }}
        className="btn m-10 btn p-4 rounded  bg-gray-300  text-black font-semibold">Play/Pause</button>
      <br />
      <div>
        <button id="btn-purple" className="btn m-4 btn p-10 rounded  bg-purple-300 text-white font-semibold"></button>
        <button id="btn-purple" className="btn m-4 btn p-10 rounded  bg-purple-400 text-white font-semibold"></button>
        <button id="btn-purple" className="btn m-4 btn p-10 rounded  bg-purple-500 text-white font-semibold"></button>
        <button id="btn-purple" className="btn m-4 btn p-10 rounded  bg-purple-600 text-white font-semibold"></button>
        <button id="btn-purple" className="btn m-4 btn p-10 rounded  bg-purple-700 text-white font-semibold"></button>
        <button id="btn-purple" className="btn m-4 btn p-10 rounded  bg-purple-800 text-white font-semibold"></button>
        <button id="btn-purple" className="btn m-4 btn p-10 rounded  bg-purple-900 text-white font-semibold"></button>

      </div>
      <br />
      <div className="mt-96 h-screen" ref={scrollRef}>
        <button id="btn-pink" className="scroll-box btn m-4 btn p-10 rounded  bg-gradient-to-r from-pink-900 to-pink-400 text-white font-semibold"></button>
        <br />
        <button id="btn-orange" className="scroll-box btn m-4 btn p-10 rounded  bg-gradient-to-r from-orange-900 to-orange-400 text-white font-semibold"></button>
      </div>
    </div>
  )
}