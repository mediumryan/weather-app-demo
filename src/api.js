const API_KEY = '30a223157b4e106a3d4631fa76a27b4a';

export const fetchData = async (lat, lon) => {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
        );
        if (!response.ok) {
            throw new Error('API 요청이 실패했습니다.');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(`API 요청 중 오류 발생: ${error.message}`);
    }
};
