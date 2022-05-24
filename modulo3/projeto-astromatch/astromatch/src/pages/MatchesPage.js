import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_CLIENT, BASE_URL } from '../constants/urls';
import { TituloPerfis, Container } from './styles';

function MatchesPage() {

    const [matches, setMatches] = useState(undefined);

    useEffect(() => {
        getMatches();
    }, []);

    const getMatches = () => {

        const url = `${BASE_URL}/${API_CLIENT}/matches`;

        axios.get(url)
            .then((res) => {
                setMatches(res.data.matches);
            })
            .catch((err) => {
                console.log(err.message);
            });
    };

    const allMatches = matches && matches.map((match) => {
        return(
            <Container key={match.id}>
                <img 
                    src={match.photo}
                    alt={`foto de ${match.name}`}
                    height={"100px"}
                ></img>
                <span>{match.name}</span>
                <hr />
            </Container>
        );
    });

    return (
        <>
            <TituloPerfis>Matches</TituloPerfis>
            {allMatches}
        </>
    );
};

export default MatchesPage;