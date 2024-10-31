
export interface legendType {
  title: string;
  img: string;
  country: string;
  date: string;
  origin: string;
  coords:number[];
  icon: string
}

export const legends: legendType[] = [
  {
    title: "La Llorona",
    img: "/hauntedImgs/llorona.jpg",
    country: "México",
    date: "Siglo XVI",
    origin:
      "La leyenda habla de una mujer que, después de asesinar a sus hijos en un arranque de locura, se arrepiente y vaga por los ríos y lagos llorando y buscando a sus hijos. Se dice que su llanto puede escucharse en las noches y quienes lo oyen podrían sufrir desgracias.",
      coords:[-96.71346214,17.04176233],
      icon:"/markerIcons/ghostMark.ico"
  },
];
