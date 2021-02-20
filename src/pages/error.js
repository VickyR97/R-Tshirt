import React from 'react'

export default function error() {
    return (
        <div className="container-fluid p-0">
            <div className="row justify-content-center vh-100 align-items-center m-0">
                <div className="col-12 text-center pb-5 mb-5">
                    <img src="http://blog.archive.org/wp-content/uploads/2013/10/nomore404_l.png" alt="404" height="200" width="200"></img>
                    <h3 class="font-weight-bold">PAGE NOT FOUND</h3>
                    <p>The page you are looking for might been removed.</p>
                </div>
            </div>
        </div>
    )
}
