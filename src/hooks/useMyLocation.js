  // 나의 현 위치 가져오기
  export const useMyLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let myLocation = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };
      });
    } else {
      window.alert("현재위치를 알수 없습니다.");
    }
  };