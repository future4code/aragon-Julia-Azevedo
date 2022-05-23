import { Titulo, MainHeader } from "./styles";


    function Header(props) {
        return(
            <MainHeader>
                <Titulo>AstroMatch</Titulo>

                {props.page === "profiles" ? 
                    <button onClick={props.goToMatchesPage}>Ver matches</button> 
                    : <button onClick={props.goToProfilesPage}>Ver perfis</button>
                }   
            </MainHeader>
        );
    };
    
    export default Header;