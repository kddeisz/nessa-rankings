import React from "react";

const Icon = ({ className, path }) => (
  <svg viewBox="0 0 512 512" className={className}>
    <path d={path} />
  </svg>
);

export const NavIcon = () => (
  <Icon
    className="nav--icon"
    path="M256 48C141 48 48 141 48 256s93 208 208 208c115 0 208-93 208-208S371 48 256 48zM256 422c-92 0-166-74-166-166S164 90 256 90 422 164 422 256 348 422 256 422zM266 152h-31v125l109 66 16-26-94-55V152z"
  />
);

export const SearchInputIcon = () => (
  <Icon
    className="search--input--icon"
    path="M344 298c15-23 24-51 24-81 0-84-68-152-152-152-84 0-152 68-152 153s68 153 152 153c31 0 59-9 83-24l7-5 109 109 34-34-108-108 5-7zM301 131c23 23 35 53 35 85s-12 63-35 85c-22 23-53 35-85 35s-62-12-85-35c-22-22-35-53-35-85s13-62 35-85c23-22 53-35 85-35s63 13 85 35z"
  />
);

export const SearchResultIcon = () => (
  <Icon
    className="search--result--icon"
    path="M448 448c0 0 0-26-2-40-2-11-17-25-81-49-63-23-59-12-59-55 0-28 14-12 23-64 4-21 6-7 14-40 4-17-3-19-2-27s2-16 3-33c2-21-18-76-88-76s-89 55-87 76c2 17 2 24 3 33s-6 10-2 27c8 33 10 19 14 40 9 53 23 37 23 64 0 43 4 32-59 55-64 24-79 38-81 49-2 14-2 40-2 40h384z"
  />
);

export default Icon;
