import { ref } from 'vue';
import { MARKER_SPRITE_POSITION } from './markerSprite';

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

    // 필터 버튼 HTML
    var filterButtonsHtml = `
        <div class="filter-buttons">
            <a href="#" class="btn_filter " id="apartment">핫플</a>
            <a href="#" class="btn_filter" id="villa">안전</a>
            <a href="#" class="btn_filter" id="one-room">편의</a>
        </div>`;

    // 맵이 초기화되면 버튼 추가
    naver.maps.Event.once(map, 'init', function () {
      // 사용자 정의 컨트롤 추가
      var customControl = new naver.maps.CustomControl(filterButtonsHtml, {
        position: naver.maps.Position.RIGHT_BOTTOM,
      });

      customControl.setMap(map);

      // 각 버튼에 대한 클릭 이벤트 리스너 추가
      var filterButtons = customControl
        .getElement()
        .querySelectorAll('.btn_filter');

      filterButtons.forEach(function (button) {
        button.addEventListener('click', function (e) {
          e.preventDefault();
          // active 클래스 토글
          if (button.classList.contains('active')) {
            button.classList.remove('active');
          } else {
            button.classList.add('active');
          }
        });
      });

      // Map 객체의 controls 활용하기
      map.controls[naver.maps.Position.RIGHT_CENTER].push(
        customControl.getElement()
      );
    });

    const bounds = map.getBounds();
    const southWest = bounds.getSW();
    const northEast = bounds.getNE();
    const lngSpan = northEast.lng() - southWest.lng();
    const latSpan = northEast.lat() - southWest.lat();

    for (const key in MARKER_SPRITE_POSITION) {
      const position = new naver.maps.LatLng(southWest.lat() + latSpan * Math.random(), southWest.lng() + lngSpan * Math.random());

      const marker = new naver.maps.Marker({
        map: map,
        position: position,
        title: key, // 마커의 title을 필터 구분자로 사용
        icon: {
          url: `${HOME_PATH}/img/example/sp_pins_spot_v3.png`,
          size: new naver.maps.Size(24, 37),
          anchor: new naver.maps.Point(12, 37),
          origin: new naver.maps.Point(MARKER_SPRITE_POSITION[key][0], MARKER_SPRITE_POSITION[key][1]),
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

  // 필터 적용 함수
  function applyFilter(type) {
    // 모든 마커를 숨김
    markers.value.forEach((marker) => {
      marker.setMap(null);
    });

    // 선택된 타입의 마커만 표시
    markers.value.forEach((marker) => {
      if (marker.title === type) {
        marker.setMap(map);
      }
    });

    console.log(`${type} 필터 적용됨`);
  }

  // 마커 업데이트 함수
  const updateMarkers = (map, markers) => {
    const mapBounds = map.getBounds();

    markers.forEach((marker) => {
      const position = marker.getPosition();

      if (mapBounds.hasLatLng(position)) {
        showMarker(map, marker);
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
