import React from 'react';

function PostList(props) {
    console.log(props.posts);
    const posts = props.posts;
    let detailPost = undefined;

    const handleGoDetail = (e) => {
        e.preventDefault();
        console.log(e, '링크를 클릭했어요..');
        console.log(' from 이벤트 핸들러');
    }
    
    return (
        <div className="row mb-2">
            {posts.map((post, index) => 
                <div className="col-md-6" key={index}>
                    <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div className="col p-4 d-flex flex-column position-static">
                            <strong className="d-inline-block mb-2 text-primary">{post.email}</strong>
                            <h3 className="mb-0">{post.name}</h3>
                                <div className="mb-1 text-muted">{post.phone}</div>
                                    <p className="card-text mb-auto">
                                        {post.company.name}<br/>
                                        {post.company.catchPhrase}<br/>
                                        {post.company.bs}
                                    </p>
                                    <div className="row">
                                        <div className="col">
                                            <a href="#" onClick={handleGoDetail} className="stretched-link">상세보기</a>
                                        </div>
                                        <div className="col">
                                            <button type="button" class="btn btn-info">상세보기</button>
                                        </div>
                                    </div>
                                </div>
                                
                            <div className="col-auto d-none d-lg-block">
                            <svg className="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" ariaLabel="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                        </div>
                    </div>
                    
                    {detailPost && (
                        <div>
                            <p>{detailPost.name}</p>
                            <p>{detailPost.username}</p>
                            <p>{}</p>
                            <p>{}</p>
                            <p>{}</p>
                        </div>
                    )}
                    
                </div>
            )}
        </div>    
    );
}

export default PostList;