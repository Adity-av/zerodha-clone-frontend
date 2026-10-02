import React from 'react'
function Hero() {
    return ( 
        <div className="container-fluid" id='supportHero'>
            <div className="pt-5" id='supportWrapper'>
                <h4>Support Portal</h4>
                <a href="https://support.zerodha.com/tickets/">Track Tickets</a>
            </div>
            <div className="row pb-5 m-3">
                <div className="col-6 p-5">
                    <h1 className='fs-3 pb-2'>Search for an answer or browse help topics to create a ticket</h1>
                    <input placeholder='Eg. how do I activate F&O ' className='mb-3'/><br/>
                    <a href='https://zrd.sh/signup'>Track account opening</a>
                    <a href='https://zrd.sh/segment-activation'>Track segment activation</a>
                    <a href='https://zrd.sh/latest-leverage'>Intraday margins</a>
                    <a href='https://zrd.sh/kite-manual'>Kite user manual</a>
                    <a href='https://support.zerodha.com/category/your-zerodha-account/your-profile/ticket-creation/articles/how-do-i-create-a-ticket-at-zerodha'>Learn how to create a ticket</a>
                </div>
                <div className="col-6 p-5 mt-5 mb-5">
                    <h1 className='fs-3'>Features</h1>
                    <ol>
                        <li>
                            <a href='https://zerodha.com/marketintel/bulletin/'>Additional exposure margin on securities under MWPL</a>
                        </li>
                        <li>
                            <a href='https://zrd.sh/latest-leverage'>Latest Intraday leverages and Square-off timings</a>
                        </li>
                    </ol>
                </div>
            </div>
      </div>
     );
}

export default Hero;
