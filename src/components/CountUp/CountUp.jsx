"use client"
import { useEffect, useState, useRef } from "react"

const CountUp = ({ end, duration = 1000 }) => {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  const elementRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current || hasStarted) return

      const rect = elementRef.current.getBoundingClientRect()
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0

      if (isVisible) {
        setHasStarted(true)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check initial visibility

    return () => window.removeEventListener("scroll", handleScroll)
  }, [hasStarted])

  useEffect(() => {
    if (!hasStarted) return

    let start = 0
    const incrementTime = Math.floor(duration / end)

    const timer = setInterval(() => {
      start += 1
      setCount(start)
      if (start >= end) clearInterval(timer)
    }, incrementTime)

    return () => clearInterval(timer)
  }, [end, duration, hasStarted])

  return <span ref={elementRef}>{count}+</span>
}

export default CountUp
