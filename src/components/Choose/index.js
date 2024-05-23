import './index.css'
const itemsArray=[
    {
        imageUrl:'https://www.indigolearn.com/media/images/ca_concept.png',
        text:'Expert Faculty',
        content:'Our qualified Faculty with significant practical experience guide students every step of the way'
    },
    {
        imageUrl:'https://www.indigolearn.com/media/images/ca_top_faculties.png',
        text:'Complete Success Package',
        content:'Leading Exam Prep Destination with Video classes, Live sessions, Doubt resolution Forums, MCQs, Practice tests, Webinars.'
    },
    {
        imageUrl:'https://www.indigolearn.com/media/images/placement.png',
        text:'Placements',
        content:'Resume building workshops, mock interviews and placement drives will help you impress the top employers and get your Dream Job.'
    }
]
const contentArray=[
    {
        contentImage:'https://indigolearn.s3.ap-south-1.amazonaws.com/website/pp_book_icon.png',
        contentText:'Levels',
        contentDescription:'Three (13 papers)'
    },
    {
        contentImage:'https://indigolearn.s3.ap-south-1.amazonaws.com/website/pp_calendar_icon.png',
        contentText:'Duration',
        contentDescription:'6-30 months'
    },
    {
        contentImage:'https://indigolearn.s3.ap-south-1.amazonaws.com/website/pp_exam_icon.png',
        contentText:'Exams',
        contentDescription:'Quarterly (Online)'
    },
    {
        contentImage:'https://www.indigolearn.com/media/CFAPageImages/CFA_COURSE_FEATURE_1.svg',
        contentText:'Exemptions',
        contentDescription:'Upto 9 papers'
    }
]
const Choose=()=>(
    <div className="choose-us-section">
        <h1 className='choose-text'>Why Choose Us?<span><hr className='hr'/></span></h1>
        <div className='choose-section'>
        {itemsArray.map((eachItem)=>(
            <div className='choose-item'>
                <img src={eachItem.imageUrl} alt={eachItem.text} className='image'/>
                <button className='choose-btn'>{eachItem.text}</button>
                <p>{eachItem.content}</p>
            </div>
        ))}
        </div>
        <div className='content-section'>
            {contentArray.map((eachItem)=>(
                <div className='eachContent'>
                    <img src={eachItem.contentImage} alt={eachItem.contentText} className='content-image'/>
                    <div className='content-description'>
                        <p>{eachItem.contentText}</p>
                        <p >{eachItem.contentDescription}</p>     
                    </div>
                </div>
            ))}


        </div>
        

    </div>

)
export default Choose