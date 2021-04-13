import { memo } from 'react'
import PropTypes from 'prop-types'

const allLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

const Alphabet = ({ letters, activeLetter, handleClick }) => {
  return (
    <div className="gl-inline-flex gl-flex-col gl-items-center gl-overflow-auto gl-sticky gl-top-0">
      {allLetters.map((letter) => (
        <div
          key={letter}
          onClick={() => handleClick(letter)}
          className={`gl-mb-2 gl-text-xs gl-cursor-pointer gl-text-black ${
            activeLetter === letter ? 'gl-font-bold gl-text-black' : null
          } ${
            allLetters.some(() => letters.indexOf(letter) === -1)
              ? 'gl-text-gray gl-pointer-events-none'
              : null
          }`}>
          {letter}
        </div>
      ))}
    </div>
  )
}

Alphabet.propTypes = {
  letters: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeLetter: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
}

export default memo(Alphabet)
