import { memo } from 'react'
import PropTypes from 'prop-types'
import GlossaryRow from 'Components/GlossaryRow/GlossaryRow'
import Api from 'Api/Api'
import { useQuery } from 'react-query'

const Glossary = ({ glossaryId }) => {
  const {
    data: { categories, config },
  } = useQuery(['data', glossaryId], () => Api.getData(glossaryId), {
    enabled: false,
  })

  console.log(categories)

  return (
    <>
      {categories.map((category) => (
        <div key={category.id} className="gl-mb-3 gl-text-body">
          <GlossaryRow
            name={category.name}
            iconCollapse={config.fa_icon_collapse}
            iconCollapseIn={config.fa_icon_collapse}
          />
        </div>
      ))}
    </>

    // <>
    //   <div className="gl-mb-3 gl-text-body">
    //     <GlossaryRow name="Analisi di impatto sul budget (Budget Impact Analysis – BIA)" />
    //   </div>

    //   <div className="gl-mb-3 gl-text-body">
    //     <GlossaryRow
    //       open
    //       name="Analisi di impatto sul budget (Budget Impact Analysis – BIA)"
    //       content="<p>Id non laborum id consequat non aute occaecat. Quis anim cillum eiusmod elit velit consectetur Lorem. Commodo cupidatat dolor culpa laborum ad excepteur exercitation do laboris et. Amet sunt magna aliqua labore aliquip aliqua elit consequat enim reprehenderit enim consequat voluptate cillum. Et aliqua magna anim enim adipisicing et commodo ipsum commodo minim quis proident officia.</p><p>Id non laborum id consequat non aute occaecat. Quis anim cillum eiusmod elit velit consectetur Lorem. Commodo cupidatat dolor culpa laborum ad excepteur exercitation do laboris et. Amet sunt magna aliqua labore aliquip aliqua elit consequat enim reprehenderit enim consequat voluptate cillum. Et aliqua magna anim enim adipisicing et commodo ipsum commodo minim quis proident officia.</p>"
    //     />
    //   </div>
    // </>
  )
}

Glossary.propTypes = {
  glossaryId: PropTypes.string.isRequired,
}

export default memo(Glossary)
