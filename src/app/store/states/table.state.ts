import { Table } from '../../models/models';


export interface TableState {
  tableData: Table;
  isWaitingForJoinConfirmation: boolean;
  isWaitingForPendingPlayersList: boolean;
  isError: boolean;
  error: string;
}

export const initialTableState: TableState = {
  tableData: null,
  isWaitingForJoinConfirmation: false,
  isWaitingForPendingPlayersList: false,
  isError: false,
  error: null
};
