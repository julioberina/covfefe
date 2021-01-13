import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
    @Get()
    getCoffees(): string {
        return 'This action returns all coffees';
    }

    @Get('flavors')
    getFlavors(): string {
        return 'This action returns all coffee flavors';
    }

    @Get(':id')
    getCoffee(@Param('id') id: number): string {
        return `Coffee #${id}`;
    }

    @Post()
    createCoffee(@Body('name') bodyName) {
        return `${bodyName} is making coffee`;
    }
}
