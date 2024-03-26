export const changeTypeToStyles = (type: "PRIMARY" | "SECONDARY" | "DISABLED") => {
  switch (type) {
    case "PRIMARY":
      return "bg-layer-inverse-1 border border-layer-inverse-1";
    case "SECONDARY":
      return "bg-layer-1 border border-layer-inverse-1";
    case "DISABLED":
      return "bg-layer-disabled border border-layer-disabled";
    default:
      return "bg-layer-inverse-1 border border-layer-inverse-1";
  }
};

export const changeSizeToClassName = (size: "LG" | "MD" | "SM") => {
  switch (size) {
    case "LG":
      return "py-3 px-6";
    case "MD":
      return "py-2.5 px-5";
    case "SM":
      return "py-2 px-4.5";
    default:
      return "py-2.5 px-5";
  }
};
