import { getCoreRowModel } from "@tanstack/react-table";

export const genereateREactTableOptions = (data: [], columns: []) => {
   const tableOptions = {
      data,
      columns,
      columnResizeMode: "onChange",
      getCoreRowModel: getCoreRowModel(),
   };
   return tableOptions;
};
