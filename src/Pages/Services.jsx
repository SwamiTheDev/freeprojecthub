import ServiceCard from "../Components/ServiceCard";
import projecticon from '../assets/Images/idea.png';
import tutorialicon from '../assets/Images/article.png';
import productsicon from '../assets/Images/recommendation.png';
import blogicon from '../assets/Images/blog.png';
import style from './Service.module.css'

export default function ServiceSection() {

    return (
        <>
            <a href="" style={{ textDecoration: 'none' }}>

                <div className="container">
                    <div >
                        <div className="row bg-light  pt-3 pb-3 __service_card">
                            <ServiceCard src={projecticon} title='Projects' />
                            <ServiceCard src={tutorialicon} title='Tutorial ' />
                            <ServiceCard src={productsicon} title='Products' />
                            <ServiceCard src={blogicon} title='Blogs' />
                        </div>
                    </div>
                </div>
            </a>
        </>
    )

}