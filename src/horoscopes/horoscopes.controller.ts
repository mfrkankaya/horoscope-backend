import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { HoroscopeContent } from './horoscope.model';
import { HoroscopesService } from './horoscopes.service';

@Controller('horoscopes')
export class HoroscopesController {
  constructor(private readonly horoscopesService: HoroscopesService) {}

  @Get()
  getHoroscopes() {
    return this.horoscopesService.getHoroscopes();
  }

  @Get('/:horoscopeId')
  getSingleHoroscope(@Param('horoscopeId') horoscopeId: string) {
    return this.horoscopesService.getSingleHoroscope(horoscopeId);
  }

  @Put('/:horoscopeId')
  updateHoroscope(
    @Param('horoscopeId') horoscopeId: string,
    @Body() body: HoroscopeContent,
  ) {
    return this.horoscopesService.updateHoroscope(horoscopeId, body);
  }
}
