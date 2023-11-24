import Map, { Marker } from "react-map-gl";
import { Box } from "@mui/material";
import { FmdGood } from "@mui/icons-material";
const MapShow = () => {
  return (
    <Box mt={10}>
      <Map
        mapLib={import("mapbox-gl")}
        initialViewState={{
          longitude: -100,
          latitude: 40,
          zoom: 2,
        }}
        mapboxAccessToken={import.meta.env.VITE_MAP_SK}
        style={{ width: "100%", height: 400, overflow: "hidden" }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        <Marker longitude={-100} latitude={40} anchor="bottom">
          <FmdGood sx={{ color: "primary" }} />
        </Marker>
      </Map>
    </Box>
  );
};

export default MapShow;
