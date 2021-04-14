/* eslint-disable no-param-reassign */
import { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { useQuery } from 'react-query'
import uniq from 'lodash.uniq'
import GlossaryRow from 'Components/GlossaryRow/GlossaryRow'
import Api from 'Api/Api'
import sortByName from 'Components/Utils/sortByName'
import Alphabet from 'Components/Alphabet/Alphabet'

const Glossary = ({ glossaryId, searchVal = '', resetSearch, scrollToTop }) => {
  const {
    data: { categories, config },
  } = useQuery(['data', glossaryId], () => Api.getData(glossaryId), {
    enabled: false,
  })

  const categoriesObj = {}

  const mapCategories = (items) => {
    items.forEach((item) => {
      if (!item.glossary || item?.glossary?.length <= 0) {
        categoriesObj[item.id] = item
        mapCategories(item.categories)
      }

      categoriesObj[item.id] = item
    })
  }

  mapCategories(categories)

  const parentCategories = Object.values(categoriesObj).filter(
    (item) => !item.glossary_category_id
  )

  const childrenCategories = Object.values(categoriesObj).filter(
    (item) => item.glossary_category_id
  )

  const allCategories = [...parentCategories, ...childrenCategories]

  const startsWithLetter = useRef(null)
  const [activeCategories, setActiveCategories] = useState(parentCategories)
  const [activeGlossary, setActiveGlossary] = useState(null)
  const [activeLetter, setActiveLetter] = useState(null)

  const changeActiveLetter = useCallback((letter) => {
    setActiveLetter(letter)
  }, [])

  const onClickRow = useCallback(
    (category) => {
      const subCategories = categoriesObj[category.id]?.categories

      if (!category.glossary || category?.glossary?.length <= 0) {
        setActiveCategories(subCategories)
        setActiveGlossary(null)
        scrollToTop()

        if (searchVal !== '') {
          resetSearch()
        }
      } else {
        setActiveGlossary((cat) =>
          cat !== category.glossary ? category.glossary : null
        )
      }

      changeActiveLetter(null)
    },
    [searchVal]
  )

  const activeCategory = allCategories.filter(
    (item) => item.id === activeCategories?.[0]?.glossary_category_id
  )?.[0]

  const onClickBack = () => {
    const subCategories = allCategories.filter(
      (item) =>
        item.glossary_category_id === activeCategory?.glossary_category_id
    )

    setActiveCategories(subCategories)
    changeActiveLetter(null)
    scrollToTop()

    if (searchVal !== '') {
      resetSearch()
    }
  }

  const filteredCategories = activeCategories
    .filter(
      (item) => item.name.toUpperCase().indexOf(searchVal.toUpperCase()) !== -1
    )
    .sort(sortByName)

  const letters = useMemo(() => {
    return uniq(filteredCategories.map((el) => el.name[0].toUpperCase()))
  }, [filteredCategories])

  const executeScroll = () =>
    startsWithLetter.current
      ? startsWithLetter.current.scrollIntoView({ behavior: 'smooth' })
      : null

  useEffect(() => {
    executeScroll()
  }, [activeLetter])

  const renderTree = () =>
    filteredCategories.map((category) => (
      <div key={category.id} className="gl-mb-3 last:gl-mb-0 gl-text-body">
        <GlossaryRow
          id={category.id}
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
          firstLetterItemId={
            filteredCategories.filter((el) => el.name[0] === activeLetter)?.[0]
              ?.id
          }
          startsWithLetter={startsWithLetter}
        />
      </div>
    ))

  return (
    <div className="gl-flex">
      {config.indexing && (
        <div className="gl-pl-4 gl-order-2 lg:gl-pl-0 lg:gl-pr-4 lg:gl-order-1 gl-relative">
          <Alphabet
            letters={letters}
            activeLetter={activeLetter}
            handleClick={changeActiveLetter}
          />
        </div>
      )}

      <div className="gl-flex-1 gl-order-1 lg:gl-order-2">
        {!!activeCategory && (
          <>
            <div className="gl-mb-5 gl-inline-flex gl-items-center gl-cursor-pointer gl-text-gray">
              <i className="fas fa-chevron-left gl-inline-block gl-mr-2" />
              <div className="gl-font-main gl-font-bold" onClick={onClickBack}>
                Indietro
              </div>
            </div>

            <div className="gl-font-title gl-text-xl gl-text-primary gl-mb-5 gl-font-bold">
              {activeCategory.name}
            </div>
          </>
        )}

        {renderTree()}
      </div>
    </div>
  )
}

Glossary.propTypes = {
  glossaryId: PropTypes.string.isRequired,
  searchVal: PropTypes.string,
  resetSearch: PropTypes.func.isRequired,
  scrollToTop: PropTypes.func.isRequired,
}

export default memo(Glossary)
