export interface IDataSource {
    id: string;
    name: string;
    description: string;
    data_type: string;
    endpoint?: string;
    entrypoint?: string;
    data_polling_type: string;
    smart_object: string;
}
