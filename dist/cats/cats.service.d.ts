import { Cat } from 'src/cats/interfaces/cat.interface';
export declare class CatsService {
    private cats;
    create(cat: Cat): void;
    findAll(): Cat[];
    remove(name: string): void;
}
