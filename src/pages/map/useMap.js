import { ref } from 'vue';
import { MARKER_SPRITE_POSITION, MARKER_DATA } from './markerSprite';

export function useMap(HOME_PATH) {
  const markers = ref([]);
  const selectedMarker = ref(null);

  const initializeMap = (mapElement) => {
    const map = new naver.maps.Map(mapElement, {
      center: new naver.maps.LatLng(37.3595704, 127.105399),
      zoom: 10,
      scaleControl: true,
      logoControl: false,
      mapDataControl: false,
      zoomControl: true,
      zoomControlOptions: {
        style: naver.maps.ZoomControlStyle.SMALL,
        position: naver.maps.Position.TOP_RIGHT,
      },
    });

    const bounds = map.getBounds();
    const southWest = bounds.getSW();
    const northEast = bounds.getNE();
    const lngSpan = northEast.lng() - southWest.lng();
    const latSpan = northEast.lat() - southWest.lat();

    for (const key in MARKER_SPRITE_POSITION) {
      const position = new naver.maps.LatLng(
        southWest.lat() + latSpan * Math.random(),
        southWest.lng() + lngSpan * Math.random()
      );

      const marker = new naver.maps.Marker({
        map: map,
        position: position,
        title: key,
        icon: {
          url: `${HOME_PATH}/img/example/sp_pins_spot_v3.png`,
          size: new naver.maps.Size(24, 37),
          anchor: new naver.maps.Point(12, 37),
          origin: new naver.maps.Point(
            MARKER_SPRITE_POSITION[key][0],
            MARKER_SPRITE_POSITION[key][1]
          ),
        },
        zIndex: 100,
      });

      naver.maps.Event.addListener(marker, 'click', () => {
        console.log('penguin click log');
        selectedMarker.value = {
          latitude: marker.getPosition().lat(),
          longitude: marker.getPosition().lng(),
          title: key,
        };
      });

      markers.value.push(marker);
    }

    naver.maps.Event.addListener(map, 'idle', () => {
      updateMarkers(map, markers.value);
    });
  };

  // 마커 업데이트 함수
  const updateMarkers = (map, markers, emit) => {
    const mapBounds = map.getBounds();

    markers.forEach((marker) => {
      const position = marker.getPosition();

      if (mapBounds.hasLatLng(position)) {
        showMarker(map, marker);
        // 마커가 보일 때 컴포넌트를 렌더링
        emit('markerVisible', marker);
      } else {
        hideMarker(marker);
      }
    });

    console.log('penguin update log');
  };

  const showMarker = (map, marker) => {
    if (marker.getMap()) return;
    marker.setMap(map);
  };

  const hideMarker = (marker) => {
    if (!marker.getMap()) return;
    marker.setMap(null);
  };

  return {
    initializeMap,
    markers,
    selectedMarker,
  };
}
