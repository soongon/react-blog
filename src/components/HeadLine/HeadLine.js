import React from 'react';

function HeadLine({post}) {
    console.log(post);
    //const {name, username, phone} = post;
    //console.log(name);
    return (
        <div className="jumbotron p-4 p-md-5 text-white rounded bg-dark">
            <div className="col-md-6 px-0">
                <h1 className="display-4 font-italic">
                    {post.username ? post.username : 'noname'}</h1>
                <p className="lead my-3">{post.name}</p>
                <p className="lead mb-0"><a href="#" className="text-white font-weight-bold">Continue reading...</a></p>
            </div>
        </div>
    );
}

export default HeadLine;