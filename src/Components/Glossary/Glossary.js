/* eslint-disable no-param-reassign */
import { memo, useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import { useQuery } from 'react-query'
import GlossaryRow from 'Components/GlossaryRow/GlossaryRow'
import Api from 'Api/Api'

const Glossary = ({ glossaryId }) => {
  const {
    data: { categories, config },
  } = useQuery(['data', glossaryId], () => Api.getData(glossaryId), {
    enabled: false,
  })

  const mapCategories = (items) => {
    return items.map((item) => {
      if (!item.glossary) {
        return mapCategories(item.categories)
      }

      return item
    })
  }

  const parentCategories = categories.map((item) => {
    const { categories: cats, ...rest } = item
    return rest
  })

  const allCategories = [
    ...parentCategories,
    ...mapCategories(categories).flat(),
  ]

  const [activeCategories, setActiveCategories] = useState(parentCategories)
  const [activeGlossary, setActiveGlossary] = useState(null)

  const onClickRow = useCallback((category) => {
    const subCategories = allCategories.filter(
      (item) => item.glossary_category_id === category.id
    )

    if (!category.glossary) {
      setActiveCategories(subCategories)
      setActiveGlossary(null)
    } else {
      setActiveGlossary((cat) =>
        cat !== category.glossary ? category.glossary : null
      )
    }
  }, [])

  const activeCategory = allCategories.filter(
    (item) => item.id === activeCategories?.[0]?.glossary_category_id
  )?.[0]

  const onClickBack = () => {
    const subCategories = allCategories.filter(
      (item) =>
        item.glossary_category_id === activeCategory?.glossary_category_id
    )

    setActiveCategories(subCategories)
  }

  const renderTree = () =>
    activeCategories.map((category) => (
      <div key={category.id} className="gl-mb-3 gl-text-body">
        <GlossaryRow
          name={category.name}
          iconCollapse={config.fa_icon_collapse}
          iconCollapseIn={config.fa_icon_collapse_in}
          onClickRow={() => onClickRow(category)}
          open={
            activeCategories?.id === category.id ||
            activeGlossary?.[0]?.glossary_category_id === category.id
          }
          content={
            activeGlossary?.[0]?.glossary_category_id !== category.id
              ? null
              : activeGlossary.map((glossary) => (
                  <div
                    className="unreset-tw gl-font-main gl-mb-2 last:gl-mb-0"
                    key={glossary.id}
                    dangerouslySetInnerHTML={{ __html: glossary.body }}
                  />
                ))
          }
        />
      </div>
    ))

  return (
    <>
      {!!activeCategory && (
        <>
          <div className="gl-mb-5 gl-inline-flex gl-items-center gl-cursor-pointer gl-text-gray">
            <i className="fas fa-chevron-left gl-inline-block gl-mr-2" />
            <div
              className="gl-font-main gl-font-semibold"
              onClick={onClickBack}>
              Indietro
            </div>
          </div>

          <div className="gl-font-title gl-text-xl gl-text-primary gl-mb-5">
            {activeCategory.name}
          </div>
        </>
      )}

      {renderTree()}
    </>
  )
}

Glossary.propTypes = {
  glossaryId: PropTypes.string.isRequired,
}

export default memo(Glossary)
