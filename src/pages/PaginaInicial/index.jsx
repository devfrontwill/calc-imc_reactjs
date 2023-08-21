import { useState } from 'react';
import styles from './style.module.scss';

const PaginaInicial = () => {
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [mensagem, setMensagem] = useState('');

    function calcularIMC() {
        const alt = altura / 100;
        const imc = peso / (alt * alt)

        if (imc < 18.6) {
            setMensagem("Você está abaixo do peso ! Seu IMC é de: " + imc.toFixed(2))

        } else if (imc >= 18.6 && imc < 24.9) {
            setMensagem("Você encontra-se no peso ideal ! Seu IMC é de: " + imc.toFixed(2))

        } else if (imc >= 24.9 && imc < 29.9) {
            setMensagem("Você está acima do peso ! Seu IMC é de: " + imc.toFixed(2))

        } else if (imc >= 29.9 && imc < 34.9) {
            setMensagem("Você está com Obesidade grau(1) ! Seu IMC é de: " + imc.toFixed(2))

        } else if (imc >= 34.9 && imc < 40) {
            setMensagem("Você está com Obesidade grau(2) ! Seu IMC é de: " + imc.toFixed(2))

        } else if (imc > 40) {
            setMensagem("Você está com Obesidade grau(3) ! Seu IMC é de: " + imc.toFixed(2))
        }

        setPeso('');
        setAltura('');

    }

    return (
        <div className={styles.container}>
            <h1>Calculadora IMC</h1>
            <span>Vamos calcular seu imc:</span>

            <div className={styles.area_input}>

                <input
                    type="text"
                    placeholder="Peso em (kg) Ex: 90"
                    value={peso}
                    onChange={(e) => setPeso(e.target.value)} >
                </input>

                <input
                    type="text"
                    placeholder="Altura em (cm) Ex: 190"
                    value={altura}
                    onChange={(e) => setAltura(e.target.value)} >
                </input>



                <button onClick={calcularIMC}>
                    Calcular
                </button>
            </div>

            <h2>{mensagem}</h2>           
            

        </div>
    )
}

export default PaginaInicial;