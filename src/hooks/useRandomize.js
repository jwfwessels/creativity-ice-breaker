import React from 'react';
import { useState } from "react"


const getRand = (len, not = -1) => {
    let result
    do {
      result = Math.ceil(Math.random() * len)
    } while (not === result)
    return result
  }

export const useRandomize = len => {
  const length = len - 1
  const [options, setState] = useState([null, null])
  const [played, setPlayed] = useState(false)

  const randomize = prevOptions => () => {
    let opt1 = getRand(length, prevOptions[0])
    let opt2 = getRand(length - 1, opt1)
    if (opt1 === opt2) {
      opt2++
    }
    if (!played) setPlayed(true)
    setState([opt1, opt2])
  }

  return { options, randomize: randomize(options), played }
}
