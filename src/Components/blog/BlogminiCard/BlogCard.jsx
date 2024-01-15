import Showbtn from '../../Readmore Button/showbtn'
import style from './BlogCard.module.css'
import Tag from '../../tag/tag'

export default function BlogCard(props) {
    return (
        <>
            <div className={style.cards}>
                <div className="card bg-light border-0"  >
                    <div className="row">
                        <div className="col col-sm-3 col-md-3 col-xl-4 d-flex align-items-center ">
                            <div className={style.leftcard}>
                                <img src={props.coverimg} className={style.img} />
                            </div>
                        </div>

                        <div className="col col-sm-9 col-md-9 col-xl-8">
                            <div className={style.rightcard}>
                                <div className="container ">
                                    <Tag className={style.tag} tagname={props.tagname} />
                                    <h4 className={style.title}> {props.title} </h4>
                                    <p className={style.text}>{props.text}</p>
                                </div>
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