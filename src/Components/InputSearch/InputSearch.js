import { memo } from 'react'
import PropTypes from 'prop-types'

const InputSearch = ({ onChange }) => {
  return (
    <div className="gl-bg-gray-light gl-rounded gl-py-2 gl-px-4 gl-flex gl-items-center">
      <svg
        className="gl-fill-current gl-text-gray gl-transform gl-rotate-90"
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px">
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
      </svg>

      <input
        placeholder="Cerca"
        className="gl-bg-gray-light gl-pl-2 gl-w-full gl-outline-none gl-text-gray"
        onChange={onChange}
      />
    </div>
  )
}

InputSearch.propTypes = {
  onChange: PropTypes.func.isRequired,
}

export default memo(InputSearch)
