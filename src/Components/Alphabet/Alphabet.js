import { memo } from 'react'

const allLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

const AlphabetScroll = () => {
  return (
    <div className="gl-inline-flex gl-flex-col gl-items-center gl-overflow-auto gl-sticky gl-top-0">
      {allLetters.map((letter) => (
        <div
          key={letter}
          onClick={() => console.log(letter)}
          className="gl-mb-2 gl-text-xs gl-cursor-pointer">
          {letter}
        </div>
      ))}
    </div>
  )
}

export default memo(AlphabetScroll)
