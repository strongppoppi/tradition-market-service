export const useMyLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const myLocation = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      };
      console.log(myLocation);
    });
  } else {
    window.alert("현재위치를 알수 없습니다.");
  }
};