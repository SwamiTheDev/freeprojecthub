import Lottie from 'react-lottie';
import pagenotfound from '../../assets/lotties/404.json';
import style from './PageNotfound.module.css'

export default function PageNotFound() {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: pagenotfound,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    return (
        <>
            <div className={style.lottie}>
                <Lottie
                    options={defaultOptions}
                />
            </div>

        </>
    )
}