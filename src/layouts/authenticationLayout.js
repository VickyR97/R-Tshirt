import React from 'react'

function AuthenticationLayout({children}) {
    return (
        <div className="container-fluid p-0">
            <div className="row-size row justify-content-center align-items-center m-0 pt-5">
            
                    <div className="column col-sm-12 col-md-3 mt-5 ">
                        {children}
                    </div>
                </div>
            </div>
    )
}

export default AuthenticationLayout
