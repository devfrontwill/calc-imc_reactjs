import React from 'react';
import styles from './style.module.scss';

const PaginaInicial = () => {
    return (
        <div className={styles.container}>
            <h1>Calculadora IMC</h1>
            <span>Vamos calcular seu imc</span>

            <div className={styles.area_input}>
                <input 
                type="text"
                placeholder="Peso em (kg) Ex: 90" >
                </input>

                <input 
                type="text"
                placeholder="Peso em (cm) Ex: 190" >
                </input>

                <button>
                    Calcular
                </button>
            </div>

            <h2>Seu imc foi 25, você está abaixo do peso!</h2>
        </div>
    )
}

export default PaginaInicial;