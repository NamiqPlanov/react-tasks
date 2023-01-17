import Counter from "./counter"

function Webpage(){
    return(
        
        <div><header>
            <h1 style={{
                margin:0,
                backgroundColor: 'chocolate',
                width: 1367,
                height: 150,
                color: 'darkblue'
            }}>This is the header of webpage</h1>
        </header>
        <main style={{
            marginTop:10,
            width:1367,
            height:160,
            backgroundColor:'gray'
        }}>
         <Counter/>
        </main>
        <footer style={{
            backgroundColor: 'steelblue',
            height: 320,
            marginTop:6,
            display: 'flex',
            justifyContent: 'center',
            alignItems:'center'

        }}>
           <h1>This is end! Thank you!</h1>
        </footer>
        </div>
    )
}

export default Webpage