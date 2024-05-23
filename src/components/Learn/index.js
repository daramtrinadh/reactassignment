import './index.css'

const Learn=()=>(
    <div className='learn-section'> 
        <h1 className='learn-text'>What will you Learn in ACCA?<span><hr className='hr-learn'/></span></h1>
        <div className="learn-item-section">
            <div className='eachLearnItem'>
                <h3 className='learn-head'>Knowledge Level</h3>
                <ul>
                    <li>Business and Technology (BT)</li>
                    <li>Management Accounting (MA)</li>
                    <li>Financial Accounting (FA)</li>
                </ul>
                <div className='papers'>
                    <p>3 papers</p>
                </div>
            </div>
            <div className='eachLearnItem'>
                <h3 className='learn-head'>Skill Level</h3>
                <ul>
                    <li>Corporate and Business Law (LW)</li>
                    <li>Performance Management (PM)</li>
                    <li>Taxation (TX)</li>
                    <li>Financial Reporting (FR)</li>
                    <li>Audit and Assurance (AA)</li>
                    <li>Financial Management (FM)</li>
                </ul>
                <div className='papers'> 
                    <p>6 papers</p>
                </div>
            </div>
            <div className='eachLearnItem'>
                <h3 className='learn-head'>Professional Level</h3>
                <h3 className='inside-title'>Compulsory</h3>
                <ul>
                <li>SBL - Strategic Business Leader</li>
                <li>SBR - Strategic Business Reporting</li>
                </ul>
                <h3 className='inside-title'>Two out of the following</h3>
                <ul>
                    <li>Advanced Financial Management (AFM)</li>
                    <li>Advanced Performance Management (APM)</li>
                    <li>Advanced Taxation (ATX)</li>
                    <li>Advanced Audit and Assurance (AAA)</li>
                </ul>
                <div className='papers'>
                    <p>4 papers</p>
                </div>
            </div>
        </div>
    </div>
)
export default Learn