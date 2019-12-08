import { Controller, Get, Post, Put, Delete } from '@nestjs/common';

@Controller('news')
export class NewsController {
    @Get()
    getAllnews() {
        return 'getAllnews';
     }

    @Get('/:id')
    getnews() {
        return 'getnews';
     }

    @Post()
    postnews() {
        return 'postnews';
     }

    @Put('/:id')
    putnews() {
        return 'putnews';
     }

    @Delete('/:id')
    deletenews() {
        return 'deletenews';
     }

}



