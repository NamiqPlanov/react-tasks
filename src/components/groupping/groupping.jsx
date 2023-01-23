import styles from './groupping.module.css'
import ali from './img/ali.jpg'
import bedbext from './img/bedbext_developer.jpg'
import duman from './img/duman.jpg'
import oyrenen from './img/js_oyrenen_shexs.jpg'
import novxani from './img/novxani.jpg'
import qarli from './img/qarli_daglar.jpg'
import qoca from './img/qoca_cinar.jpg'
import visselka from './img/visselka.jpg'

function Groupping(){
    return(
    
        <div className={styles.container}>
            <div>
            <img src={ali}/>
            <h2>sekil1</h2>
            <p>hello</p>
            </div>
            <div>
            <img  src={duman}/>
            <h2>sekil2</h2>
            <p>hello</p>
            </div>
            <div>
            <img  src={bedbext}/>
            <h2>sekil3</h2>
            <p>hello</p>
            </div>
            <div>
            <img  src={oyrenen}/>
            <h2>sekil4</h2>
            <p>hello</p>
            </div>
            <div>
            <img  src={novxani}/>
            <h2>sekil5</h2>
            <p>hello</p>
            </div>
            <div>
            <img  src={qarli}/>
            <h2>sekil6</h2>
            <p>hello</p>
            </div>
            <div>
            <img  src={qoca}/>
            <h2>sekil7</h2>
            <p>hello</p>
            </div>
            <div>
            <img  src={visselka}/>
            <h2>sekil8</h2>
            <p>hello</p>
            </div>
         </div>
            
            
        
    
    )
}
export default Groupping;