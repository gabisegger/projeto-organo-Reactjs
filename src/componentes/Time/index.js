import Colaborador from '../Colaborador'
import './Time.css';

const Time = ({time,  colaboradores, aoDeletar}) => {

    console.log(time, colaboradores, aoDeletar)
    const css = {borderColor: time.corPrimaria}

    return (
        colaboradores.length > 0 && <section className="time" style={{ backgroundColor: time.corSecundaria}}>
            <h3 style={css}>{colaboradores.nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map((colaborador, indice )=> {
                    return <Colaborador key={indice} colaborador={colaborador} corDeFundo={time.corPrimaria} aoDeletar={aoDeletar}/>;
                })}
            </div>    
        </section>
    )
} 

export default Time