import { Navbar } from '../../ui'
import { Navigate, Route, Routes } from 'react-router-dom'
import { MarvelPage, DcPage, SearchPage, HeroPage } from '..';

const HeroesRoutes = () => {
    return (
        <>
            <Navbar />

            <div className='container'>
                <Routes>
                    <Route path='marvel' element={<MarvelPage />} />
                    <Route path='dc' element={<DcPage />} />

                    {/* Search, Heroe by id */}

                    <Route path='search' element={<SearchPage />} />
                    <Route path='hero/:keyHero' element={<HeroPage />} />

                    <Route path='/' element={<Navigate to="/marvel" />} />
                    {/* <Route path='/*' element={<Navigate to="/marvel" />} /> */}
                </Routes>
            </div>

        </>
    )
}

export default HeroesRoutes
