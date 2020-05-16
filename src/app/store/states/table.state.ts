import { Table } from '../../models/models';


export interface TableState {
  tableData: Table;
  isError: boolean;
  error: string;
}

export const initialTableState: TableState = {
  tableData: null,
  isError: false,
  error: null
};
