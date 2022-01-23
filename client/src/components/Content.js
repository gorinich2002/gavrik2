import './Content.css'
function Content(props){



    return(
        <main className='Content'>
            {props.children}
        </main>
    )
}


export default Content;