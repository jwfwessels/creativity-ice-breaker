import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { Button } from "./Button"
import { ImagesOptions } from "./Images"
import { useRandomize } from "../hooks/useRandomize"

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 4em auto;
  height: 10em;
`
const Placeholder = styled.div`
  width: 7rem;
  height: 7rem;
  font-size: 7em;
  text-align: center;
  line-height: 7rem;
  color: #3f51b580;
`

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: sans-serif;
  font-size: 1em;
  width: 6em;
  margin: 1em;

  @media (min-width: 768) {
    font-size: 2em;
    width: 6em;
  }
`
const StyledImage = styled.img`
  width: 5rem;
  margin-bottom: 1em;

  @media (min-width: 768) {
    width: 7rem;
  }
`
const Plus = styled.div`
  font-size: 4em;
  font-weight: 700;
  @media (min-width: 768) {
    font-size: 6em;
  }
`

const Slot = ({ ImagesOptions, result, loops }) => {
  const imageNames = Object.keys(ImagesOptions)
  const items = Object.values(ImagesOptions)
  const len = items.length
  let [{ curr, tick }, set] = useState({ curr: 0, tick: 0 })

  useEffect(() => {
    if (tick < len * loops || curr !== result) {
      setTimeout(() => {
        set({ curr: (curr + 1) % len, tick: tick + 1 })
      }, 100)
    }
    // set({ curr: curr, tick: 0 })
  }, [tick])

  useEffect(() => {
    set({ curr: 0, tick: 0 })
  }, [result])

  return (
    <ItemWrapper>
      <StyledImage src={items[curr]} alt={imageNames[curr]} />
      {imageNames[curr]}
    </ItemWrapper>
  )
}

export const Spinner = () => {
  // const {}
  const imageNames = Object.keys(ImagesOptions)
  const Images = Object.values(ImagesOptions)
  const { options, randomize, played } = useRandomize(imageNames.length)

  return (
    <>
      <Container>
        {played ? (
          <Slot ImagesOptions={ImagesOptions} result={options[0]} loops={1.5} />
        ) : (
          <Placeholder>?</Placeholder>
        )}
        <Plus>+</Plus>
        {played ? (
          <Slot ImagesOptions={ImagesOptions} result={options[1]} loops={2.5} />
        ) : (
          <Placeholder>?</Placeholder>
        )}
      </Container>

      <Button onClick={randomize}>{played ? "Replay" : "Play"}</Button>
    </>
  )
}
