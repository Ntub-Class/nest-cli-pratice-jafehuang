import { Controller, Delete, Put, Post, Get } from '@nestjs/common';

@Controller('student')
export class StudentController {
    @Get()
    getAllstudent() {
        return 'getAllstudent';
     }

    @Get('/:id')
    getstudent() {
        return 'getstudent';
     }

    @Post()
    poststudent() {
        return 'poststudent';
     }

    @Put('/:id')
    putstudent() {
        return 'putstudent';
     }

    @Delete('/:id')
    deletestudent() {
        return 'deletestudent';
    }
}