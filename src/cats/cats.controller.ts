import { Controller, Get, Post, Query, Req, Body, HttpCode, Delete, Param } from '@nestjs/common';
import { CreateCatDto } from 'src/cats/dto/create-cat.dto';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
    constructor(private catsService: CatsService) {}
    
    @Get()
    findAll(@Query('id') id: string, @Req() request: Request) {
        //console.log(JSON.stringify(request.query));
        return this.catsService.findAll();
    }


    @Get('breed')
    async findBreed(): Promise<string> {
        return 'This action returns all breeds dddd ';
    }

    @Post()
    @HttpCode(201)
    create(@Body() createCatDto : CreateCatDto) {
        this.catsService.create(createCatDto);
        const ret = {message: `A new ${createCatDto.name} cat has been created!!!`};
        return ret;
    }


    @Delete(':name')
    removeByName(@Param() param: any) {
        this.catsService.remove(param.name);
        return `This action removes ${param.name} cat`;
    }
}

