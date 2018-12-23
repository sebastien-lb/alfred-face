export interface IDataSource {
    id: string;
    name: string;
    description: string;
    data_type: string;
    endpoint?: string;
    entrypoint?: string;
    data_polling_type: string;
    // is it really usefull ? 
    // smart_object: string;
    latest_value?: any;
}
