

import styles from './Example.module.css'
import { useState,React } from 'react';

const Example = () => {

    const [char, setchar] = useState('');

    function lol(e) {
        e.preventDefault();
        setchar(e.target.value.split(/\s+/).length-1);
        

      
        



        
       //console.log(entireInput.split(' ').length)
    }


    return (
        <div className={styles.box}>

            <div className={styles.card}>
                <h2>Responsive paragraph word counter</h2>
                <div>
                    <input onChange={(e)=> {lol(e)}} type='text' className={styles.inputBox}>
                    </input>
                </div>
                <div className={styles.info}>
                    <div>Word Count = {char}</div>
                 
                </div>

                
                
                
            </div>



        </div>
        
    )
}

export default Example;