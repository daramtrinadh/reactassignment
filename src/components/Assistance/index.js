import './index.css'
const items=[
    {
        imageUrl:'https://indigolearn.s3.ap-south-1.amazonaws.com/website/pp_resume_icon.png',
        text:'Resume Building',
        content:'1FIN provides professional guidance to help you create an effective resume to help you create a lasting impression.'

    },
    {
        imageUrl:'https://indigolearn.s3.ap-south-1.amazonaws.com/website/pp_career_icon.png',
        text:'Career Counselling',
        content:'We provide career counselling to conducting mock interviews and aptitude tests – we will assist you at every step, all the way, we make you job ready'

    },
    {
        imageUrl:'https://indigolearn.s3.ap-south-1.amazonaws.com/website/pp_job_icon.png',
        text:'Jobs',
        content:'We will give you an edge over others with our direct corporate affiliations which will ensure that you are placed right.'

    }
]
const Assistance=()=>(
    <div className="choose-us-section">
        <h1 className='choose-text'>100% Placement Assistance by 1FIN<span><hr className='hr'/></span></h1>
        <div className='choose-section'>
        {items.map((eachItem)=>(
            <div className='choose-item'>
                <img src={eachItem.imageUrl} alt={eachItem.text} className='image'/>
                <button className='choose-btn'>{eachItem.text}</button>
                <p>{eachItem.content}</p>
            </div>
        ))}
        </div>
    </div>

)
export default Assistance