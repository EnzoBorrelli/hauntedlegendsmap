"use client";
import React, { useRef, useState } from "react";
import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import CustomPin from "./customPin";
import LegendCard from "./legendCard";
import { legends, legendType } from "./legends";
import { GiPumpkinMask } from "react-icons/gi";

const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN as string;

const placeholder: legendType = {
  title: "",
  img: "",
  country: "",
  date: "",
  origin: "",
  coords:[0,0],
  icon:'/markerIcons/halloweenMark.ico'
};

export default function HauntedMap() {
  const [legend, setLegend] = useState<legendType>(placeholder);
  const mapRef = useRef<any>(null);
  const { current: map } = mapRef;
  const [viewState, setViewState] = useState({
    longitude: -100,
    latitude: 40,
    zoom: 2,
  });

  const isEmpty = (obj: Record<string, any>): boolean => {
    return Object.values(obj).some(
      (value) => typeof value === "string" && value.trim() === ""
    );
  };

  const handleClick = ({
    lng,
    lat,
    data,
  }: {
    lng: number;
    lat: number;
    data: legendType;
  }) => {
    if (map) {
      map.flyTo({
        center: [lng, lat], // Longitud y latitud
        zoom: 10,
        speed: 1.2,
        curve: 1.5,
      });
    }
    setLegend(data);
  };
  return (
    <div className="size-full flex justify-center overflow-hidden p-2 relative">
      <Map
        ref={mapRef}
        mapboxAccessToken={mapboxToken}
        {...viewState}
        onMove={(evt) => setViewState(evt.viewState)}
        style={{ width: "90%", height: 500 }}
        mapStyle="mapbox://styles/endy-kaishi/cm2x9r11000h201pd4mll215g"
      >
        {legends.map((legend, index) => (
          <Marker key={index} longitude={legend.coords[0]} latitude={legend.coords[1]}>
            <CustomPin
              icon={legend.icon}
              onClick={() =>
                handleClick({
                  lng: legend.coords[0],
                  lat: legend.coords[1],
                  data: legend,
                })
              }
            />
          </Marker>
        ))}
      </Map>
      {isEmpty(legend) ? (
        <div className="absolute text-orange-400 top-32 left-30 animate-fadeOut z-40">
          <GiPumpkinMask size={300} />
        </div>
      ) : (
        ""
      )}

      {!isEmpty(legend) ? (
        <LegendCard
          legendData={legend}
          onClick={() => setLegend(placeholder)}
        />
      ) : (
        ""
      )}
    </div>
  );
}
