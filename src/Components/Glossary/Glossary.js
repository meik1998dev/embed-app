/* eslint-disable no-param-reassign */
import { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { useQuery } from 'react-query'
import uniq from 'lodash.uniq'
import values from 'lodash.values'
import keyBy from 'lodash.keyby'
import flatten from 'lodash.flatten'
import GlossaryRow from 'Components/GlossaryRow/GlossaryRow'
import Api from 'Api/Api'
import sortByName from 'Components/Utils/sortByName'
import Alphabet from 'Components/Alphabet/Alphabet'
import smoothscroll from 'smoothscroll-polyfill'
import InputSearch from 'Components/InputSearch/InputSearch'

smoothscroll.polyfill()

const Glossary = ({ glossaryId }) => {
  const {
    data: { categories: data, config },
  } = useQuery(['data', glossaryId], () => Api.getData(glossaryId), {
    enabled: false,
  })

  const startsWithLetter = useRef(null)
  const [activeCategories, setActiveCategories] = useState(null)
  const [activeGlossary, setActiveGlossary] = useState(null)
  const [searchVal, setSearchVal] = useState('')
  const [activeLetter, setActiveLetter] = useState(null)

  const changeActiveLetter = useCallback((letter) => {
    setActiveLetter(letter)
  }, [])

  const categories = values(data)
  const allCategories = {}
  const tags = {}

  const mapCategories = (items) => {
    items.forEach((item) => {
      if (!item.glossary || item?.glossary?.length <= 0) {
        allCategories[item.id] = item
        mapCategories(item.categories)
      }

      if (item.glossary?.length > 0) {
        allCategories[item.id] = item
      }
    })
  }

  mapCategories(categories)

  const mapTags = (items) => {
    items.forEach((item) => {
      if (!item.glossary || item?.glossary?.length <= 0) {
        mapTags(item.categories)
      }

      if (item.glossary?.length > 0) {
        item.glossary.forEach((glossary) => {
          tags[glossary.glossary_category_id] = glossary.tags
        })
      }
    })
  }

  mapTags(categories)

  const parentCategories = values(allCategories).filter(
    (item) => !item.glossary_category_id
  )

  const childrenCategories = values(allCategories).filter(
    (item) => item.glossary_category_id
  )

  const glossaries = flatten(
    childrenCategories.map((category) => category.glossary)
  )

  useEffect(() => {
    setActiveCategories(keyBy(parentCategories, 'id'))
  }, [])

  const onClickRow = (el) => {
    if (!el.glossary && !el.categories) {
      if (el.id !== activeGlossary?.id) {
        setActiveGlossary(el)
      } else {
        setActiveGlossary(null)
      }

      return
    }

    if (!el.glossary || el?.glossary?.length <= 0) {
      const subCategories = allCategories[el.id]?.categories

      setActiveCategories(keyBy(subCategories, 'id'))
    } else {
      const innerGlossaries = values(glossaries)
        .filter((glossary) => glossary.glossary_category_id === el.id)
        .map((item) => {
          return {
            ...item,
            name: item.title,
          }
        })

      setActiveCategories(keyBy(innerGlossaries, 'id'))
    }
  }

  const onSearch = (e) => {
    setSearchVal(e.target.value)

    if (!e.target.value) {
      setActiveCategories(keyBy(parentCategories, 'id'))
    } else {
      const filteredCategoriesByName = values(allCategories).filter(
        (item) =>
          item.name.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1
      )

      const filteredGlossariesByTag = glossaries
        .filter((glossary) => {
          if (!e.target.value) {
            return []
          }

          return glossary.tags.some(
            (tag) =>
              tag.name.en
                .toLowerCase()
                .indexOf(e.target.value.toLowerCase()) !== -1
          )
        })
        .map((item) => {
          return {
            ...item,
            name: item.title,
            id: `glossary-${item.id}`,
          }
        })

      const filteredGlossariesByName = glossaries
        .filter((glossary) => {
          return (
            glossary.title
              .toLowerCase()
              .indexOf(e.target.value.toLowerCase()) !== -1
          )
        })
        .map((item) => {
          return {
            ...item,
            name: item.title,
            id: `glossary-${item.id}`,
          }
        })

      setActiveCategories({
        ...keyBy(filteredCategoriesByName, 'id'),
        ...keyBy(filteredGlossariesByName, 'id'),
        ...keyBy(filteredGlossariesByTag, 'id'),
      })
    }
  }

  const onClickBack = () => {
    if (searchVal) {
      return
    }

    const categoryId = values(activeCategories)?.[0]?.glossary_category_id
    const parentCategoryId = allCategories?.[categoryId]?.glossary_category_id

    const backCategories = values(allCategories).filter(
      (el) => el.glossary_category_id === parentCategoryId
    )

    setActiveCategories(keyBy(backCategories, 'id'))
  }

  const isFirstLevel =
    values(activeCategories)?.[0]?.glossary_category_id === null

  const categoryId = values(activeCategories)?.[0]?.glossary_category_id

  const activeTitle = allCategories?.[categoryId]?.name

  const letters = useMemo(() => {
    return uniq(
      values(activeCategories)?.map((el) => el.name?.[0]?.toUpperCase())
    )
  }, [activeCategories])

  const executeScroll = () =>
    startsWithLetter.current
      ? startsWithLetter.current.scrollIntoView({ behavior: 'smooth' })
      : null

  useEffect(() => {
    executeScroll()
  }, [activeLetter])

  return (
    <div>
      <div className="gl-mb-5 md:gl-flex gl-items-center gl-justify-end">
        <InputSearch onChange={onSearch} />
      </div>

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
          {!isFirstLevel && !searchVal ? (
            <>
              <div
                className="gl-mb-5 gl-inline-flex gl-items-center gl-cursor-pointer gl-text-gray"
                onClick={onClickBack}>
                <i className="fas fa-chevron-left gl-inline-block gl-mr-2 gl-fa" />
                <div>Indietro</div>
              </div>

              <div className="gl-text-xl gl-text-primary gl-mb-5 gl-font-semibold">
                {activeTitle}
              </div>
            </>
          ) : null}

          {values(activeCategories).length > 0 ? (
            values(activeCategories)
              .sort(sortByName)
              .map((el, i) => {
                return (
                  // eslint-disable-next-line react/no-array-index-key
                  <div key={`${el.id} ${i}`} className="gl-mb-3">
                    <GlossaryRow
                      id={el.id}
                      name={el.name}
                      iconCollapse={config.fa_icon_collapse}
                      iconCollapseIn={config.fa_icon_collapse_in}
                      onClickRow={() => onClickRow(el)}
                      open={el.id === activeGlossary?.id}
                      content={
                        el.id === activeGlossary?.id ? (
                          <div
                            className="unreset-tw font-sans"
                            dangerouslySetInnerHTML={{
                              __html: el.body,
                            }}
                          />
                        ) : (
                          <div
                            className="unreset-tw font-sans"
                            dangerouslySetInnerHTML={{
                              __html: 'Non ci sono dati',
                            }}
                          />
                        )
                      }
                      firstLetterItemId={
                        values(activeCategories).filter(
                          (item) => item.name?.[0] === activeLetter
                        )?.[0]?.id
                      }
                      startsWithLetter={startsWithLetter}
                    />
                  </div>
                )
              })
          ) : (
            <div>Non ci sono dati</div>
          )}
        </div>
      </div>
    </div>
  )
}

Glossary.propTypes = {
  glossaryId: PropTypes.string.isRequired,
}

export default memo(Glossary)
