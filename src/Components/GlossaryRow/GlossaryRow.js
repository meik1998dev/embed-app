import PropTypes from 'prop-types'
import { memo } from 'react'

const GlossaryRow = ({
  name,
  open = false,
  content = null,
  iconCollapse = 'fa fa-angle-down',
  iconCollapseIn = 'fa fa-angle-up',
  onClickRow,
}) => {
  return (
    <div className="gl-shadow gl-rounded gl-px-2">
      <div
        className="gl-flex gl-items-center gl-justify-between gl-flex-wrap gl-cursor-pointer"
        onClick={onClickRow}>
        <div className="gl-text-sm gl-py-3 gl-font-title gl-font-bold gl-flex-1">
          {name}
        </div>

        <div className="gl-bg-primary gl-rounded-full gl-w-7 gl-h-7 gl-flex gl-items-center gl-justify-center gl-py-3 gl-text-white">
          <i className={`${open ? iconCollapseIn : iconCollapse}`} />
        </div>
      </div>

      {open && <div className="gl-mt-3 gl-pb-2 gl-text-sm">{content}</div>}
    </div>
  )
}

GlossaryRow.propTypes = {
  name: PropTypes.string.isRequired,
  open: PropTypes.bool,
  content: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  iconCollapse: PropTypes.string,
  iconCollapseIn: PropTypes.string,
  onClickRow: PropTypes.func.isRequired,
}

export default memo(GlossaryRow)
