import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

const PortfolioCard = ({ project }) => {
    const { image, title, description, tags, liveLink } = project
    return (
        <>
            <div className='flex flex-col'>
                {/* <div className="max-w-sm bg-white border border-gray-200 rounded-2xl ">

                    <div className='w-full'>
                        <img className="w-full" src={image} alt="" />
                    </div>

                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                    </div>
                </div> */}
               
                <div className='border border-blue-900 bg-gradient-to-r from-blue-900 to-indigo-950 text-bodytext font-Outfit  rounded-2xl flex-grow space-y-[6px]'>
                <img className='md:h-[240px] rounded-t-2xl object-cover w-full' src={image} alt="projectImg" />
                    <div className='p-4'>
                    <h4 className='font-semibold text-lg md:text-xl text-bodytext'>{title}</h4>
                    <p className='text-sm md:text-base mt-2'>{description}</p>
                    <div className='flex gap-2 mt-2'>
                        {
                            tags?.map((tag, idx) => {
                                return <p
                                    key={idx}
                                    className='px-2 py-1 bg-blue-800/80 text-gray-200 text-xs rounded'
                                >{tag}</p>
                            })
                        }
                    </div>
                    <div className='w-[115px] mt-4'>
                        <Link to={liveLink} className='text-white hover:text-textHover font-semibold transition duration-400 group flex flex-col mt-3'>View Project 🡭{" "}
                            <span className="mt-[2px] h-[1px] w-[0px] rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 transition-all duration-500 group-hover:w-full"></span></Link>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}
PortfolioCard.propTypes = {
    project: PropTypes.shape({
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        tags: PropTypes.arrayOf(PropTypes.string),
        liveLink: PropTypes.string.isRequired
    }).isRequired
};


export default PortfolioCard