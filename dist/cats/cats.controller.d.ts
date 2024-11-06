import { CreateCatDto } from 'src/cats/dto/create-cat.dto';
import { CatsService } from './cats.service';
export declare class CatsController {
    private catsService;
    constructor(catsService: CatsService);
    findAll(id: string, request: Request): import("./interfaces/cat.interface").Cat[];
    findBreed(): Promise<string>;
    create(createCatDto: CreateCatDto): {
        message: string;
    };
    removeByName(param: any): string;
}
