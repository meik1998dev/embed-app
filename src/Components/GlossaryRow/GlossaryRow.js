/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types'
import { memo } from 'react'

const GlossaryRow = ({
  id,
  name,
  iconCollapse,
  iconCollapseIn,
  content,
  onClickRow,
  startsWithLetter,
  firstLetterItemId,
  open,
}) => {
  return (
    <div
      className="gl-shadow gl-rounded gl-p-3"
      ref={id === firstLetterItemId ? startsWithLetter : null}>
      <div
        className="gl-flex gl-items-center gl-justify-between gl-flex-wrap gl-cursor-pointer"
        onClick={onClickRow}>
        <div className="gl-flex-1 gl-font-semibold gl-text-sm">{name}</div>

        <div className="gl-bg-primary gl-rounded-full gl-w-7 gl-h-7 gl-flex gl-items-center gl-justify-center gl-py-3 gl-text-white">
          <i className={`${open ? iconCollapseIn : iconCollapse} gl-fa`} />
        </div>
      </div>

      {open && <div className="gl-text-sm">{content}</div>}
    </div>
  )
}

GlossaryRow.defaulrProps = {
  content: null,
  startsWithLetter: null,
  firstLetterItemId: null,
  open: false,
  onClickRow: () => null,
}

GlossaryRow.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  name: PropTypes.string.isRequired,
  iconCollapse: PropTypes.string,
  iconCollapseIn: PropTypes.string,
  onClickRow: PropTypes.func,
  content: PropTypes.any,
  startsWithLetter: PropTypes.any,
  firstLetterItemId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  open: PropTypes.bool,
}

export default memo(GlossaryRow)
