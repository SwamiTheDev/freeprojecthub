import style from './BlogLatestCard.module.css'

export default function BlogLatestCard(props) {
    return (
        <>
            {/* <h5>Latest Blog</h5> */}
            <div className={style.cards}>
                <div class="card" style={{ backgroundColor: 'hsl(240, 100%, 5%)' }}>
                    <div className={style.cardbody}>
                        <h4 className={style.title}>{props.title}</h4>
                        <p className={style.text}>{props.lastestcontent}</p>
                    </div>
                </div>

            </div>
        </>
    )
}