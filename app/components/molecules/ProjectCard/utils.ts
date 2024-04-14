export const changeProjectToStyles = (title: string) => {
  switch (title) {
    case "밋펫":
      return "col-span-1 row-span-1";
    case "새폴더":
      return "col-span-3 row-span-1";
    case "SILVERBI 블로그":
      return "col-span-2 row-span-2";
    case "미슐랭면":
      return "col-span-1 row-span-1 border-border-1";
    case "아이디코":
      return "col-span-1 row-span-2";
    case "마이드림":
      return "col-span-1 row-span-1";
    default:
      return "col-span-1 row-span-1";
  }
};
