import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        let { tittle, description, imgurl, newsUrl, author, date, source } = this.props;
        return (
            <div className='my-3'>
                <div className="card" style={{ width: "18rem" }}>
                    <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left : "90%" , zIndex:"1"}}>
                        {source}
                    </span>
                    <img src={!imgurl ? "https://cdn.benzinga.com/files/images/story/2023/08/20/shiba_inu.jpg?width=1200&height=800&fit=crop" : imgurl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{tittle}</h5>
                        <p className="card-text">{description}</p>
                        <p class="card-text"><small class="text-muted">by {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem

