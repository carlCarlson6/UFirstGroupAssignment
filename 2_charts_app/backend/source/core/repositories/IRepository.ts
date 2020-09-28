export interface IRepository<IEntity> {
    GetAllData(): Promise<Array<IEntity>>
}