import Header from './header'

export default function Page(props) {
    return (
        <div className='flex-1 flex-col justify-center items-center'>
            <Header></Header>
            <div className='container bg-light-olive'>
                {props.children}
            </div>
        </div>
    )
}