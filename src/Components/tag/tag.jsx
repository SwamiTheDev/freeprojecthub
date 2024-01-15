export default function Tag(props) {
    return (
        <>
            <p style={{ color: 'white', padding: '1px 5px ', border: 'none', backgroundColor: 'hsl(5, 85%, 63%)', width: 'fit-content', fontSize: '14px', fontWeight: '600' }}>#{props.tagname}</p>
        </>
    )
}