import './Rodape.css'

const Rodape = (props) => {
    return(
        <>
            <footer className="footer">
                <img className="background" src="/imagens/fundoFooter.png" alt="Background"/>
                <div className="redesSociais">
                    <a href={props.facebook}><img src="/imagens/facebook.png" alt="Facebook"/></a>
                    <a href={props.twitter}><img src="/imagens/twitter.png" alt="Twitter"/></a>
                    <a href={props.instagram}><img src="/imagens/instagram.png" alt="Instagram"/></a>
                </div>
                <img src="/imagens/Logo.png" alt="Logo Organo"/>
                <p className="creditos">Desenvolvido por Alura.</p>
            </footer>
        </>
    )
}

export default Rodape