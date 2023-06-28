

import styles from './Example.module.css'
import { useState, React } from 'react';

const Example = () => {

    const [char, setchar] = useState('');

    function lol(e) {
        e.preventDefault();
        setchar(e.target.value.split(/\s+/).length - 1);








        //console.log(entireInput.split(' ').length)
    }


    return (
        <div className={styles.box}>

            <div className={styles.card}>
                <h2>Responsive paragraph word counter</h2>
                <div>
                    <input onChange={(e) => { lol(e) }} type='text' className={styles.inputBox}>
                    </input>
                </div>
                <div className={styles.info}>
                    <div>Word Count = {char}</div>

                </div>
                <p>This is a word counter on which I am currently making some updates</p>
                <p>This Works and functions properly but still can be made much better and is an good opputurnity to practise JS and React</p>
                



            </div>



        </div>

    )
}

export default Example;