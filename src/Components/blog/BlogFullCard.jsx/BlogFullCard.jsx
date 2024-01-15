import MarkdownViewer from "../../markdownviewer/MarkdownViewer"
import style from './BlogFullCard.module.css'

export default function BlogFullCard(props) {
    return (
        <>
            <div className="containers">
                <div className={style.container}>
                    <button onClick={props.onBack}>Back To Blogs</button>
                    <p>{props.category}</p>
                    <MarkdownViewer mdFilePath={props.readme} />
                    {/* <MarkdownViewer filename={props.} /> */}
                    <button onClick={props.onBack}>Back To Projects</button>
                    <div className="container m-3 p-3">
                    </div>
                </div>
            </div>
        </>
    )
}