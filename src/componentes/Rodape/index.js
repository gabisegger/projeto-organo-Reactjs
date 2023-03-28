import './Rodape.css'

const Rodape = () => {
    return(
        <>
            <footer className="Rodape">
                <div className="redesSociais">
                    <a><img src="/imagens/facebook.png" alt="Facebook"/></a>
                    <a><img src="/imagens/twitter.png" alt="Twitter"/></a>
                    <a><img src="/imagens/instagram.png" alt="Instagram"/></a>
                </div>
                <img src="/imagens/Logo.png" alt="Logo Organo"/>
                <p className="creditos">Desenvolvido por Alura.</p>
            </footer>
        </>
    )
}

export default Rodape