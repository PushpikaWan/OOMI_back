import { Table } from '../../models/models';


export interface TableState {
  tableData: Table;
  isWaitingForJoinConfirmation: boolean;
  isError: boolean;
  error: string;
}

export const initialTableState: TableState = {
  tableData: null,
  isWaitingForJoinConfirmation: false,
  isError: false,
  error: null
};
