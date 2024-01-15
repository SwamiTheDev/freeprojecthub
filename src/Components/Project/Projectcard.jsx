import style from '../Project/Projectcard.module.css'
import Showbtn from '../Readmore Button/showbtn';
import Tag from '../tag/tag';

export default function ProjectCard(props) {
    return (
        <>

            <div className={style.cards}>
                <div class="card bg-light border-0 rounded-0">
                    <div className='row __img_container'>
                        <div className="col-4 col-sm-12 col-md-12" >
                            <div className={style.leftcol}>
                                <img className={style.card_image} src={props.img} alt="Title" />
                            </div>
                        </div>
                        <div className="col-8 col-sm-12 col-md-12">
                            <div className={style.rightcol}>
                                <Tag className={style.tag} tagname={props.category} />
                                <h4 className={style.title}>{props.title}</h4>
                                <p className={style.text}>{props.text}</p>
                                <div className='mx-auto d-flex justify-content-center'>
                                    <button className={style.btn} onClick={props.Click} style={{ border: 'none', padding: 'none', background: 'transparent' }}>
                                        <Showbtn btnname='Read more' />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}