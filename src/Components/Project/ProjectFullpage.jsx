import MarkdownViewer from "../markdownviewer/MarkdownViewer"
import style from './ProjectFullpage.module.css'

export default function ProjectFullPage(props) {
    return (
        <>
            <div className="containers">
                <div className={style.container}>
                    <button onClick={props.onBack}>Back To Projects</button>
                    <h1 style={{ display: 'none' }}>{props.title}</h1>
                    <p>{props.category}</p>
                    <MarkdownViewer mdFilePath={props.readme} />
                    {/* <MarkdownViewer filename={props.} /> */}
                    <button onClick={props.onBack}>Back To Projects</button>
                    <a href={props.githublink} target="__blank"> </a>
                    <p>{props.id}</p>
                </div>
            </div>
        </>
    )
}