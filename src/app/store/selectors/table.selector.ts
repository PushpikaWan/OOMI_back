import { ErrorCode } from '../../models/enums';
import { Table } from '../../models/models';


export const getTableData = (state: any): Table => state.tableState.tableData;
export const getTableError = (state: any): ErrorCode => state.tableState.error;
