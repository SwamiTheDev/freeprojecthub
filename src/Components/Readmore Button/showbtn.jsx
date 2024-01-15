import style from './showbtn.module.css'

export default function Showbtn({ btnname }) {
    return (
        <>
            <a className={style.fancy}  >
                <span className={style.text} >{btnname}</span >
                <span className={style.bottom_key_1}  ></span >
                <span className={style.bottom_key_2}  ></span >
                <span className={style.top_key} ></span>
            </a >

        </>
    )
}