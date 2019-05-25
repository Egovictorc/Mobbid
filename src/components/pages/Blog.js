import React, { useEffect } from 'react';

const Blog = (props) => {
// console.log(props.histroy)

    useEffect( ()=> {
        setTimeout(()=>{
            props.history.push("/")
        }, 30000)
    },[])

    return (
        <div className="blog">
            <h1 className="blog__heading"> our blog</h1>
            <div className="relax">
        <span className="relax__rotate" />
        <p>Relax</p>
        <p>we'r still organizing this page content</p>
      </div>
        </div>
    )
}

export default Blog;