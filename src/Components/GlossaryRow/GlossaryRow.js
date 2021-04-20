/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types'
import { memo } from 'react'

const GlossaryRow = ({
  id,
  name,
  open = false,
  content = null,
  iconCollapse = 'fa fa-angle-down',
  iconCollapseIn = 'fa fa-angle-up',
  onClickRow,
  startsWithLetter,
  firstLetterItemId,
}) => {
  return (
    <div
      className="gl-shadow gl-rounded gl-px-2"
      ref={id === firstLetterItemId ? startsWithLetter : null}>
      <div
        className="gl-flex gl-items-center gl-justify-between gl-flex-wrap gl-cursor-pointer"
        onClick={onClickRow}>
        <div className="gl-text-sm gl-py-3 gl-font-title gl-font-bold gl-flex-1">
          {name}
        </div>

        <div className="gl-bg-primary gl-rounded-full gl-w-7 gl-h-7 gl-flex gl-items-center gl-justify-center gl-py-3 gl-text-white">
          <i className={`${open ? iconCollapseIn : iconCollapse} gl-fa`} />
        </div>
      </div>

      {open && <div className="gl-mt-3 gl-pb-2 gl-text-sm">{content}</div>}
    </div>
  )
}

GlossaryRow.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  name: PropTypes.string.isRequired,
  open: PropTypes.bool,
  content: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  iconCollapse: PropTypes.string,
  iconCollapseIn: PropTypes.string,
  onClickRow: PropTypes.func.isRequired,
  startsWithLetter: PropTypes.any,
  firstLetterItemId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default memo(GlossaryRow)
