import {useState, useEffect} from 'react'

import {copy, linkIcon, loader, tick} from "../assets"

import { useLazyGetSummaryQuery } from '../Sevices/article'

const Demo = () => {
  const [article, setArticle] = useState({
    url: '',
    summary: ''
  })
  // const [allArticles, setAllArticles] = useState([])

const [getSummary, {error, isFetching}] = useLazyGetSummaryQuery()

// useEffect(() => {
//   const articleFromLocalStorage = JSON.parse(localStorage.getItem('articles')
//   )

//   if(articleFromLocalStorage) {
//     setAllArticles(articleFromLocalStorage)
//   }
  
// }, [])


  const handleSubmit = async (e) => {
     e.preventDefault()

    const {data} = await getSummary({ articleUrl: article.url})

    if(data?.summary) {
      const newArticle = {...article, summary: data.summary}

      // const updateAllArticles = [newArticle, ...allArticles]

      setArticle(newArticle)
      // setAllArticles(updateAllArticles)

      // localStorage.setItem('articles', JSON.stringify(updateAllArticles))

      console.log(newArticle)
    }

  }
  return (
    <section className="mt-16 w-full max-w-xl">
      {/* search */}
      <div className="flex flex-col w-full gap-2">
        <form className='relative flex justify-center items-center' onSubmit={handleSubmit}>
          <img src={linkIcon} alt="linkicon" className='absolute left-0 my-2 ml-3 w-5' />

          <input type="url"  placeholder='Enter a URL' value={article.url}
           onChange={(e) => setArticle({...article, url: e.target.value})}
            required className='url_input peer' />

          <button type="submit"
          className='submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700'>
           ENT
          </button>
        </form>

        {/* Browse URL History */}

        {/* <div className="flex flex-col gap-1 max-h-60 overflow-y-auto">
          {allArticles.map((item, index) => (
            <div key={`link-${index}`}
            onClick={() => setArticle(item)}
            className='link_card'>
             <div className="copy_btn">
              <img src={copy} alt="copy_icon" className='w-[40%] h-[40%] object-contain' />
             </div>
            </div>
          ))}
        </div> */}
      </div>

      {/* Display result */}
    </section>
  )
}

export default Demo