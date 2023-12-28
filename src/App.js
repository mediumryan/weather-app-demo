import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useGeolocation } from '@uidotdev/usehooks';
import { fetchData } from './api';
import { styled } from 'styled-components';
import Weather from './Weather';

const MainWrapper = styled.div`
    background-color: var(--white-100);
    height: 100vh;
    display: flex;
    justify-content: center;
`;

const Loader = styled.div`
    margin-top: 20rem;
    font-size: 2rem;
    font-weight: 500;
    font-style: italic;
    color: var(--accent-100);
`;

function WeatherApp() {
    // 사용자 geo값 요청
    const geo = useGeolocation();

    // 위치 정보가 변경될 때마다 새로운 쿼리 키를 생성
    const queryKey = ['weatherData', geo.latitude, geo.longitude];

    // useQuery를 사용하여 데이터 가져오기
    const { isLoading, data, error } = useQuery(
        queryKey,
        () => fetchData(geo.latitude, geo.longitude),
        {
            enabled:
                !geo.loading &&
                geo.latitude !== undefined &&
                geo.longitude !== undefined,
        }
    );

    useEffect(() => {
        if (error) {
            console.error(error);
        }
    }, [error]);

    return (
        <MainWrapper>
            {isLoading ? (
                <Loader>Loading...</Loader>
            ) : error ? (
                <Loader>Error: {error.message}</Loader>
            ) : (
                <Weather data={data} />
            )}
        </MainWrapper>
    );
}

function App() {
    return <WeatherApp />;
}

export default App;
