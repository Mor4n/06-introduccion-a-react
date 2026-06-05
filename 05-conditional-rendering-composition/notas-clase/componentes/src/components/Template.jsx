import React from 'react'

function Template({templateName,children}) {

    switch (templateName) {
        case 'profesional':
            return(<>
                    <div style={{border:'1px solid black', padding:'10px', fontFamily:'Arial'}}>
                        {children}
                    </div>
            </>)
            break;
    
        case 'casual':
            return(<>
                                <div style={{border:'1px solid black', padding:'10px', fontFamily:'Comic Sans MS'}}>
                                    <p>CASUAL</p>
                                    {children}
                                    <p>CASUAL</p>
                                </div>
                        </>)
            break;
        default:
            return(<>
                    <div style={{border:'1px solid black', padding:'10px', fontFamily:'Times New Roman'}}>
                        {children}
                    </div>
            </>)
            break;
            break;
    }
}

export default Template