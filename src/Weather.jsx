import { styled } from 'styled-components';
// icons
import {
    WiCloudy,
    WiDaySunny,
    WiFog,
    WiNa,
    WiRain,
    WiSnow,
    WiThunderstorm,
} from 'react-icons/wi';

const WeatherWrapper = styled.div`
    position: relative;
`;

const Title = styled.h1`
    font-size: 3rem;
    font-weight: 700;
    color: var(--accent-100);
    margin: 5rem 0 2rem 0;
    text-align: center;
`;

const WeatherIcon = styled.div`
    display: flex;
    justify-content: center;
    margin: 1rem 0;
    svg {
        font-size: 5rem;
        color: var(--accent-100);
    }
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2rem;
    border-radius: 10px;
    border: 3px solid var(--accent-100);
    p {
        margin-bottom: 3rem;
        font-size: 2rem;
        letter-spacing: 2px;
        span {
            font-weight: 700;
        }
    }
    p:last-child {
        margin: 0;
    }
`;

const Footer = styled.footer`
    color: var(--white-200);
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 3rem 0;
    display: flex;
    justify-content: center;
    font-style: italic;
    font-size: 0.9rem;
`;

export default function Weather({ data }) {
    const Today = new Date();

    return (
        <WeatherWrapper>
            <Title>{Today.toLocaleDateString()}</Title>
            <WeatherIcon>
                {data.weather[0].main === 'Clear' ? (
                    <WiDaySunny />
                ) : data.weather[0].main === 'Clouds' ? (
                    <WiCloudy />
                ) : data.weather[0].main === 'Rain' ? (
                    <WiRain />
                ) : data.weather[0].main === 'Snow' ? (
                    <WiSnow />
                ) : data.weather[0].main === 'Thunderstorm' ? (
                    <WiThunderstorm />
                ) : data.weather[0].main === 'Mist' ? (
                    <WiNa />
                ) : data.weather[0].main === 'Drizzle' ? (
                    <WiRain />
                ) : (
                    data.weather[0].main === 'Fog' && <WiFog />
                )}
            </WeatherIcon>
            <Content>
                <p>
                    <span>위치:</span> {data.name}
                </p>
                <p>
                    <span>온도:</span> {data.main.temp.toFixed(1)}°C
                </p>
                <p>
                    <span>날씨:</span> {data.weather[0].main}
                </p>
                <p>
                    <span>습도:</span> {data.main.humidity}%
                </p>
            </Content>
            <Footer>Designed by Ryan</Footer>
        </WeatherWrapper>
    );
}
