import PropTypes from 'prop-types'
import { memo } from 'react'

const GlossaryRow = ({
  name,
  open = false,
  content = null,
  iconCollapse = 'fa fa-angle-down',
  iconCollapseIn = 'fa fa-angle-up',
}) => {
  return (
    <div className="gl-shadow gl-rounded gl-px-2">
      <div
        className="gl-flex gl-items-center gl-justify-between gl-flex-wrap gl-cursor-pointer"
        onClick={() => console.log('row')}>
        <div className="gl-text-sm gl-py-3 gl-font-title">{name}</div>

        <div className="gl-bg-primary gl-rounded-full gl-w-7 gl-h-7 gl-flex gl-items-center gl-justify-center gl-py-3 gl-text-white">
          <i className={`${open ? iconCollapse : iconCollapseIn}`} />
        </div>
      </div>

      {open && (
        <div className="gl-mt-3 gl-pb-2 gl-text-sm">
          <div
            className="unreset-tw gl-font-main"
            dangerouslySetInnerHTML={{
              __html: content,
            }}
          />
        </div>
      )}
    </div>
  )
}

GlossaryRow.propTypes = {
  name: PropTypes.string.isRequired,
  open: PropTypes.bool,
  content: PropTypes.string,
  iconCollapse: PropTypes.string,
  iconCollapseIn: PropTypes.string,
}

export default memo(GlossaryRow)
