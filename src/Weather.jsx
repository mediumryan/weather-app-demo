import { styled } from 'styled-components';

const WeatherWrapper = styled.div``;

const Title = styled.h1`
    font-size: var(--font-size-huge);
    font-weight: 800;
    color: var(--primary-100);
    margin-bottom: var(--margin-medium-large);
    text-align: center;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: var(--padding-double-large);
    border-radius: 20px;
    background: linear-gradient(var(--accent-100), var(--primary-200));
    box-shadow: var(--accent-100) 0px 0px 0px 2px,
        var(--accent-100) 0px 4px 6px -1px, var(--accent-100) 0px 1px 0px inset;
    p {
        margin: var(--margin-medium-large) 0;
        font-size: var(--font-size-medium-large);
    }
`;

export default function Weather({ data }) {
    return (
        <WeatherWrapper>
            <Title>날씨 정보</Title>
            <Content>
                <p>위치: {data.name}</p>
                <p>온도: {data.main.temp}°C</p>
                <p>날씨: {data.weather[0].main}</p>
                <p>습도: {data.main.humidity}%</p>
            </Content>
        </WeatherWrapper>
    );
}
