import { memo } from 'react'

const SelectOrder = () => {
  return (
    <label htmlFor="order" className="gl-inline-flex gl-items-center">
      <svg
        className="gl-fill-current gl-text-gray"
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px">
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M12 5.83L15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9 12 5.83zm0 12.34L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15 12 18.17z" />
      </svg>
      <span className="gl-text-gray">Ordina per:</span>

      <select
        id="order"
        name="order"
        className="gl-rounded gl-text-gray gl-placeholder-gray gl-ml-1 gl-cursor-pointer gl-appearance-none gl-outline-none"
        value="order"
        onChange={(e) => console.log(e.target.value)}>
        <option value="name">Nome</option>
        <option value="updated_at">Ultima modifica</option>
      </select>
    </label>
  )
}

export default memo(SelectOrder)
