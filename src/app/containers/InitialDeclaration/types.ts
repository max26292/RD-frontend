/* --- STATE --- */
export interface InitialDeclarationState {}

export type ContainerState = InitialDeclarationState;


export interface DataType {
    columns: ItemType[];
    rows: any[];
}
export interface ItemType{
    label: string;
    field: string;
    sort: string;
    width: number;
}