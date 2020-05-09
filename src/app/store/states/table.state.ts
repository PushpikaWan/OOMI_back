import { GameError, Table } from '../../models/models';


export interface TableState {
  tableData: Table;
  error: GameError;
}

export const initialTableState: TableState = {
  tableData: null,
  error: null
};
