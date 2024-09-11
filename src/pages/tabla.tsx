"use client";

import * as React from "react";
import {
  ColumnDef,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const data: Payment[] = [
  {
    id: "blqecj4p",
    fechaInicial: "05/09/2024 06:30:10",
    fechaFinal: "05/09/2024 06:45:28",
    nombre: "Bot-name",
    estado: "OK",
    mensaje: "",
  },
  {
    id: "bkqecj4p",
    fechaInicial: "05/09/2024 06:30:10",
    fechaFinal: "05/09/2024 06:45:28",
    nombre: "Bot-name",
    estado: "OK",
    mensaje: "",
  },
  {
    id: "bhq6cj4p",
    fechaInicial: "05/09/2024 06:30:10",
    fechaFinal: "05/09/2024 06:45:28",
    nombre: "Bot-name",
    estado: "OK",
    mensaje: "",
  },
  {
    id: "bhqefj4p",
    fechaInicial: "05/09/2024 06:30:10",
    fechaFinal: "05/09/2024 06:45:28",
    nombre: "Bot-name",
    estado: "OK",
    mensaje: "",
  },
  {
    id: "bhqejj4p",
    fechaInicial: "05/09/2024 06:30:10",
    fechaFinal: "05/09/2024 06:45:28",
    nombre: "Bot-name",
    estado: "OK",
    mensaje: "",
  },
  {
    id: "bhqecj4p",
    fechaInicial: "05/09/2024 06:30:10",
    fechaFinal: "05/09/2024 06:45:28",
    nombre: "Bot-name",
    estado: "OK",
    mensaje: "",
  },
];

export type Payment = {
  id: string;
  fechaInicial: string;
  fechaFinal: string;
  nombre: string;
  estado: "OK" | "Error" | "Alerta";
  mensaje: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "fechaInicial",
    header: "Fecha Inicial",
  },
  {
    accessorKey: "fechaFinal",
    header: "Fecha Final",
  },
  {
    accessorKey: "nombre",
    header: "Paso",
  },
  {
    accessorKey: "estado",
    header: "Estado",
  },
  {
    accessorKey: "mensaje",
    header: "Mensaje",
  },
];

export function DataTableDemo() {
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full flex flex-col items-center mt-8">
      <div className="flex items-center mb-4">
        <DropdownMenu>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => (
                <DropdownMenuCheckboxItem
                  key={column.id}
                  className="capitalize"
                  checked={column.getIsVisible()}
                  onCheckedChange={() => column.toggleVisibility()}
                >
                  {column.id}
                </DropdownMenuCheckboxItem>
              ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="w-full max-w-4xl rounded-md border bg-white shadow-md">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id} className="text-left">
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() ? "selected" : undefined}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="text-left">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}