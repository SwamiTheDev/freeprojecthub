import { useState } from 'react';
import style from './ServiceCard.module.css'
export default function ServiceCard(props) {

    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
        setIsHover(true);
    };

    const handleMouseLeave = () => {
        setIsHover(false);
    };
    const boxStyle = {
        transition: '1s',
        backgroundColor: isHover ? ' hsl(234.00000000000003, 5.050505050505047%, 61.1764705882353%)' : ' #f8f9fa',
        color: isHover ? 'red' : 'green',
    };

    return (
        <>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 col-xxl-3 " >
                <div className="card border-0 " style={boxStyle}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>
                    <img src={props.src} alt="" className={style.__img} />
                    <h5 className={style.service_title} style={{ letterSpacing: '1px ' }}>{props.title}</h5>
                </div>
            </div>

        </>
    )
}