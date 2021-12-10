import React from 'react'
import defaultNewsImage from '../../../assets/defaultNewsImage.png'
import './NewsBar.css'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
function NewsBar() {
  const listnewsbar = useSelector(state => state.news.listnews)
  return (
    <div style={{ width: '100%', paddingBottom: '80px' }}>
      <div className="title-news" style={{ marginTop: '120px' }}>
        <h1>
          <span>TIN TỨC</span>
        </h1>
      </div>
      <div style={{ width: '90%', margin: '0 auto' }}>
        <div className="NewsBar">
          {listnewsbar
            ? listnewsbar.map(news => (
                <div key={news.slug} className="container-NewsBar">
                  <div className="container-NewsBar-img">
                    {<img src={news.thumbnail || defaultNewsImage} alt="news" />}
                  </div>

                  <div>
                    <Link className="link" to={`/blog/${news.slug}`}>
                      <span style={{ fontWeight: '600', color: 'red' }}>{news.title}</span>
                    </Link>
                    <br />
                    <span>{news.description}</span>
                  </div>
                </div>
              ))
            : null}
        </div>
        <Link to="/blog/slug">
          <span style={{ float: 'right', fontSize: '20px', fontWeight: '700', cursor: 'pointer' }}>Xem thêm...</span>
        </Link>
      </div>
    </div>
  )
}

export default NewsBar