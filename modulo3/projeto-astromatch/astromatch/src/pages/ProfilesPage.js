import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_CLIENT, BASE_URL } from '../constants/urls';
import { TituloPerfis, Container } from "./styles";


function ProfilesPage() {

    const [profile, setProfile] = useState(undefined);

    useEffect(() => {
        getProfile();
    }, []);

    const getProfile = () => {

        const url = `${BASE_URL}/${API_CLIENT}/person`;

        axios.get(url)
            .then((res) => {
                setProfile(res.data.profile);
            })
            .catch((err) => {
                console.log(err.response);
            });
    };

    const chooseProfile = (profileId, choice) => {
        const url = `${BASE_URL}/${API_CLIENT}/choose-person`;

        const body = {
            id: profileId,
            choice: choice
        };

        axios.post(url, body)
            .then((res) => {

                if (body.choice && res.data.isMatch) {
                    alert("Deu match!");
                };

                getProfile();
            })
            .catch((err) => {
                console.log(err.message);
            });
    };

    const resetProfiles = () => {
        const url = `${BASE_URL}/${API_CLIENT}/clear`;

        axios.put(url)
            .then(() => {
                alert("Perfis resetados com sucesso!");
                getProfile();
            })
            .catch((err) => {
                console.log(err.message);
            });
    };

    const profileCard = profile ? (
        <Container>
            <img
                src={profile.photo}
                alt={profile["photo_alt"]}
                height={"240px"}
            ></img>
            <p>{profile.name}, {profile.age}</p>
            <p>{profile.bio}</p>
            <button onClick={() => { chooseProfile(profile.id, false) }}>Dislike</button>
            <button onClick={() => { chooseProfile(profile.id, true) }}>Like</button>
        </Container>
    ): (
        <Container>
            <h3>Acabaram os matches! Clique em 'Resetar Perfis' para reiniciar</h3>
            <button onClick={() => resetProfiles()}>Resetar Perfis</button>
        </Container> 
    )

    return (
        <>
            <TituloPerfis>Perfis</TituloPerfis>
            {profileCard}
        </>
    );
};

export default ProfilesPage;