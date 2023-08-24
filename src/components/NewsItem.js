import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        let { title, description, imgurl, newsUrl, author, date, source } = this.props;
        return (
            <div className='my-3'>
                <div className="card">
                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        position: 'absolute',
                        right: 0
                    }}>
                    <span className="badge rounded-pill bg-danger" >{source}</span>
                    </div>
                </div>
                <img src={!imgurl ? "https://cdn.benzinga.com/files/images/story/2023/08/20/shiba_inu.jpg?width=1200&height=800&fit=crop" : imgurl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-muted">by {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                    <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
                </div>
            </div>
        )
    }
}

export default NewsItem

