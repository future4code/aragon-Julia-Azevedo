import { useState } from 'react';
import Header from '../components/Header';
import ProfilesPage from './ProfilesPage';
import MatchesPage from './MatchesPage';

function RenderPages() {

    const [page, setPage] = useState('profiles');
    const renderActualPage = () => {
        switch (page) {
            case 'profiles':
                return <ProfilesPage />
            case 'matches':
                return <MatchesPage />
            default:
                return <ProfilesPage />
        };
    };
    
    const goToProfilesPage = () => {
        setPage('profiles');
    };

    const goToMatchesPage = () => {
        setPage('matches');
    };

    return (
        <>
            <Header 
                page={page}
                goToProfilesPage={goToProfilesPage}
                goToMatchesPage={goToMatchesPage}
            />
            <hr />
            <main>
                {renderActualPage()}
            </main>
        </>
    );
};

export default RenderPages;
