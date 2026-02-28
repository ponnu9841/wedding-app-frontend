import {
   Table,
   TableBody,
   TableCell,
   TableHead,
   TableHeader,
   TableRow,
} from "@/components/ui/table";
import {
   type ColumnDef,
   flexRender,
   getCoreRowModel,
   useReactTable,
} from "@tanstack/react-table";
import { Skeleton } from "@/components/ui/skeleton";
import { Fragment, useEffect, useRef, useState } from "react";
import { useAppDispatch } from "@/hooks/use-store";
import { type ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { cn } from "@/lib/utils";

type CustomColumnDef<T> = ColumnDef<T> & {
   isCustomHeader?: boolean;
   customHeader?: React.ReactNode;
   align?: string;
   width?: number;
};

type InfiniteScrollProps = {
   infiniteScroll: true;
   pageNo: number;
   totalPages: number;
   setPageNo: ActionCreatorWithPayload<any>; //eslint-disable-line
};

type NoInfiniteScrollProps = {
   infiniteScroll?: false;
   pageNo?: number;
   totalPages?: number;
   setPageNo?: ActionCreatorWithPayload<any>; //eslint-disable-line
};

type GenericTableProps = {
   rows: any; //eslint-disable-line
   columns: CustomColumnDef<any>[]; //eslint-disable-line
   noDataComponent?: React.ReactNode;
   loading?: boolean;
   renderSubComponent?: (row: any) => React.ReactNode; //eslint-disable-line
   isStripedRows?: boolean;
   height?: number | string;
} & (InfiniteScrollProps | NoInfiniteScrollProps);

export default function GenericTable({
   rows,
   columns,
   noDataComponent,
   infiniteScroll,
   pageNo,
   totalPages,
   setPageNo,
   loading = false,
   isStripedRows = true,
   renderSubComponent,
   height = "25rem",
}: GenericTableProps) {
   const dispatch = useAppDispatch();
   const [expandedRowIds, setExpandedRowIds] = useState<Set<string>>(new Set());

   const table = useReactTable({
      data: rows,
      columns: columns as CustomColumnDef<any>[], //eslint-disable-line
      getCoreRowModel: getCoreRowModel(),
   });

   const tableRef = useRef<HTMLDivElement>(null);

   useEffect(() => {
      const tableContainer = tableRef.current;
      if (!tableContainer) return;
      if (!infiniteScroll) return;

      const handleScroll = () => {
         const scrollHeight = tableContainer.scrollHeight;
         const scrollTop = tableContainer.scrollTop;
         const clientHeight = tableContainer.clientHeight;
         
         if (scrollTop + clientHeight >= scrollHeight - 50) {
            console.log(pageNo < totalPages && !loading);
            if (pageNo < totalPages && !loading) dispatch(setPageNo(pageNo + 1));
         }
      };

      tableContainer.addEventListener("scroll", handleScroll);

      return () => {
         tableContainer.removeEventListener("scroll", handleScroll);
      };
   }, [pageNo, totalPages, setPageNo, loading, infiniteScroll]);

   const toggleRow = (rowId: string) => {
      setExpandedRowIds((prev) => {
         const newSet = new Set(prev);
         if (newSet.has(rowId)) {
         newSet.delete(rowId);
         } else {
         newSet.add(rowId);
         }
         return newSet;
      });
   };

   return (
      <div
         className="overflow-y-auto scrollbar-hide"
         style={{
            maxHeight: infiniteScroll ? typeof height === "number" ? `${height}px` : height : "auto",
         }}
			ref={tableRef}
      >
         <Table>
            <TableHeader>
               {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow
                     key={headerGroup.id}
                     className="rounded-lg bg-card rounded-tl-[0.5rem] border-none hover:bg-card"
                  >
                     {headerGroup.headers.map((header, index) => {
                        const align = (header.column.columnDef  as CustomColumnDef<any>).align; // eslint-disable-line
                        let alignClass = "text-left";
                        if (align === "center") alignClass = "text-center";
                        if (align === "right") alignClass = "text-right";
                        const isCustomHeader = (header.column.columnDef  as CustomColumnDef<any>).isCustomHeader; // eslint-disable-line
                        const customHeader = (header.column.columnDef  as CustomColumnDef<any>).customHeader; // eslint-disable-line
                        return (
                           <TableHead
                              key={header.id}
                              className={cn(
                                 "text-xs 3xl:text-sm text-foreground/60 h-13.5 px-2.5",
                                 isCustomHeader && "h-fit p-0",
                                 index === 0 ? "rounded-tl-[0.5rem]" : "",
                                 index ===  headerGroup.headers.length - 1 ? "rounded-tr-[0.5rem]" : "",
                                 alignClass
                              )}
                           >
                              {header.isPlaceholder
                                 ? null
                                 : isCustomHeader
                                 ? customHeader
                                 : flexRender(
                                      header.column.columnDef.header,
                                      header.getContext()
                                   )}
                           </TableHead>
                        );
                     })}
                  </TableRow>
               ))}
            </TableHeader>
            <TableBody>
               {loading && pageNo === 1
                  ? Array(5)
                       .fill(null)
                       .map((_, index) => (
                          <TableRow key={index}>
                             {columns.map((_, index2) => (
                                <TableCell
                                   key={`skeleton-${index2}`}
                                   className="py-3"
                                >
                                   <Skeleton className="w-full h-4" />
                                </TableCell>
                             ))}
                          </TableRow>
                       ))
                  : table.getRowModel().rows.map((row, index) => (
                       <Fragment key={index}>
                          <TableRow 
                           className={cn("text-xs border-b border-foreground/40 last:border-b-0", isStripedRows && index % 2 === 0 ? "bg-background" : "bg-card")}
                           onClick={() => toggleRow(row.id)}
                          >
                             {row.getVisibleCells().map((cell) => {
                              let textAlign = "text-left";
                              const align = (cell.column.columnDef  as CustomColumnDef<any>).align; // eslint-disable-line
                              if (align === "center") textAlign = "text-center";
                              if (align === "right") textAlign = "text-right";
                              const width = (cell.column.columnDef  as CustomColumnDef<any>).width || "fit-content"; // eslint-disable-line
                              return(
                                <TableCell key={cell.id} className={cn("px-2.5 text-wrap py-5", textAlign)} style={{
                                 width,
                                }}>
                                   {flexRender(
                                      cell.column.columnDef.cell, {
                                         ...cell.getContext(),
                                         expandedRowIds,
                                         toggleRow,
                                      }
                                   )}
                                </TableCell>
                             )})}
                          </TableRow>
                          {/* 👇 Nested SubComponent */}
                           {renderSubComponent && expandedRowIds.has(row.id) && (
                              <TableRow className="bg-muted">
                                 <TableCell colSpan={columns.length}>
                                    {renderSubComponent(row)}
                                 </TableCell>
                              </TableRow>
                           )}
                       </Fragment>
                    ))}

               {!noDataComponent && !loading && rows.length === 0 && (
                  <TableRow>
                     <TableCell
                        className="w-full py-10 text-sm font-normal text-center"
                        colSpan={columns.length}
                     >
                        No Record Found
                     </TableCell>
                  </TableRow>
               )}
               {noDataComponent && !loading && rows.length === 0 && (
                  <TableRow>
                     <TableCell colSpan={columns.length}>
                        {noDataComponent}
                     </TableCell>
                  </TableRow>
               )}
            </TableBody>
         </Table>
         <div className="h-4" />
      </div>
   );
}
