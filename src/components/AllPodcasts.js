import useMediaQuery from '../utils/useMediaQuery'
import { useEffect, useState } from 'react'
import styles from '../css/AllPodcasts.module.css'
import podcasts from '../utils/podcastInfo'
import Podcast from './Podcast.js'
import PodcastMobile from './PodcastMobile'

import leftArrow from '../assets/leftArrow.svg'
import rightArrow from '../assets/rightArrow.svg'

const countPages = isLaptop => {
  let podcastCount = podcasts.length
  let pages = 0
  if (isLaptop) {
    pages = Math.ceil(podcastCount / 6)
  } else {
    pages = Math.ceil(podcastCount / 3)
  }

  const pageArr = []
  for (let i = 0; i < pages; i++) {
    pageArr.push(i)
  }

  return pageArr
}

const AllPodcasts = props => {
  const isDesktop = useMediaQuery('(min-width: 600px)')
  const isLaptop = useMediaQuery('(min-width: 1392px)')
  const [pageTotal, setPageTotal] = useState(countPages(isLaptop))
  const [pageNum, setPageNum] = useState(0)

  useEffect(() => {
    const newSize = countPages(isLaptop)
    setPageTotal(newSize)
    if (pageNum + 1 > newSize.length) {
      setPageNum(pageNum - 1)
    }
  }, [isLaptop, pageNum])

  return (
    <>
      {isDesktop ? (
        <div className={styles.container}>
          <div className={styles.height}>
            <div className={styles.innerContainer}>
              {podcasts
                .slice(
                  pageNum * (isLaptop ? 6 : 3),
                  pageNum * (isLaptop ? 6 : 3) + (isLaptop ? 6 : 3)
                )
                .map((podcast, i) => (
                  <div className={styles.podcast}>
                    <Podcast details={podcast} />
                  </div>
                ))}
            </div>
          </div>

          <div className={styles.pageSelector}>
            <button
              id={styles.leftArrow}
              className={styles.arrow}
              onClick={() => {
                pageNum > 0 && setPageNum(pageNum - 1)
              }}
            >
              <img src={leftArrow} alt="Left Arrow"></img>
            </button>
            <div className={styles.options}>
              {pageTotal.map(page => (
                <button
                  className={pageNum === page ? styles.btnActive : styles.btn}
                  onClick={() => {
                    setPageNum(page)
                  }}
                >
                  <p className={styles.btnText}>{page + 1}</p>
                </button>
              ))}
            </div>
            <button
              id={styles.rightArrow}
              className={styles.arrow}
              onClick={() => {
                pageNum < pageTotal.length - 1 && setPageNum(pageNum + 1)
              }}
            >
              <img src={rightArrow} alt="Right Arrow"></img>
            </button>
          </div>
        </div>
      ) : (
        <div className={styles.mobileContainer}>
          {podcasts.slice(0, 4).map((podcast, i) => (
            <div className={styles.mobilePodcast}>
              <PodcastMobile details={podcast} />
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default AllPodcasts
