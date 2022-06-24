export default function Page(props) {
    return (
        <div className='page'>
            <div className='fill'>
                {props.children}
            </div>
        </div>
    )
}