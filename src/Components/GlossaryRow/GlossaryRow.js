import PropTypes from 'prop-types'
import { memo } from 'react'

const GlossaryRow = ({ name }) => {
  return (
    <div className="gl-shadow gl-rounded gl-px-2">
      <div
        className="gl-flex gl-items-center gl-justify-between gl-flex-wrap gl-cursor-pointer"
        onClick={() => console.log('row')}>
        <div className="gl-text-sm gl-py-3">{name}</div>

        <div className="gl-bg-primary gl-rounded-full gl-w-7 gl-h-7 gl-flex gl-items-center gl-justify-center gl-py-3">
          <svg
            className="gl-fill-current gl-text-white"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px">
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M10.02 6L8.61 7.41 13.19 12l-4.58 4.59L10.02 18l6-6-6-6z" />
          </svg>
        </div>
      </div>
    </div>
  )
}

GlossaryRow.propTypes = {
  name: PropTypes.string.isRequired,
}

export default memo(GlossaryRow)
